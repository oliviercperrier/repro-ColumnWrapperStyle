import { View, Pressable as RNPressable, PressableProps } from "react-native";
import React, { forwardRef } from "react";
import { TDefaultViewProps } from "@/budge-ui-styling/src/theme/BudgeBaseVariants";
import { extractViewVariantProps } from "@/budge-ui-styling/src/utils/extractVariantProps";
import useHover from "@/budge-ui-hooks/src/useHover";
import usePress from "@/budge-ui-hooks/src/usePress";
import { composeEventHandlers } from "@/budge-ui-styling/src/utils/mergeRef";
import { pressableVariant } from "./Pressable.variants";
import { VariantProps } from "tailwind-variants";

export type TPressableProps = Omit<
  TDefaultViewProps<PressableProps>,
  "children" | "disabled"
> &
  VariantProps<typeof pressableVariant> & {
    children?:
      | ((props: { isPressed: boolean; isHovered: boolean }) => JSX.Element)
      | JSX.Element
      | React.ReactNode;
  };

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

    const { styleProps, viewVariantProps, rest } =
      extractViewVariantProps(others);

    return (
      <RNPressable
        ref={ref}
        style={styleProps}
        disabled={disabled}
        className={pressableVariant({
          noCursor,
          disabled,
          withPressEffect: disabled ? false : withPressEffect,
          className,
          ...viewVariantProps,
        })}
        onPressIn={composeEventHandlers(onPressIn, pressProps.onPressIn)}
        onPressOut={composeEventHandlers(onPressOut, pressProps.onPressOut)}
        onHoverIn={composeEventHandlers(onHoverIn, hoverProps.onHoverIn)}
        onHoverOut={composeEventHandlers(onHoverOut, hoverProps.onHoverOut)}
        {...rest}
      >
        {typeof children === "function"
          ? children({ isPressed, isHovered })
          : children}
      </RNPressable>
    );
  }
);

export default Pressable;
