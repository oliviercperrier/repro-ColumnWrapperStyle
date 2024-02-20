import { View, Text } from "react-native";
import React, { forwardRef } from "react";
import { tagVariant } from "./Tag.variants";
import { Stack } from "../Stack";
import { Pressable } from "../Pressable";
import { CloseIcon } from "../Icon";
import { twMerge } from "tailwind-merge";
import { TTagProps } from "./Tag.types";

const Tag = forwardRef<View, TTagProps>(
  (
    {
      className,
      icon: Icon,
      iconPosition = "right",
      closable = false,
      disabled = false,
      onClose,
      value,
      size,
      variant,
      color,
      ...others
    },
    ref
  ) => {
    const variantStyles = tagVariant({
      variant,
      size,
      color,
      disabled,
      iconPosition: !!Icon ? iconPosition : undefined,
    });

    return (
      <Stack.Horizontal
        ref={ref}
        className={twMerge(variantStyles.base({ className }), variantStyles.background())}
        spacing="xs"
        {...others}
      >
        {iconPosition === "left" && Icon && <Icon className={twMerge(variantStyles.icon(), variantStyles.color())} />}
        <Text selectable={false} className={twMerge(variantStyles.text(), variantStyles.color())}>
          {value}
        </Text>
        {iconPosition === "right" && Icon && <Icon className={twMerge(variantStyles.icon(), variantStyles.color())} />}
        {closable && (
          <Pressable withPressEffect onPress={onClose}>
            <CloseIcon size="sm" />
          </Pressable>
        )}
      </Stack.Horizontal>
    );
  }
);

export default Tag;
