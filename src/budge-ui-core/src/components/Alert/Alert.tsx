import { DefaultProps, TColor, TNumberSize, useExtractSx } from "@budgeinc/budge-ui-styling";
import React, { forwardRef, memo } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { TMemoRefIconProps } from "../Icons";
import { Box } from "../Box";
import { Text } from "../Text";
import { TAlertVariants, useStyles } from "./Alert.styles";
import { Stack } from "../Stack";
import { ReactChild } from "../../utils/types";
import { CloseButton } from "../CloseButton";

export type TAlertProps = DefaultProps<ViewStyle> & {
  title?: string;
  icon?: TMemoRefIconProps;
  color?: TColor;
  contentColor?: TColor;
  radius?: TNumberSize;
  variant?: TAlertVariants;
  onClose?: () => void;
  alignIcon?: "center" | "flex-start";
  children?: ReactChild;
};

const Alert = forwardRef<View, TAlertProps>(
  (
    {
      icon: Icon,
      variant = "light",
      color = "blue",
      contentColor,
      radius = "sm",
      alignIcon,
      children,
      style,
      title,
      sx,
      onClose,
      ...rest
    },
    ref
  ) => {
    const { baseStyle, titleColor, textColor } = useStyles({ color, variant });

    return (
      <Box
        ref={ref}
        radius={radius}
        sx={[baseStyle, StyleSheet.flatten(style) as ViewStyle, ...useExtractSx(sx)]}
        {...rest}
      >
        <Box fdirection="row">
          {Icon && (
            <Box mr="lg" justifyContent={alignIcon}>
              <Icon size={20} color={contentColor || titleColor} />
            </Box>
          )}
          <Stack f={1} justifyContent="center" spacing="xs">
            {title && (
              <Text numberOfLines={1} color={contentColor || titleColor} fw="500" lh={20}>
                {title}
              </Text>
            )}
            {children && typeof children === "string" ? (
              <Text color={contentColor || textColor}>{children}</Text>
            ) : (
              children
            )}
          </Stack>
          {onClose && (
            <CloseButton
              ml="lg"
              size="xs"
              mih={20}
              h={20}
              w={20}
              color={titleColor}
              variant="subtle"
              onPress={onClose}
            />
          )}
        </Box>
      </Box>
    );
  }
);

export default memo(Alert);
