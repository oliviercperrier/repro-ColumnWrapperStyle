import { View } from "react-native";
import React, { forwardRef, memo } from "react";
import {
  TDefaultViewProps,
  TViewVariantProps,
  viewVariant,
} from "@/budge-ui-styling/src/theme/BudgeBaseVariants";
import { extractViewVariantProps } from "@/budge-ui-styling/src/utils/extractVariantProps";

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
        children={children}
        {...rest}
      />
    );
  }
);

export default memo(Box);
