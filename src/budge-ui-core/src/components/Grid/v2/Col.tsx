import React, { PropsWithChildren } from "react";
import { Box, TBoxProps } from "../../Box";

export type TColProps = PropsWithChildren<Omit<TBoxProps, "fdirection">>;

const Col = ({ children, ...props }: TColProps) => (
  <Box fdirection="column" p="xs" f={1} {...props}>
    {children}
  </Box>
);

export default Col;
