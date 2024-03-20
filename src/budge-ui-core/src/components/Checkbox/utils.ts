import { TFormItemValueTypes } from "../Form";
import { CheckboxGroupContextType } from "./Checkbox.Group.context";

export const getIsChecked = ({
  groupContext,
  value,
  checked,
  formValue,
}: {
  groupContext: CheckboxGroupContextType;
  checked: boolean | undefined;
  value: TFormItemValueTypes;
  formValue: TFormItemValueTypes;
}): boolean => {
  if (groupContext?.value !== undefined && groupContext?.value !== null) {
    return groupContext.value.includes(value);
  }

  return getIsCheckedByType(checked || formValue);
};

const getIsCheckedByType = (value: TFormItemValueTypes) => {
  if (typeof value === "boolean") {
    return value;
  }

  return value !== undefined;
};
