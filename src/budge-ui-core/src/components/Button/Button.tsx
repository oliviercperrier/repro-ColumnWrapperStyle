import { View } from "react-native";
import React, { forwardRef } from "react";
import { TDefaultViewProps, extractViewVariantProps } from "@budgeinc/budge-ui-styling";
import { VariantProps } from "tailwind-variants";
import { buttonVariant } from "./Button.variants";
import { Pressable, TPressableProps } from "../Pressable";
import { Text } from "../Text";
import { TMemoRefIconProps } from "../SvgIcon";

export type TButtonProps = Omit<TDefaultViewProps<TPressableProps>, "children"> &
  Omit<VariantProps<typeof buttonVariant>, "withIcon"> & {
    title: string;
    leftIcon?: TMemoRefIconProps;
    rightIcon?: TMemoRefIconProps;
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
      hoverEffect = true,
      disabled = false,
      withPressEffect = true,
      ...others
    },
    ref
  ) => {
    const { styleProps, viewVariantProps, rest } = extractViewVariantProps(others);

    const variantStyles = buttonVariant({
      variant,
      size,
      color,
      hoverEffect: disabled ? false : hoverEffect,
      withIcon: LeftIcon ? "left" : RightIcon ? "right" : undefined,
      ...viewVariantProps,
    });

    return (
      <Pressable
        ref={ref}
        style={styleProps}
        disabled={disabled}
        withPressEffect={withPressEffect}
        className={variantStyles.base({ className })}
        {...rest}
      >
        {LeftIcon && <LeftIcon className={variantStyles.icon()} />}
        <Text selectable={false} className={variantStyles.text()}>
          {title}
        </Text>
        {RightIcon && <RightIcon className={variantStyles.icon()} />}
      </Pressable>
    );
  }
);

export default Button;
