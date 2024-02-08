import { View } from "react-native";
import React, { forwardRef } from "react";
import {
  TDefaultViewProps,
  TViewVariantProps,
  viewVariant,
  extractViewVariantProps
} from "@budgeinc/budge-ui-styling";

export type TBoxProps = TDefaultViewProps<TViewVariantProps>;

const Box = forwardRef<View, TBoxProps>(
  ({ className, children, ...others }, ref) => {
    const { styleProps, viewVariantProps, rest } =
      extractViewVariantProps(others);

    return (
      <View
        ref={ref}
        style={styleProps}
        className={viewVariant({ ...viewVariantProps, className })}
        {...rest}
      >
        {children}
      </View>
    );
  }
);

export default Box;
