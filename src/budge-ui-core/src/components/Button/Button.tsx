import { StyleSheet, View } from "react-native";
import React, { ReactNode, forwardRef } from "react";
import { TDefaultViewProps, extractViewVariantProps } from "@budgeinc/budge-ui-styling";
import { VariantProps } from "tailwind-variants";
import { buttonVariant } from "./Button.variants";
import { Pressable, TPressableProps } from "../Pressable";
import { Text } from "../Text";
import { TMemoRefIconProps } from "../SvgIcon";
import { Box } from "../Box";
import { LoadingOverlay } from "../LoadingOverlay";

export type TButtonProps = Omit<TDefaultViewProps<TPressableProps>, "children"> &
  Omit<VariantProps<typeof buttonVariant>, "withIcon"> & {
    title: string;
    leftIcon?: TMemoRefIconProps;
    rightIcon?: TMemoRefIconProps;
    extra?: ReactNode;
    loading?: boolean;
  };

const Button = forwardRef<View, TButtonProps>(
  (
    {
      title,
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      className,
      size,
      variant,
      color,
      extra,
      hoverEffect = true,
      disabled = false,
      withPressEffect = true,
      loading = false,
      r,
      ...others
    },
    ref
  ) => {
    const { styleProps, viewVariantProps, rest } = extractViewVariantProps(others);

    const variantStyles = buttonVariant({
      variant,
      size,
      color,
      disabled,
      loading,
      hoverEffect: disabled || loading ? false : hoverEffect,
      withIcon: LeftIcon ? "left" : RightIcon ? "right" : undefined,
      ...viewVariantProps,
    });

    return (
      <Pressable
        ref={ref}
        style={styleProps}
        disabled={disabled || loading}
        withPressEffect={withPressEffect}
        className={variantStyles.base({ className })}
        {...rest}
      >
        <Box className={variantStyles.contentWrapper()}>
          {LeftIcon && <LeftIcon className={variantStyles.icon()} />}
          <Text selectable={false} className={variantStyles.text()}>
            {title}
          </Text>
          {RightIcon && <RightIcon className={variantStyles.icon()} />}
          {extra || null}
        </Box>
        {loading && <LoadingOverlay spinnerClassName={variantStyles.icon()} />}
      </Pressable>
    );
  }
);

export default Button;
