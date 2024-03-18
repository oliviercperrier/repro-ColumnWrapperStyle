import { ForwardedRef, PropsWithChildren } from "react";
import { ReactChild } from "../../utils";
import { TButtonProps } from "../Button";

export type TModalProps = {
  id?: number | string;
  opened?: boolean;
  onOpened?: () => void;
  onClosed?: () => void;
  onClose?: () => void;
  size?: number;
  closeOnEscape?: boolean;
  closeOnOverlayTap?: boolean;
};

export type TModalHeaderProps = {
  title?: ReactChild;
  titleDescription?: ReactChild;
  withCloseButton?: boolean;
  handleClose?: () => void;
};

export type TModalFooterProps = Pick<TModalProps, "onClose"> & {
  onOk?(): void;
  okButtonProps?: Partial<TButtonProps>;
  cancelButtonProps?: Partial<TButtonProps>;
  footer?: React.ReactNode[] | true | null;
};

export type TModalComponent = ((
  props: PropsWithChildren<TModalProps & TModalHeaderProps & TModalFooterProps> & { ref?: ForwardedRef<any> }
) => JSX.Element) & {
  Header: React.MemoExoticComponent<
    (
      props: TModalHeaderProps & {
        ref?: ForwardedRef<any>;
      }
    ) => JSX.Element
  >;
  Footer: React.MemoExoticComponent<(props: TModalFooterProps & { ref?: ForwardedRef<any> }) => JSX.Element>;
};
