import { View } from "react-native";
import React, { ReactNode, forwardRef } from "react";
import { VariantProps } from "tailwind-variants";
import { buttonVariant } from "./Button.variants";
import { Pressable, TPressableProps } from "../Pressable";
import { Text } from "../Text";
import { TMemoRefIconProps } from "../SvgIcon";
import { Box } from "../Box";
import { LoadingOverlay } from "../LoadingOverlay";
import { twMerge } from "tailwind-merge";

export type TButtonProps = Omit<TPressableProps, "children" | "bg"> &
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
      disabled = false,
      withPressEffect = true,
      loading = false,
      r,
      ...others
    },
    ref
  ) => {
    const variantStyles = buttonVariant({
      variant,
      size,
      color,
      disabled,
      loading,
      withIcon: LeftIcon ? "left" : RightIcon ? "right" : undefined,
    });

    return (
      <Pressable
        ref={ref}
        disabled={disabled || loading}
        withPressEffect={withPressEffect}
        className={twMerge(
          variantStyles.base({ className }),
          variantStyles.background(),
          variantStyles.hover(),
          variantStyles.active()
        )}
        {...others}
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
