import React, { PropsWithChildren } from "react";
import { TStyleSystemProps } from "@budgeinc/budge-ui-styling";
import { Box, TBoxProps } from "../Box";

export type TContainerProps = TBoxProps & {
  contentMaxWidth: TStyleSystemProps["maw"];
  contentBoxProps?: TBoxProps;
};

const Container = ({ children, contentBoxProps, contentMaxWidth, ...rest }: PropsWithChildren<TContainerProps>) => (
  <Box {...rest}>
    <Box w="100%" maw={contentMaxWidth} {...contentBoxProps}>
      {children}
    </Box>
  </Box>
);

export default Container;
