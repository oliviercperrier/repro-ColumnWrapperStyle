import { View, Pressable as RNPressable, PressableProps } from "react-native";
import React, { forwardRef } from "react";
import { TDefaultViewProps, extractViewVariantProps, composeEventHandlers } from "@budgeinc/budge-ui-styling";
import { useHover, usePress } from "@budgeinc/budge-ui-hooks";
import { pressableVariant } from "./Pressable.variants";
import { VariantProps } from "tailwind-variants";
import { twMerge } from "tailwind-merge";

export type TPressableProps = TDefaultViewProps<
  Omit<PressableProps, "children" | "disabled"> &
    VariantProps<typeof pressableVariant> & {
      children?:
        | ((props: { isPressed: boolean; isHovered: boolean; disabled: boolean | undefined }) => JSX.Element)
        | JSX.Element
        | React.ReactNode;
    }
>;

const Pressable = forwardRef<View, TPressableProps>(
  (
    {
      className,
      children,
      onPressIn,
      onPressOut,
      onHoverIn,
      onHoverOut,
      disabled = false,
      noCursor = false,
      withPressEffect = false,
      ...others
    },
    ref
  ) => {
    const { hoverProps, isHovered } = useHover();
    const { pressProps, isPressed } = usePress();

    const { styleProps, viewVariantProps, rest } = extractViewVariantProps(others);

    return (
      <RNPressable
        ref={ref}
        style={styleProps}
        disabled={disabled}
        className={twMerge(
          className,
          pressableVariant({
            noCursor,
            disabled,
            withPressEffect: disabled ? false : withPressEffect,
            ...viewVariantProps,
          })
        )}
        onPressIn={composeEventHandlers(onPressIn, pressProps.onPressIn)}
        onPressOut={composeEventHandlers(onPressOut, pressProps.onPressOut)}
        onHoverIn={composeEventHandlers(onHoverIn, hoverProps.onHoverIn)}
        onHoverOut={composeEventHandlers(onHoverOut, hoverProps.onHoverOut)}
        pointerEvents="auto"
        {...rest}
      >
        {typeof children === "function" ? children({ isPressed, isHovered, disabled }) : children}
      </RNPressable>
    );
  }
);

export default Pressable;
