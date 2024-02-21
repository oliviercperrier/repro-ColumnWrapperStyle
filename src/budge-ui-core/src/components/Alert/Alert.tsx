import React, { forwardRef } from "react";
import { TAlertProps } from "./Alert.types";
import { alertVariant } from "./Alert.variants";
import { Box } from "../Box";
import { twMerge } from "tailwind-merge";
import { Text } from "../Text";
import { View } from "react-native";
import { Stack } from "../Stack";

const Alert = forwardRef<View, TAlertProps>(
  ({ title, onClose, icon: Icon, children, color, variant, className, ...others }, ref) => {
    const variantStyles = alertVariant({
      color,
      variant,
    });

    return (
      <Box ref={ref} className={twMerge(variantStyles.base({ className }), variantStyles.background())} {...others}>
        <Stack.Horizontal spacing="md">
          {Icon && (
            <Box>
              <Icon size="md" className={variantStyles.color()} />
            </Box>
          )}
          <Stack f={1} justifyContent="center" spacing="xs">
            {title && (
              <Text lh={5} numberOfLines={1} fw={500} className={twMerge(variantStyles.color(), "line")}>
                {title}
              </Text>
            )}
            {children && typeof children === "string" ? (
              <Text className={variant === "filled" ? variantStyles.color() : ""}>{children}</Text>
            ) : (
              children
            )}
          </Stack>
        </Stack.Horizontal>
      </Box>
    );
  }
);

export default Alert;
