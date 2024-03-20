/* eslint-disable react/no-array-index-key */
import React, { useCallback } from "react";
import { Text } from "../Text";
import TableCell from "./TableCell";
import { SortDirection, TSortState } from "./types";
import { Stack } from "../Stack";
import { ChevronDownIcon, ChevronUpIcon } from "../Icons";
import { Box } from "../Box";
import { TableHeaderSpacerMx, TableHeaderSpacerWidth } from "./utils";
import { Pressable } from "../Pressable";
import { ConditionalWrapper } from "../ConditionalWrapper";
import { useTableContext } from "./Table.Context";
import { Tooltip } from "../Tooltip";

const TableHeader = <T,>() => {
  const { sort, onSort, columns, expandable } = useTableContext();

  const handleSort = useCallback(
    (columnId: string) => {
      const nextSortDirection = getNextSortDirection(columnId, sort);

      if (!nextSortDirection) {
        onSort?.(null);
      } else {
        onSort?.({
          columnId,
          direction: nextSortDirection,
        });
      }
    },
    [sort?.direction, sort?.columnId]
  );

  return (
    <Stack.Horizontal spacing={0} pr={expandable ? 48 : undefined} pl="xl" mb="lg">
      {columns.map((column, index) => {
        const isSorted = column.id === sort?.columnId;

        return (
          <Box
            key={column.id}
            fdirection="row"
            f={1}
            maw={column.maxWidth ? column.maxWidth + (TableHeaderSpacerWidth + 2 * TableHeaderSpacerMx) : undefined}
            miw={column.width ? column.width + (TableHeaderSpacerWidth + 2 * TableHeaderSpacerMx) : undefined}
          >
            <ConditionalWrapper
              condition={!!column.sortable}
              wrapper={children => (
                <Tooltip
                  title={getSortTooltipTitle(column.id, sort)}
                  placement="top"
                  offset={12}
                  containerProps={{
                    f: 1,
                  }}
                >
                  <Pressable onPress={() => handleSort(column.id)}>{children}</Pressable>
                </Tooltip>
              )}
            >
              <TableCell<T>
                column={{
                  ...column,
                  align: "flex-start",
                  render: () => (
                    <Stack.Horizontal w="100%" justifyContent="space-between" alignItems="center">
                      <Text numberOfLines={2} variant="bodySmall" color="textSecondary">
                        {column.title}
                      </Text>
                      {column.sortable && (
                        <Stack spacing={0}>
                          <ChevronUpIcon
                            color={isSorted && sort?.direction === "asc" ? "primary" : "gray.4"}
                            size="xs"
                          />
                          <ChevronDownIcon
                            color={isSorted && sort?.direction === "desc" ? "primary" : "gray.4"}
                            size="xs"
                            style={{ marginTop: -4 }}
                          />
                        </Stack>
                      )}
                    </Stack.Horizontal>
                  ),
                }}
                data={{} as T}
              />
            </ConditionalWrapper>
            {index === columns.length - 1 ? null : (
              <Box mx={TableHeaderSpacerMx} w={TableHeaderSpacerWidth} bg="gray.2" h="100%" />
            )}
          </Box>
        );
      })}
    </Stack.Horizontal>
  );
};

const getNextSortDirection = (columnId: string, sort: TSortState | null | undefined): SortDirection | null => {
  if (!sort || sort.columnId !== columnId) return "asc";

  if (sort.direction === "asc") return "desc";

  return null;
};

const getSortTooltipTitle = (columnId: string, sort: TSortState | null | undefined): string => {
  const nextSortDirection = getNextSortDirection(columnId, sort);
  return nextSortDirection === "desc"
    ? "Click to sort descending"
    : nextSortDirection === "asc"
    ? "Click to sort ascending"
    : "Click to cancel sorting";
};

export default TableHeader;
