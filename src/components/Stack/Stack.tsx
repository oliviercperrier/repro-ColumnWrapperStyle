import React, {
  forwardRef,
  memo,
  PropsWithChildren,
  ReactElement,
} from "react";
import { View } from "react-native";
import { Box } from "../Box";
import { stackVariant } from "./Stack.variants";
import { TStackProps } from "./Stack.types";
import { extractViewVariantProps } from "@/budge-ui-styling/src/utils/extractVariantProps";

const Stack = forwardRef<View, PropsWithChildren<TStackProps>>(
  ({ style, className, children, spacing, ...others }, ref) => {
    const { styleProps, viewVariantProps, rest } =
      extractViewVariantProps(others);

    const filteredChildren = (
      React.Children.toArray(children) as ReactElement[]
    ).filter(Boolean);

    return (
      <Box
        ref={ref}
        style={[styleProps, { flexDirection: "column" }]}
        className={stackVariant({
          ...viewVariantProps,
          spacing,
          className,
        })}
        {...rest}
      >
        {filteredChildren}
      </Box>
    );
  }
);

export default memo(Stack);
