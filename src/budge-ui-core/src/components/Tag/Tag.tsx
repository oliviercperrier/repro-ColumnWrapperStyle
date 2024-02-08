import { View, Text } from "react-native";
import React, { forwardRef } from "react";
import { TDefaultViewProps, extractViewVariantProps } from "@budgeinc/budge-ui-styling";
import { VariantProps } from "tailwind-variants";
import { tagVariant } from "./Tag.variants";
import { TMemoRefIconProps } from "../SvgIcon";
import { Stack } from "../Stack";
import { Pressable } from "../Pressable";
import { CloseIcon } from "../Icon";

export type TTagProps = TDefaultViewProps<Omit<VariantProps<typeof tagVariant>, "hoverEffect">> & {
  icon?: TMemoRefIconProps;
  iconPosition?: "left" | "right";
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
      hoverEffect: false,
      withIcon: !!Icon ? iconPosition : undefined,
      ...viewVariantProps,
    });

    return (
      <Stack.Horizontal
        ref={ref}
        style={styleProps}
        className={variantStyles.base({ className })}
        spacing="xs"
        {...rest}
      >
        {iconPosition === "left" && Icon && <Icon className={variantStyles.icon()} />}
        <Text selectable={false} className={variantStyles.text()}>
          {value}
        </Text>
        {iconPosition === "right" && Icon && <Icon className={variantStyles.icon()} />}
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
