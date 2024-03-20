import { useComponentDefaultProps, useExtractSx } from "@budgeinc/budge-ui-styling";
import React, { forwardRef, memo, ReactElement, useMemo } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { Box } from "../Box";
import { useStyles } from "./StackHorizontal.styles";
import { TStackHorizontalProps } from "./Stack.types";

const StackHorizontal = forwardRef<View, TStackHorizontalProps>((props, ref) => {
  const {
    spacing = "sm",
    alignItems,
    grow,
    children,
    style,
    sx,
    ...others
  } = useComponentDefaultProps("StackHorizontal", {}, props);

  const { rootStyle, childStyleBase } = useStyles({ grow });
  const filteredChildren = useMemo(
    () => (React.Children.toArray(children) as ReactElement[]).filter(Boolean),
    [children]
  );

  return (
    <Box
      ref={ref}
      fdirection="row"
      gap={spacing}
      alignItems={alignItems}
      sx={[rootStyle, StyleSheet.flatten(style) as ViewStyle, ...useExtractSx(sx)]}
      {...others}
    >
      {filteredChildren.map(child =>
        React.cloneElement(child, {
          style: [childStyleBase, child.props?.style],
        })
      )}
    </Box>
  );
});

export default memo(StackHorizontal);
