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
import { twMerge } from "tailwind-merge";

export type TButtonProps = Omit<TDefaultViewProps<TPressableProps>, "children"> &
  Omit<VariantProps<typeof buttonVariant>, "withIcon"> & {
    title: string;
    leftIcon?: TMemoRefIconProps;
    rightIcon?: TMemoRefIconProps;
    extra?: ReactNode;
    loading?: boolean;
    hoverEffect?: boolean;
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
    const hasHoverEffect = disabled || loading ? false : hoverEffect;
    const variantStyles = buttonVariant({
      variant,
      size,
      color,
      disabled,
      loading,
      withIcon: LeftIcon ? "left" : RightIcon ? "right" : undefined,
      ...viewVariantProps,
    });

    console.log(variantStyles.background(), variantStyles.hover())

    return (
      <Pressable
        ref={ref}
        style={styleProps}
        disabled={disabled || loading}
        withPressEffect={withPressEffect}
        className={twMerge(
          variantStyles.base({ className }),
          variantStyles.background(),
          variantStyles.hover(),
          variantStyles.active()
        )}
        {...rest}
      >
        <Box className={variantStyles.contentWrapper()}>
          {LeftIcon && <LeftIcon className={variantStyles.icon()} />}
          <Text selectable={false} className={variantStyles.color()}>
            {title}
          </Text>
          {RightIcon && <RightIcon className={twMerge(variantStyles.icon(), variantStyles.color())} />}
          {extra || null}
        </Box>
        {loading && <LoadingOverlay spinnerClassName={twMerge(variantStyles.icon(), variantStyles.color())} />}
      </Pressable>
    );
  }
);

export default Button;
