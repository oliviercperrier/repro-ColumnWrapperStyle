import { TModalBaseProps } from "../Modal/Modal.types";
import { TConfirmModalProps, TOpenConfirmModalProps } from "./ModalManager.types";

export const splitConfirmAndModalProps = (
  props: TOpenConfirmModalProps
): {
  confirmProps: TConfirmModalProps;
  modalProps: TModalBaseProps;
} => {
  if (!props) {
    return { confirmProps: { children: null }, modalProps: {} };
  }

  const {
    id,
    children,
    onCancel,
    onConfirm,
    closeOnConfirm,
    closeOnCancel,
    cancelProps,
    confirmProps,
    icon,
    iconColor,
    hideCancel,
    ...others
  } = props;

  return {
    confirmProps: {
      children,
      onCancel,
      onConfirm,
      closeOnConfirm,
      closeOnCancel,
      cancelProps,
      confirmProps,
      hideCancel,
      icon,
      iconColor,
    },
    modalProps: {
      id,
      ...others,
    },
  };
};
