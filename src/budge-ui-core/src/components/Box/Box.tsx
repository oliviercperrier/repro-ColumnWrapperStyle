import { View } from "react-native";
import React, { forwardRef } from "react";
import { TDefaultViewProps, TViewVariantProps, viewVariant, extractViewVariantProps } from "@budgeinc/budge-ui-styling";
import Animated from "react-native-reanimated";

export type TBoxProps = TDefaultViewProps<TViewVariantProps>;

const Box = forwardRef<View, TBoxProps>(({ className, children, ...others }, ref) => {
  const { styleProps, viewVariantProps, rest } = extractViewVariantProps(others);

  return (
    <View ref={ref} style={styleProps} className={viewVariant({ ...viewVariantProps, className })} {...rest}>
      {children}
    </View>
  );
});

export const AnimatedBox = Animated.createAnimatedComponent(Box)

export default Box;
