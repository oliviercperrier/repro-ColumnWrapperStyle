import {
  useComponentDefaultProps,
} from "@budgeinc/budge-ui-styling";
import React, { forwardRef, memo, PropsWithChildren, ReactElement } from "react";
import { View } from "react-native";
import { Box } from "../Box";
import { TStackProps } from "./Stack.types";

const Stack = forwardRef<View, PropsWithChildren<TStackProps>>((props, ref) => {
  const { spacing = "sm", children, ...rest } = useComponentDefaultProps("Stack", {}, props);
  const filteredChildren = (React.Children.toArray(children) as ReactElement[]).filter(Boolean);

  return (
    <Box ref={ref} fdirection="column" {...rest} gap={spacing}>
      {filteredChildren}
    </Box>
  );
});


export default memo(Stack);
