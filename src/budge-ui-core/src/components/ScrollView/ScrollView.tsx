import { DefaultProps, extractSystemStyles, useSx } from "@budgeinc/budge-ui-styling";
import React, { forwardRef } from "react";
import { FlexStyle, ScrollView as RNScrollView, ScrollViewProps, ViewStyle } from "react-native";

export type TScrollViewProps = DefaultProps<ViewStyle> &
  ScrollViewProps & {
    mah?: FlexStyle["maxHeight"];
  };

const ScrollView = forwardRef<RNScrollView, TScrollViewProps>(
  (
    { style, mah, sx, showsHorizontalScrollIndicator = false, showsVerticalScrollIndicator = false, ...others },
    ref
  ) => {
    const { systemStyles, rest } = extractSystemStyles(others);

    return (
      <RNScrollView
        ref={ref}
        showsVerticalScrollIndicator={showsVerticalScrollIndicator}
        showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
        contentContainerStyle={[{ maxHeight: mah }, rest.contentContainerStyle]}
        style={[...useSx(sx || [], systemStyles), style]}
        {...rest}
      />
    );
  }
);

export default ScrollView;
