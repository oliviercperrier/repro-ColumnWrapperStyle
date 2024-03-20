import { TColor } from "@budgeinc/budge-ui-styling";
import { PropsWithChildren } from "react";
import { TModalBaseProps, TModalProps } from "../Modal/Modal.types";
import { TMemoRefIconProps } from "../Icons";
import { TButtonProps } from "../Button";

export type TModalId = number | string;

export type TSubscriber = {
  onOpenModal: (modal: TAllManagedModals) => void;
  onCloseActiveModal: () => void;
  onCloseAllModals: () => void;
};

export type TManagedModalBase = PropsWithChildren<{
  id: TModalId;
  toDismiss?: boolean;
}>;

export type TConfirmModalProps = PropsWithChildren<{
  icon?: TMemoRefIconProps;
  iconColor?: TColor;
  onCancel?: (() => void) | (() => Promise<any>);
  onConfirm?: (() => void) | (() => Promise<any>);
  closeOnConfirm?: boolean;
  closeOnCancel?: boolean;
  cancelProps?: TButtonProps;
  confirmProps?: TButtonProps;
  hideCancel?: boolean;
}>;

export type TOpenConfirmModalProps = Omit<TModalBaseProps, "onClose"> & TConfirmModalProps;

export type TExternalModal = TModalProps & {
  type: "modal";
};
export type TManagedModal = TManagedModalBase & TExternalModal;

export type TExternalConfirmModal = TOpenConfirmModalProps & {
  type: "confirm";
};
export type TManagedConfirm = TManagedModalBase & TExternalConfirmModal;

export type TAllManagedModals = TManagedConfirm | TManagedModal;
export type TAllExternalModals = TExternalModal | TExternalConfirmModal;
