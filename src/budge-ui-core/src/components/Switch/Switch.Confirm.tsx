import React, { forwardRef, memo, useId } from "react";
import { View } from "react-native";
import useFormikField from "../Form/useFormikField";
import Switch from "./Switch";
import { modalManager } from "../ModalManager";
import { TSwitchConfirmProps } from "./Switch.types";

const SwitchConfirm = forwardRef<View, TSwitchConfirmProps>(
  ({ confirmModalProps, onValueChange, ...checkboxProps }, ref) => {
    const id = useId();
    const { helpers } = useFormikField();

    return (
      <Switch
        ref={ref}
        {...checkboxProps}
        onValueChange={value => {
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

export default memo(SwitchConfirm);
