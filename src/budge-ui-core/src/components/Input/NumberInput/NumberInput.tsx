import React, { forwardRef, useCallback, useState } from "react";
import { numericFormatter, removeNumericFormat } from "react-number-format";
import { useComponentDefaultProps } from "@budgeinc/budge-ui-styling";
import { NativeSyntheticEvent, TextInput, TextInputFocusEventData } from "react-native";
import Input, { TInputOnBlur, TInputOnFocus, TInputProps } from "../Input";
import useFormikField from "../../Form/useFormikField";
import { isNil } from "../../../utils";
import { onKeyPressNumberInput } from "./utils";
import { ActionIcon } from "../../ActionIcon";
import { AddCircledIcon, RemoveIcon } from "../../Icons";

export type TNumberInputOnBlur = (params: {
  e: NativeSyntheticEvent<TextInputFocusEventData>;
  inputValue: string | undefined;
  setInputValue: (value: string | undefined) => void;
  floatValue: number | undefined;
}) => void;

export type TNumberInputProps = Omit<
  TInputProps,
  "value" | "onKeyPress" | "onChange" | "onChangeText" | "defaultValue" | "onBlur"
> & {
  min?: number;
  max?: number;
  value?: number;
  allowDecimal?: boolean;
  prefix?: string;
  suffix?: string;
  thousandSeparator?: string;
  decimalScale?: number;
  decimalScaleModifier?(valueStr: string): number;
  fixedDecimalScale?: boolean;
  decimalSeparator?: string;
  allowNegative?: boolean;
  withControls?: boolean;
  step?: number;
  snapStepValue?: boolean;
  onValueChange?: (value: number | null) => void;
  onBlur?: TNumberInputOnBlur;
};

