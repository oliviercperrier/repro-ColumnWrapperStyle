import { useComponentDefaultProps } from "@budgeinc/budge-ui-styling";
import React, { forwardRef, ReactNode, useContext } from "react";
import { View } from "react-native";
import { TFormItemValueTypes } from "../Form/Form.types";
import useFormikField from "../Form/useFormikField";
import RadioBox from "../Icons/RadioBox";
import RadioFilled from "../Icons/RadioFilled";
import { Stack } from "../Stack";
import { Pressable, TPressableProps } from "../Pressable";
import { Text } from "../Text";
import { RadioGroupContext } from "./RadioGroup.context";
import { useStyles } from "./Radio.styles";
import { TOnValueChange, TRadioStatus } from "./Radio.types";
import { getStatus } from "./utils";

export type TRadioProps = Omit<TPressableProps, "onPress"> & {
  value: TFormItemValueTypes;
  status?: TRadioStatus;
  label: ReactNode;
  disabled?: boolean;
  onValueChange?: TOnValueChange;
};

const Radio = forwardRef<View, TRadioProps>((props, ref) => {
  const { field, helpers, hasError } = useFormikField();
  const groupContext = useContext(RadioGroupContext);
  const {
    onValueChange,
    disabled = false,
    alignSelf = "flex-start",
    value,
    label,
    status,
    ...rest
  } = useComponentDefaultProps("Radio", {}, props);

  const isChecked =
    getStatus({
      value,
      status,
      formValue: field?.value,
      groupContext,
    }) === "checked";

  const { iconColor, color } = useStyles({ disabled, hasError, isChecked });

  const onPress = () => {
    helpers?.setValue?.(value);

    if (groupContext && groupContext.onValueChange) {
      groupContext.onValueChange(value);
    } else if (onValueChange) {
      onValueChange(value);
    }
  };

  return (
    <Pressable
      ref={ref}
      onPress={onPress}
      disabled={disabled}
      alignSelf={alignSelf}
      accessibilityRole="radio"
      {...rest}
    >
      <Stack.Horizontal alignItems="center">
        {isChecked ? <RadioFilled size={24} color={iconColor} /> : <RadioBox size={24} color={iconColor} />}
        <Text color={color} fshrink={1}>
          {label}
        </Text>
      </Stack.Horizontal>
    </Pressable>
  );
});

export default Radio;
