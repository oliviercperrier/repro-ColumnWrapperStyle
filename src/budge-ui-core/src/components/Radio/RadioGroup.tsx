import React, { PropsWithChildren } from "react";
import { TNumberSize } from "@budgeinc/budge-ui-styling";
import { TFormItemValueTypes } from "../Form";
import useFormikField from "../Form/useFormikField";
import { RadioGroupContextProvider } from "./RadioGroup.context";
import { TOnValueChange } from "./Radio.types";
import Radio from "./Radio";
import { Stack } from "../Stack";

export type TRadioGroupOption = { label: string; value: TFormItemValueTypes; disabled?: boolean };

export type TRadioGroupProps = PropsWithChildren<{
  onValueChange?: TOnValueChange;
  value?: TFormItemValueTypes;
  options: TRadioGroupOption[];
  spacing?: TNumberSize;
}>;

const RadioGroup = ({ value, onValueChange, options, spacing = "xs" }: TRadioGroupProps) => {
  const { field } = useFormikField();

  return (
    <RadioGroupContextProvider value={{ value: value || field?.value, onValueChange }}>
      <Stack spacing={spacing}>
        {options.map(option => (
          <Radio key={`${option.label}-${option.value}`} {...option} />
        ))}
      </Stack>
    </RadioGroupContextProvider>
  );
};

export default RadioGroup;
