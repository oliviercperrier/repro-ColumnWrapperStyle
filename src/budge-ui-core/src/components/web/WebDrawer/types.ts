import { PropsWithChildren } from "react";

export type TWebDrawerProps = PropsWithChildren<{
  title: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  showBackdrop?: boolean;
}>;