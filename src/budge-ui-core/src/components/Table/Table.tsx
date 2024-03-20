import { extractSystemStyles, useComponentDefaultProps, useExtractSx } from "@budgeinc/budge-ui-styling";
import React, { useMemo } from "react";
import { StyleSheet, ViewStyle } from "react-native";
import { Box } from "../Box";
import { Empty } from "../Empty";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import { TTableProps } from "./types";
import { List } from "../List";
import { TypedMemo } from "../../utils/types";
import LoadingOverlay from "../LoadingOverlay/LoadingOverlay";
import { TTableContextType, TableContextProvider } from "./Table.Context";

const BaseTable = <T,>(props: TTableProps<T>) => {
  const {
    data,
    sx,
    style,
    columns,
    loading,
    variant = "default",
    local,
    expandable,
    sort,
    onSort,
    ...others
  } = useComponentDefaultProps("Table", {}, props);
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
        <List
          data={data}
          ListHeaderComponent={<TableHeader<T> />}
          renderItem={({ item }) => <TableRow<T> data={item} />}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <Box h={8} />}
          ListEmptyComponent={loading ? null : <Empty {...local?.empty} />}
          {...rest}
        />
        {loading && <LoadingOverlay />}
      </Box>
    </TableContextProvider>
  );
};

export default TypedMemo(BaseTable);
