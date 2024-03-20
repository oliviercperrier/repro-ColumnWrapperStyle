import {
  SystemProp,
  TNumberSize,
  TSize,
  VariantInput,
  useComponentDefaultProps,
  useExtractSx,
} from "@budgeinc/budge-ui-styling";
import React, { ReactNode, forwardRef, memo } from "react";
import { Platform, StyleProp, StyleSheet, TextStyle, View, ViewStyle } from "react-native";
import { replaceAll } from "@budgeinc/budge-ui-utils";
import { CloseIcon, TMemoRefIconProps } from "../Icons";
import { Stack, TStackProps } from "../Stack";
import { Text } from "../Text";
import { TIconPosition, TTagColor, useStyles } from "./Tag.styles";
import { ReactChild } from "../../utils/types";
import { Pressable } from "../Pressable";

export type TTagProps = Omit<TStackProps, "radius"> & {
  variant?: Exclude<VariantInput["variant"], "subtle">;
  size?: TSize;
  radius?: TNumberSize;
  color?: TTagColor;
  value: ReactChild;
  withIcon?: boolean;
  icon?: TMemoRefIconProps;
  iconPosition?: TIconPosition;
  style?: StyleProp<ViewStyle>;
  tt?: SystemProp<TextStyle["textTransform"]> | null;
  formatValue?: (value: string) => ReactNode;
  closable?: boolean;
  onClose?(): void;
};

const Tag = forwardRef<View, TTagProps>((props, ref) => {
  const {
    color,
    withIcon = true,
    closable = false,
    onClose,
    variant = "light",
    size = "sm",
    radius = "sm",
    tt = "capitalize",
    value,
    iconPosition = "right",
    icon: customIcon,
    style,
    sx,
    ...rest
  } = useComponentDefaultProps("Tag", {}, props);
  const { rootStyle, textStyle, text, icon } = useStyles({
    color,
    value,
    size,
    radius,
    iconPosition,
    variant,
    customIcon: withIcon ? customIcon : undefined,
    closable: !!onClose,
  });

  const Icon = icon.component;
  const hasIcon = withIcon && Icon;

  return (
    <Stack.Horizontal
      ref={ref}
      spacing="xs"
      sx={[rootStyle, StyleSheet.flatten(style) as ViewStyle, ...useExtractSx(sx)]}
      {...rest}
    >
      {iconPosition === "left" && hasIcon ? <Icon color={icon.color} size={icon.size} /> : null}
      {typeof value === "string" ? (
        <Text
          numberOfLines={Platform.OS === "web" ? 1 : undefined}
          // weird behavior when setting flex on Text on mobile platforms..
          f={Platform.OS === "web" ? 1 : undefined}
          selectable={false}
          style={textStyle}
          tt={tt || undefined}
          variant={text.variant}
        >
          {defaultFormatValue(value)}
        </Text>
      ) : (
        value
      )}
      {iconPosition === "right" && hasIcon ? <Icon color={icon.color} size={icon.size} /> : null}
      {closable && (
        <Pressable withPressEffect onPress={onClose}>
          <CloseIcon size="sm" />
        </Pressable>
      )}
    </Stack.Horizontal>
  );
});

const defaultFormatValue = (value: string) => replaceAll(value.toLowerCase(), "_", " ");

export default memo(Tag);
