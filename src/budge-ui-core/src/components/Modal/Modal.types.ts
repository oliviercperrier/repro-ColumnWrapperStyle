import { ReactChild } from "src/utils";

export type TModalBaseProps = {
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