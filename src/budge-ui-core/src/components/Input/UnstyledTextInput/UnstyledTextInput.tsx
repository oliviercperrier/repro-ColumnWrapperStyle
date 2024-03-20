import {
  DefaultTextProps,
  extractTextSystemStyles,
  TNumberSize,
  TTypographyVariant,
  useComponentDefaultProps,
  useTextSx,
  useTheme,
} from "@budgeinc/budge-ui-styling";
import React, { forwardRef } from "react";
import { TextInput as RNTextInput, TextStyle, TextInputProps, ViewStyle } from "react-native";
import { TTextColor, useStyles } from "../../Text/Text.styles";

export type TUnstyledTextInputProps = Omit<DefaultTextProps<TextStyle>, "color" | "placeHolderTextColor"> &
  TextInputProps & {
    variant?: TTypographyVariant;
    color?: TTextColor;
    bordered?: boolean;
    radius?: TNumberSize | "default";
  };

const UnstyledTextInput = forwardRef<RNTextInput, TUnstyledTextInputProps>((props: TUnstyledTextInputProps, ref) => {
  const theme = useTheme();
  const {
    color = "default",
    variant = "bodyDefault",
    style,
    sx,
    bordered = false,
    radius = "sm",
    ...other
  } = useComponentDefaultProps("TextInput", {}, props);
  const { systemStyles, rest } = extractTextSystemStyles(other);
  const { rootStyle } = useStyles({ variant, color });
  const borderStyles: ViewStyle = bordered
    ? {
        borderWidth: 1,
        borderColor: theme.palette.border.default,
      }
    : {};

  return (
    <RNTextInput
      ref={ref}
      style={[
        rootStyle,
        {
          borderRadius: radius ? theme.fn.radius(radius === "default" ? theme.defaultRadius : radius) : undefined,
          ...borderStyles,
        },
        ...useTextSx(sx || [], systemStyles),
        style,
      ]}
      {...rest}
    />
  );
});

export default UnstyledTextInput;
