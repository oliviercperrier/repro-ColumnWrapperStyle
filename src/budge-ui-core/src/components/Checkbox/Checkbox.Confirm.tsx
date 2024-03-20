import React, { forwardRef, memo, useId } from "react";
import { View } from "react-native";
import useFormikField from "../Form/useFormikField";
import CheckBox from "./Checkbox";
import { modalManager } from "../ModalManager";
import { TCheckboxConfirmProps } from "./Checkbox.types";

const CheckboxConfirm = forwardRef<View, TCheckboxConfirmProps>(
  ({ confirmModalProps, onValueChange, checked, ...checkboxProps }, ref) => {
    const { helpers, field } = useFormikField();
    const id = useId();

    return (
      <CheckBox
        ref={ref}
        {...checkboxProps}
        checked={checked || field?.value}
        onValueChange={(value: any) => {
          if (value) {
            modalManager.openConfirm({
              ...confirmModalProps,
              id,
              onConfirm: () => {
                helpers?.setValue?.(true);
              },
              onCancel: () => {
                helpers?.setValue?.(false);
                onValueChange?.(false);
              },
              confirmProps: confirmModalProps?.confirmProps || { title: "Yes" },
            });
          }

          onValueChange?.(value);
        }}
      />
    );
  }
);

export default memo(CheckboxConfirm);
