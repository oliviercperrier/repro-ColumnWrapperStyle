import React, { forwardRef, memo, PropsWithChildren, ReactElement } from "react";
import { View } from "react-native";
import { Box } from "../Box";
import { stackVariant } from "./Stack.variants";
import { TStackProps } from "./Stack.types";

const Stack = forwardRef<View, PropsWithChildren<TStackProps>>(({ className, children, spacing, ...others }, ref) => {
  const filteredChildren = (React.Children.toArray(children) as ReactElement[]).filter(Boolean);

  return (
    <Box
      ref={ref}
      style={[{ flexDirection: "column" }]}
      className={stackVariant({
        spacing,
        className,
      })}
      {...others}
    >
      {filteredChildren}
    </Box>
  );
});

export default memo(Stack);
