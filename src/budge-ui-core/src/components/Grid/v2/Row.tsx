import React, { PropsWithChildren } from "react";
import { Box, TBoxProps } from "../../Box";

export type TRowProps = PropsWithChildren<Omit<TBoxProps, "fdirection">>;

const Row = ({ children, ...props }: TRowProps) => (
  <Box fdirection="row" {...props}>
    {children}
  </Box>
);

export default Row;
