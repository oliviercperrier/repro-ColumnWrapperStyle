import React, { forwardRef, memo } from "react";
import { View } from "react-native";
import useFormikField from "../Form/useFormikField";
import { CheckboxGroupContextProvider } from "./Checkbox.Group.context";
import { TCheckboxGroupProps } from "./Checkbox.types";
import Checkbox from "./Checkbox";
import { Stack } from "../Stack";

const CheckboxGroup = forwardRef<View, TCheckboxGroupProps>(
  ({ value, onValueChange, options, spacing = "xs" }, ref) => {
    const { field } = useFormikField();

    return (
      <CheckboxGroupContextProvider value={{ value: value || field?.value, onValueChange }}>
        <Stack ref={ref} spacing={spacing}>
          {options.map(option => (
            <Checkbox key={`${option.label}-${option.value}`} {...option} />
          ))}
        </Stack>
      </CheckboxGroupContextProvider>
    );
  }
);

export default memo(CheckboxGroup);
