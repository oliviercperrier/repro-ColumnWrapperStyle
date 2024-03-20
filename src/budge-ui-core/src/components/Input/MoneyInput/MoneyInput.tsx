import React, { useCallback } from "react";
import { NumberInput, TNumberInputProps } from "../NumberInput";
import { isNil } from "../../../utils";
import useFormikField from "../../Form/useFormikField";

export type TMoneyInputProps = Omit<TNumberInputProps, "prefix" | "thousandSeparator" | "decimalScaleModifier">;

const MoneyInput = ({ value, ...props }: TMoneyInputProps) => {
  const { field, helpers } = useFormikField();
  const currentValue = isNil(value) ? (isNil(field?.value) ? null : field?.value) : value;

  const handleOnValueChange = (v: number | null) => {
    const newValue = isNil(v) ? null : v! * 100;
    props.onValueChange?.(newValue);
    helpers?.setValue(newValue);
  };

  const decimalModifier = useCallback((valueStr: string) => {
    if (valueStr && !Number.isNaN(Number(valueStr))) {
      return parseFloat(valueStr) % 1 === 0 ? 0 : 2;
    }

    return 2;
  }, []);

  return (
    <NumberInput
      prefix="$"
      thousandSeparator=","
      allowDecimal
      fixedDecimalScale
      snapStepValue
      {...props}
      value={isNil(currentValue) ? undefined : currentValue / 100}
      onValueChange={handleOnValueChange}
      decimalScaleModifier={decimalModifier}
      ignoreFormContext
    />
  );
};

export default MoneyInput;
