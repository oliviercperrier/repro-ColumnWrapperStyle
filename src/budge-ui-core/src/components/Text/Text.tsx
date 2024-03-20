import {
  DefaultTextProps,
  extractTextSystemStyles,
  TTypographyVariant,
  useComponentDefaultProps,
  useTextSx,
} from "@budgeinc/budge-ui-styling";
import React, { forwardRef, PropsWithChildren } from "react";
import { Text as RNText, TextProps as BaseTextProps, TextStyle } from "react-native";
import { TTextColor, useStyles } from "./Text.styles";

export type TTextProps = PropsWithChildren<
  Omit<DefaultTextProps<TextStyle>, "color"> &
    BaseTextProps & {
      variant?: TTypographyVariant;
      color?: TTextColor;
    }
>;

const Text = forwardRef<RNText, TTextProps>((props, ref) => {
  const {
    color = "default",
    variant = "bodyDefault",
    style,
    sx,
    ...other
  } = useComponentDefaultProps("Text", {}, props);
  const { systemStyles, rest } = extractTextSystemStyles(other);
  const { rootStyle } = useStyles({ variant: other.fz ? undefined : variant, color });

  return <RNText ref={ref} style={[rootStyle, ...useTextSx(sx || [], systemStyles), style]} {...rest} />;
});

export default Text;
