import { ForwardedRef, PropsWithChildren, ReactNode } from "react";
import { TNumberSize } from "@budgeinc/budge-ui-styling";
import { TFormItemValueTypes } from "../Form";
import { TPressableProps } from "../Pressable";
import { TConfirmModalProps } from "../ModalManager/ModalManager.types";
import { TBoxProps } from "../Box";

export type TOnValueChange = (value: TFormItemValueTypes | undefined) => void;
export type TOnGroupValueChange = (value: TFormItemValueTypes[]) => void;

export type TCheckboxGroupOption = { label: string; value: TFormItemValueTypes; disabled?: boolean };

export type TCheckboxGroupProps = PropsWithChildren<{
  onValueChange?: TOnGroupValueChange;
  value?: TFormItemValueTypes[];
  options: TCheckboxGroupOption[];
  spacing?: TNumberSize;
}>;

export type TCheckboxProps = Omit<TPressableProps, "onPress"> & {
  value?: TFormItemValueTypes;
  label?: ReactNode;
  labelAlign?: TBoxProps["alignItems"];
  disabled?: boolean;
  checked?: boolean;
  onValueChange?: TOnValueChange;
  ignoreFormContext?: boolean;
};

export type TCheckboxConfirmProps = Omit<TCheckboxProps, "value" | "onValueChange"> & {
  onValueChange?(value: boolean): void;
  confirmModalProps: Omit<TConfirmModalProps, "opened" | "id">;
};

export type TCheckboxComponent = ((props: TCheckboxProps & { ref?: ForwardedRef<any> }) => JSX.Element) & {
  Confirm: React.MemoExoticComponent<(props: TCheckboxConfirmProps & { ref?: ForwardedRef<any> }) => JSX.Element>;
  Group: React.MemoExoticComponent<(props: TCheckboxGroupProps & { ref?: ForwardedRef<any> }) => JSX.Element>;
};
