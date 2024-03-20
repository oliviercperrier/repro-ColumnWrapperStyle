import {
  DefaultProps,
  extractSystemStyles,
  TNumberSize,
  useSx,
  useTheme,
  composeEventHandlers,
} from "@budgeinc/budge-ui-styling";
import { motify } from "moti";
import React, { forwardRef, useState } from "react";
import {
  Pressable as RNPressable,
  PressableProps as BasePressableProps,
  View,
  ViewStyle,
  StyleProp,
} from "react-native";
import { Easing } from "react-native-reanimated";

const MotifiedPressable = motify(RNPressable)();

export type TPressableProps = DefaultProps<ViewStyle> &
  Omit<BasePressableProps, "children" | "style"> & {
    radius?: TNumberSize | "default";
    noCursor?: boolean;
    withPressEffect?: boolean;
    children?: ((props: { isPressed: boolean; isHovered: boolean }) => JSX.Element) | JSX.Element | React.ReactNode;
    userSelect?: boolean;
    style?: StyleProp<ViewStyle>;
  };

export const useHover = () => {
  const [isHovered, setHovered] = useState(false);
  return {
    hoverProps: {
      onHoverIn: () => setHovered(true),
      onHoverOut: () => setHovered(false),
    },
    isHovered,
  };
};

export const useFocus = () => {
  const [isFocused, setFocused] = useState(false);
  return {
    focusProps: {
      onFocus: () => setFocused(true),
      onBlur: () => setFocused(false),
    },
    isFocused,
  };
};

export const useIsPressed = () => {
  const [isPressed, setIsPressed] = useState(false);
  return {
    pressableProps: {
      onPressIn: () => setIsPressed(true),
      onPressOut: () => setIsPressed(false),
    },
    isPressed,
  };
};

const Pressable = forwardRef<View, TPressableProps>(
  (
    {
      style,
      sx,
      withPressEffect = false,
      noCursor,
      disabled,
      radius,
      opacity,
      onPressIn,
      onPressOut,
      onHoverIn,
      onHoverOut,
      children,
      userSelect = false,
      ...others
    },
    ref
  ) => {
    const theme = useTheme();
    const { hoverProps, isHovered } = useHover();
    const { pressableProps, isPressed } = useIsPressed();
    const { systemStyles, rest } = extractSystemStyles(others);

    return (
      <MotifiedPressable
        ref={ref}
        from={{
          transform: [
            {
              translateY: 0,
            },
          ],
        }}
        animate={{
          transform: [
            {
              translateY: withPressEffect && !disabled && isPressed ? 1 : 0,
            },
          ],
        }}
        transition={{
          type: "timing",
          duration: 0,
          easing: Easing.linear,
        }}
        disabled={disabled}
        onPressIn={composeEventHandlers(onPressIn, pressableProps.onPressIn)}
        onPressOut={composeEventHandlers(onPressOut, pressableProps.onPressOut)}
        onHoverIn={composeEventHandlers(onHoverIn, hoverProps.onHoverIn)}
        onHoverOut={composeEventHandlers(onHoverOut, hoverProps.onHoverOut)}
        style={[
          {
            borderRadius: radius ? theme.fn.radius(radius === "default" ? theme.defaultRadius : radius) : undefined,
            opacity,
          },
          !userSelect
            ? {
                // @ts-ignore
                userSelect: "none",
              }
            : {},
          noCursor
            ? {
                // @ts-ignore
                cursor: "default",
              }
            : {},
          ...useSx(sx || [], systemStyles),
          style as any,
          disabled && !noCursor
            ? {
                // @ts-ignore
                cursor: "not-allowed",
                touchAction: "manipulation",
              }
            : {},
        ]}
        {...rest}
      >
        {typeof children === "function" ? children({ isPressed, isHovered }) : children}
      </MotifiedPressable>
    );
  }
);

export default Pressable;
