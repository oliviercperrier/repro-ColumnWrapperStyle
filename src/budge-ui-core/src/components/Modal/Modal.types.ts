import { TNumberSize } from "@budgeinc/budge-ui-styling";
import { ForwardedRef, PropsWithChildren } from "react";
import { TButtonProps } from "../Button/Button.types";
import { ReactChild } from "../../utils/types";

export type TModalBaseProps = {
  id?: number | string;
  opened?: boolean;
  onOpened?: () => void;
  onClosed?: () => void;
  onClose?: () => void;
  size?: TNumberSize;
  closeOnEscape?: boolean;
  closeOnOverlayTap?: boolean;
};

export type TModalHeaderProps = {
  title?: ReactChild;
  titleDescription?: ReactChild;
  withCloseButton?: boolean;
  handleClose?: () => void;
};

export type TModalFooterProps = Pick<TModalBaseProps, "onClose"> & {
  onOk?(): void;
  okButtonProps?: Partial<TButtonProps>;
  cancelButtonProps?: Partial<TButtonProps>;
  footer?: React.ReactNode[] | true | null;
};

export type TModalProps = PropsWithChildren<TModalBaseProps & TModalHeaderProps & TModalFooterProps>;

export type TModalComponent = ((props: TModalProps & { ref?: ForwardedRef<any> }) => JSX.Element) & {
  Header: React.MemoExoticComponent<
    (
      props: TModalHeaderProps & {
        ref?: ForwardedRef<any>;
      }
    ) => JSX.Element
  >;
  Footer: React.MemoExoticComponent<(props: TModalFooterProps & { ref?: ForwardedRef<any> }) => JSX.Element>;
};
