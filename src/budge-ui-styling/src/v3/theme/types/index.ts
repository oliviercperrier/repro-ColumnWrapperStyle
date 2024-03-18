import { PropsWithChildren } from "react";
import { TextInputProps, TextProps, ViewProps, ViewStyle } from "react-native";
import { VariantProps } from "tailwind-variants";
import { textVariant } from "../text-variants";
import { viewVariant } from "../view-variants";

export type TBaseCustomStyleProps = {
  w: ViewStyle["width"];
  miw: ViewStyle["minWidth"];
  maw: ViewStyle["maxWidth"];
  h: ViewStyle["height"];
  mih: ViewStyle["minHeight"];
  mah: ViewStyle["maxHeight"];
};

export type TDefaultViewProps<T = any> = Partial<TBaseCustomStyleProps> & ViewProps & T;

export type TViewVariantProps = VariantProps<typeof viewVariant>;

export type TDefaultTextProps<T> = Partial<TBaseCustomStyleProps> &
  PropsWithChildren<{
    style?: TextProps["style"];
    className?: TextProps["className"];
  }> &
  Omit<TextProps, "style" | "className" | "children"> &
  T;

export type TDefaultTextInputProps<T> = Partial<TBaseCustomStyleProps> &
  PropsWithChildren<{
    style?: TextInputProps["style"];
    className?: TextInputProps["className"];
  }> &
  Omit<TextInputProps, "style" | "className" | "children" | "editable"> &
  T;

export type TTextVariantProps = VariantProps<typeof textVariant>;

export * from "./colors";
export * from "./theme";
