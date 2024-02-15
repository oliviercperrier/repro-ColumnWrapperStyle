import { PropsWithChildren } from "react";
import { TextInputProps, TextProps, ViewProps, ViewStyle } from "react-native";
import { VariantProps } from "tailwind-variants";
import { textVariant } from "./text-variants";
import { viewVariant } from "./base-variants";
import { baseColors } from "./theme-colors";

export type TColorShades = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export type TColors = keyof typeof baseColors | "white" | "black" | "transparent";
export type TBackgroundColors = TColors | keyof TExtendedBackgroundColors;
export type TBorderColors = TColors | keyof TExtendedBorderColors;
export type TTextColors = TColors | keyof TExtendedTextColors;

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

// EXTENDED COLORS
export type TExtendedBackgroundColors = {
  default: string;
  disabled: string;
};
export type TExtendedTextColors = {
  default: string;
  secondary: string;
  disabled: string;
};
export type TExtendedBorderColors = {
  default: string;
  disabled: string;
};
