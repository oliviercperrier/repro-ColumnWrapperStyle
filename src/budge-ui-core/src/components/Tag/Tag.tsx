import { View, Text } from "react-native";
import React, { forwardRef } from "react";
import { TDefaultViewProps, extractViewVariantProps } from "@budgeinc/budge-ui-styling";
import { VariantProps } from "tailwind-variants";
import { tagVariant } from "./Tag.variants";
import { TMemoRefIconProps } from "../SvgIcon";
import { Stack } from "../Stack";
import { Pressable } from "../Pressable";
import { CloseIcon } from "../Icon";
import { twMerge } from "tailwind-merge";

export type TTagProps = TDefaultViewProps<VariantProps<typeof tagVariant>> & {
  icon?: TMemoRefIconProps;
  value: string;
  closable?: boolean;
  onClose?: () => void;
};

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
    const { styleProps, viewVariantProps, rest } = extractViewVariantProps(others);

    const variantStyles = tagVariant({
      variant,
      size,
      color,
      disabled,
      iconPosition: !!Icon ? iconPosition : undefined,
      ...viewVariantProps,
    });

    return (
      <Stack.Horizontal
        ref={ref}
        style={styleProps}
        className={twMerge(variantStyles.base({ className }), variantStyles.background())}
        spacing="xs"
        {...rest}
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
