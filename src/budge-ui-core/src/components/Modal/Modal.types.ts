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
