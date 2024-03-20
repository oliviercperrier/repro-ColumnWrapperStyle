import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { Collapse } from "../Collapse";
import TableCell from "./TableCell";
import { Stack } from "../Stack";
import { TableHeaderSpacerMx, TableHeaderSpacerWidth } from "./utils";
import { useTableContext } from "./Table.Context";

export type TTableRowProps<T> = {
  data: T;
  style?: StyleProp<ViewStyle>;
};

const TableRow = <T,>({ data, style }: TTableRowProps<T>) => {
  const { variant, columns, expandable } = useTableContext();

  return (
    <Collapse
      variant={variant}
      expandable={!!expandable}
      header={
        <Stack.Horizontal f={1} spacing={TableHeaderSpacerMx * 2 + TableHeaderSpacerWidth}>
          {columns.map((column, index) => (
            <TableCell<T> key={index} column={column} data={data} />
          ))}
        </Stack.Horizontal>
      }
      style={style}
    >
      {expandable && expandable(data)}
    </Collapse>
  );
};

export default TableRow;
