import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import React, { forwardRef, PropsWithChildren } from "react";
import { TColor, TNumberSize, useExtractSx } from "@budgeinc/budge-ui-styling";
import { Pressable, TPressableProps } from "../Pressable";
import { TSelectableBoxVariant, useSelectableBoxStyles } from "./SelectableBox.styles";

export type TSelectableBoxProps = Omit<TPressableProps, "style"> & {
  isSelected: boolean;
  style?: StyleProp<ViewStyle>;
  selectedColor?: TColor;
  variant?: TSelectableBoxVariant;
};

const SelectableBox = forwardRef<View, PropsWithChildren<TSelectableBoxProps>>(
  (
    {
      children,
      isSelected,
      p = "lg",
      variant = "default",
      selectedColor = "primary",
      radius = "default",
      style,
      sx,
      ...props
    },
    ref
  ) => {
    const { rootStyle } = useSelectableBoxStyles({ variant, isSelected, padding: p as TNumberSize, selectedColor });

    return (
      <Pressable
        ref={ref}
        sx={[rootStyle, StyleSheet.flatten(style) as ViewStyle, ...useExtractSx(sx)]}
        radius={radius}
        {...props}
      >
        {children}
      </Pressable>
    );
  }
);

export default SelectableBox;
