import { View } from "react-native";
import React, { forwardRef } from "react";
import { TDefaultViewProps, TViewVariantProps, viewVariant, extractViewVariantProps } from "@budgeinc/budge-ui-styling";
import Animated from "react-native-reanimated";
import { twMerge } from "tailwind-merge";

export type TBoxProps = TDefaultViewProps<
  TViewVariantProps & {
    shouldRender?: boolean;
  }
>;

const Box = forwardRef<View, TBoxProps>(({ className, children, shouldRender = true, ...others }, ref) => {
  const { styleProps, viewVariantProps, rest } = extractViewVariantProps(others);

  if (!shouldRender) return null;

  return (
    <View ref={ref} style={styleProps} className={twMerge(className, viewVariant(viewVariantProps))} {...rest}>
      {children}
    </View>
  );
});

export const AnimatedBox = Animated.createAnimatedComponent(Box);

export default Box;
