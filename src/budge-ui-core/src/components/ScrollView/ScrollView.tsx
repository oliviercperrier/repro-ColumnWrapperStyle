import { TDefaultViewProps, TViewVariantProps, extractViewVariantProps, viewVariant } from "@budgeinc/budge-ui-styling";
import React, { forwardRef } from "react";
import { ScrollView as RNScrollView, ScrollViewProps } from "react-native";
import Animated from "react-native-reanimated";

export type TScrollViewProps = TDefaultViewProps<TViewVariantProps & ScrollViewProps>;

const ScrollView = forwardRef<RNScrollView, TScrollViewProps>(
  (
    {
      className,
      children,
      showsHorizontalScrollIndicator = false,
      showsVerticalScrollIndicator = false,
      mah,
      ...others
    },
    ref
  ) => {
    const { styleProps, viewVariantProps, rest } = extractViewVariantProps(others);

    return (
      <RNScrollView
        ref={ref}
        style={styleProps}
        className={viewVariant({ ...viewVariantProps, className })}
        showsVerticalScrollIndicator={showsVerticalScrollIndicator}
        showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
        contentContainerStyle={[{ maxHeight: mah }, rest.contentContainerStyle]}
        {...rest}
      >
        {children}
      </RNScrollView>
    );
  }
);

export const AnimatedScrollView = Animated.createAnimatedComponent(ScrollView);

export default ScrollView;
