import React from "react";
import { Box, TBoxProps } from "../Box";
import { TColumnProps } from "./types";

export type TTableCellProps<T> = TBoxProps & {
  column: TColumnProps<T>;
  data: T;
};

const TableCell = <T,>({ column, data, ...boxProps }: TTableCellProps<T>) => (
  <Box
    fwrap="wrap"
    f={1}
    maw={column.maxWidth}
    miw={column.width}
    alignItems={column.align || "flex-start"}
    justifyContent="center"
    {...boxProps}
  >
    {column.render(data)}
  </Box>
);

export default TableCell;
