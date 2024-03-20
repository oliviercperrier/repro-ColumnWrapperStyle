import { TFormItemValueTypes } from "../Form";
import { RadioGroupContextType } from "./RadioGroup.context";
import { TRadioStatus } from "./Radio.types";

export const getStatus = ({
  groupContext,
  status,
  value,
  formValue,
}: {
  groupContext: RadioGroupContextType;
  status?: TRadioStatus;
  value: TFormItemValueTypes;
  formValue: TFormItemValueTypes;
}): TRadioStatus => {
  if (groupContext?.value !== undefined && groupContext?.value !== null) {
    return groupContext.value === value ? "checked" : "unchecked";
  }
  return status || (formValue ? "checked" : "unchecked");
};