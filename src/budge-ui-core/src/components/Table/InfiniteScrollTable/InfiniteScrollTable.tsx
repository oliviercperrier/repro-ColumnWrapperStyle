import { extractSystemStyles, useComponentDefaultProps, useExtractSx } from "@budgeinc/budge-ui-styling";
import React, { useMemo } from "react";
import { StyleSheet, ViewStyle } from "react-native";
import { Box } from "../../Box";
import TableHeader from "../TableHeader";
import TableRow from "../TableRow";
import { TTableProps } from "../types";
import { InfiniteScrollList, TInfiniteScrollListProps } from "../../List";
import { TypedMemo } from "../../../utils/types";
import { TTableContextType, TableContextProvider } from "../Table.Context";

export type TInfiniteScrollTableProps<T> = Omit<
  TTableProps<T> & TInfiniteScrollListProps<T>,
  "data" | "renderItem" | "loading"
>;

const InfiniteScrollTable = <T,>(props: TInfiniteScrollTableProps<T>) => {
  const {
    sx,
    style,
    columns,
    expandable,
    variant = "default",
    onSort,
    sort,
    ...others
  } = useComponentDefaultProps("InfiniteScrollTable", {}, props);
  const { systemStyles, rest } = extractSystemStyles(others);

  const memoedContextValue = useMemo<TTableContextType<T>>(
    () => ({
      columns,
      variant,
      expandable,
      onSort,
      sort,
    }),
    [columns, variant, expandable, onSort, sort]
  );

  return (
    <TableContextProvider value={memoedContextValue}>
      <Box sx={[{ flex: 1 }, StyleSheet.flatten(style) as ViewStyle, ...useExtractSx(sx)]} {...systemStyles}>
        <TableHeader<T> />
        <InfiniteScrollList<T>
          renderItem={({ item }) => <TableRow<T> data={item} />}
          ItemSeparatorComponent={() => <Box h={8} />}
          {...rest}
        />
      </Box>
    </TableContextProvider>
  );
};

export default TypedMemo(InfiniteScrollTable);