const NumberInput = forwardRef<TextInput, TNumberInputProps>((props, ref) => {
  const { field, helpers } = useFormikField();
  const {
    value,
    min,
    max,
    onValueChange,
    keyboardType = "numeric",
    allowDecimal = true,
    allowNegative = false,
    prefix,
    suffix,
    thousandSeparator,
    decimalScale,
    decimalScaleModifier,
    fixedDecimalScale,
    decimalSeparator = ".",
    withControls = false,
    step = 1,
    ignoreFormContext = false,
    snapStepValue = false,
    ...others
  } = useComponentDefaultProps("NumberInput", {}, props);

  const currentValue: number | null = isNil(value) ? (isNil(field?.value) ? null : field?.value) : value;

  const format = useCallback(
    (valueStr: string) => {
      let dS = allowDecimal ? decimalScale : 0;

      if (allowDecimal && decimalScaleModifier) {
        dS = decimalScaleModifier(valueStr);
      }

      return numericFormatter(valueStr, {
        prefix,
        suffix,
        thousandSeparator,
        decimalScale: dS,
        fixedDecimalScale: allowDecimal ? fixedDecimalScale : true,
        decimalSeparator,
      });
    },
    [
      decimalScaleModifier,
      prefix,
      suffix,
      thousandSeparator,
      decimalSeparator,
      allowDecimal,
      fixedDecimalScale,
      decimalScale,
    ]
  );

  const removeFormatting = useCallback(
    (valueStr: string) =>
      removeNumericFormat(valueStr, getDefaultChangeMeta(valueStr), {
        prefix,
        suffix,
        thousandSeparator,
        decimalScale: allowDecimal ? decimalScale : 0,
        fixedDecimalScale: allowDecimal ? fixedDecimalScale : true,
        decimalSeparator,
      }),
    [prefix, suffix, thousandSeparator, decimalSeparator, allowDecimal, fixedDecimalScale, decimalScale]
  );

  const [_value, _setValue] = useState<string | null>(
    isNil(currentValue) ? "" : format?.(currentValue!.toString()) || ""
  );
  const [_floatValue, _setFloatValue] = useState<number | null>(currentValue);

  const handleOnBlur: TInputOnBlur = useCallback(
    (_, inputValue, setInputValue) => {
      if (inputValue) {
        _setValue(format?.(inputValue) || "");
      } else {
        _setValue("");
      }

      if (props.onBlur)
        props.onBlur({
          e: _,
          inputValue,
          setInputValue,
          floatValue: _floatValue || undefined,
        });
    },
    [_floatValue]
  );

  const handleOnFocus: TInputOnFocus = useCallback((_, inputValue, setInputValue) => {
    if (inputValue) {
      _setValue(removeFormatting?.(inputValue) || "");
    }

    if (props.onFocus) props.onFocus(_, inputValue, setInputValue);
  }, []);

  const handleChangeText = useCallback(
    (text: string) => {
      if (text && Number.isNaN(parseInt(text))) {
        return false;
      }

      const numberValue = text ? parseFloat(text) : null;

      _setFloatValue(numberValue);
      _setValue(removeFormatting?.(text) || "");
      onValueChange?.(numberValue);

      if (!ignoreFormContext) {
        helpers?.setValue(numberValue);
      }
    },
    [helpers?.setValue]
  );

  const getValueForControl = (floatValue: number, direction: -1 | 1) => {
    if (snapStepValue) {
      return direction === -1 ? Math.round(floatValue) : Math.floor(floatValue);
    }

    return floatValue;
  };

  const decrement = () => {
    const floatValue = getValueForControl(_floatValue || 0, -1);
    const newValue = getDecrementedValue({ value: floatValue, min, step, allowNegative });

    _setFloatValue(newValue);
    _setValue(format?.(newValue.toString()) || "");
    onValueChange?.(newValue);

    if (!ignoreFormContext) {
      helpers?.setValue(newValue);
    }
  };

  const increment = () => {
    let newValue = 0;
    const floatValue = getValueForControl(_floatValue || 0, 1);

    if (typeof _floatValue !== "number" || Number.isNaN(_floatValue)) {
      newValue = cclamp(floatValue || 0, min, max);
    } else if (max !== undefined) {
      newValue = floatValue + step <= max ? floatValue + step : max;
    } else {
      newValue = floatValue + step;
    }

    _setFloatValue(newValue);
    _setValue(format?.(newValue.toString()) || "");
    onValueChange?.(newValue);

    if (!ignoreFormContext) {
      helpers?.setValue(newValue);
    }
  };

  const leftControl = (
    <ActionIcon
      size="md"
      icon={RemoveIcon}
      disabled={others.disabled || (typeof _floatValue === "number" && min !== undefined && _floatValue <= min)}
      color="primary"
      variant="light"
      radius="xxl"
      onPress={decrement}
    />
  );
  const rightControl = (
    <ActionIcon
      size="md"
      icon={AddCircledIcon}
      disabled={others.disabled || (typeof _floatValue === "number" && max !== undefined && _floatValue >= max)}
      color="primary"
      variant="light"
      radius="xxl"
      onPress={increment}
    />
  );

  return (
    <Input
      ref={ref}
      {...others}
      value={_value || undefined}
      onChangeText={handleChangeText}
      onBlur={handleOnBlur}
      onFocus={handleOnFocus}
      onKeyPress={onKeyPressNumberInput(allowDecimal)}
      keyboardType={keyboardType}
      centered={withControls ? true : others.centered}
      leftSection={withControls ? leftControl : others.leftSection}
      rightSection={withControls ? rightControl : others.rightSection}
      ignoreFormContext
    />
  );
});

interface GetDecrementedValueInput {
  value: number;
  min: number | undefined;
  step: number | undefined;
  allowNegative: boolean | undefined;
}

function getDecrementedValue({ value, min, step = 1, allowNegative }: GetDecrementedValueInput) {
  const nextValue = value - step;

  if (min !== undefined && nextValue < min) {
    return min;
  }

  if (!allowNegative && nextValue < 0 && min === undefined) {
    return value;
  }

  if (min !== undefined && min >= 0 && nextValue <= min) {
    return nextValue;
  }

  return nextValue;
}

export function cclamp(value: number, min: number | undefined, max: number | undefined) {
  if (min === undefined && max === undefined) {
    return value;
  }

  if (min !== undefined && max === undefined) {
    return Math.max(value, min);
  }

  if (min === undefined && max !== undefined) {
    return Math.min(value, max);
  }

  return Math.min(Math.max(value, min!), max!);
}

export function getDefaultChangeMeta(value: string) {
  return {
    from: {
      start: 0,
      end: 0,
    },
    to: {
      start: 0,
      end: value.length,
    },
    lastValue: "",
  };
}

export default NumberInput;
