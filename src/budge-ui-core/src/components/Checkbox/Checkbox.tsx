import { useComponentDefaultProps } from "@budgeinc/budge-ui-styling";
import React, { forwardRef, memo, useContext } from "react";
import { View } from "react-native";
import useFormikField from "../Form/useFormikField";
import { Stack } from "../Stack";
import { Pressable } from "../Pressable";
import { Text } from "../Text";
import { useStyles } from "./Checkbox.styles";
import { TCheckboxProps } from "./Checkbox.types";
import { CheckboxGroupContext } from "./Checkbox.Group.context";
import { getIsChecked } from "./utils";
import { CheckboxCheckedIcon, CheckboxUncheckedIcon } from "../Icons";

const Checkbox = forwardRef<View, TCheckboxProps>((props, ref) => {
  const { field, helpers, hasError } = useFormikField();
  const groupContext = useContext(CheckboxGroupContext);
  const {
    onValueChange,
    disabled = false,
    checked,
    value,
    label,
    labelAlign = "center",
    ignoreFormContext = false,
    ...rest
  } = useComponentDefaultProps("Checkbox", {}, props);

  const isChecked = getIsChecked({
    groupContext,
    formValue: ignoreFormContext ? undefined : field?.value,
    value: value!,
    checked,
  });

  const { iconColor, color } = useStyles({ disabled, hasError: ignoreFormContext ? false : hasError, isChecked });

  const handlePress = () => {
    if (groupContext && value !== undefined) {
      const newValue = isChecked
        ? groupContext.value?.filter(val => val !== value)
        : [...(groupContext.value || []), value];

      if (!ignoreFormContext) {
        helpers?.setValue?.(newValue);
      }

      groupContext.onValueChange?.(newValue || []);
    } else {
      const newValue = isChecked ? (value ? undefined : false) : value || true;

      if (!ignoreFormContext) {
        helpers?.setValue?.(newValue);
      }

      onValueChange?.(newValue);
    }
  };

  return (
    <Pressable ref={ref} onPress={handlePress} disabled={disabled} accessibilityRole="checkbox" {...rest}>
      <Stack.Horizontal alignItems={labelAlign}>
        {isChecked ? (
          <CheckboxCheckedIcon size={24} color={iconColor} />
        ) : (
          <CheckboxUncheckedIcon size={24} color={iconColor} />
        )}
        {typeof label === "string" ? (
          <Text color={color} fshrink={1}>
            {label}
          </Text>
        ) : (
          label
        )}
      </Stack.Horizontal>
    </Pressable>
  );
});

export default memo(Checkbox);
