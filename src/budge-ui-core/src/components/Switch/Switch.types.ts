import { TColor, TSize } from "@budgeinc/budge-ui-styling";
import { TStackProps } from "../Stack";
import { ForwardedRef } from "react";
import { TConfirmModalProps } from "../ModalManager/ModalManager.types";

export type TSwitchProps = Omit<TStackProps, "children"> & {
  checked?: boolean;
  size?: TSize;
  color?: TColor;
  label?: React.ReactNode;
  disabled?: boolean;
  onValueChange?: (value: boolean) => void;
};

export type TSwitchConfirmProps = TSwitchProps & {
  confirmModalProps: Omit<TConfirmModalProps, "opened" | "id">;
};

export type TSwitchComponent = ((props: TSwitchProps & { ref?: ForwardedRef<any> }) => JSX.Element) & {
  Confirm: React.MemoExoticComponent<(props: TSwitchConfirmProps & { ref?: ForwardedRef<any> }) => JSX.Element>;
};
