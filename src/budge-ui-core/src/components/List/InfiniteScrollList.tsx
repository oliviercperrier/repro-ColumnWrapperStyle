import React from "react";
import { extractSystemStyles, useExtractSx } from "@budgeinc/budge-ui-styling";
import { i18n } from "@budgeinc/budge-ui-utils";
import { StyleSheet, ViewStyle } from "react-native";
import { Box } from "../Box";
import { Spinner } from "../Loader";
import List, { TListProps } from "./List";
import { Text } from "../Text";
import { Empty, TEmptyProps } from "../Empty";
import { TInfiniteScrollListState } from "./useInfiniteScrollList";

export type TInfiniteScrollListProps<T = any> = Omit<
  TListProps<T>,
  "data" | "onEndReached" | "initialNumToRender" | "keyExtractor" | "onRefresh" | "refreshing"
> & {
  local?: {
    noMoreItems?: string;
    empty?: TEmptyProps;
  };
  keyExtractor(item: T, index: number): string;
  onEndReached(): void;
  pageSize?: number;
  requestState: TInfiniteScrollListState<T>;
};

const InfiniteScrollList = <T,>({
  sx,
  style,
  pageSize,
  local = {
    noMoreItems: i18n.t("ui-core.infiniteScrollList.local.noMoreItems"),
  },
  requestState,
  onEndReached,
  keyExtractor,
  ...props
}: TInfiniteScrollListProps<T>) => {
  const { systemStyles, rest } = extractSystemStyles(props);

  return (
    <Box
      sx={[{ height: "100%", flex: 1 }, StyleSheet.flatten(style) as ViewStyle, ...useExtractSx(sx)]}
      {...systemStyles}
    >
      {requestState.loading ? (
        <Box alignItems="center" justifyContent="center">
          <Spinner size="sm" color="primary" />
        </Box>
      ) : (
        <List
          data={requestState.data}
          initialNumToRender={pageSize}
          onEndReached={onEndReached}
          onEndReachedThreshold={0.5}
          keyExtractor={keyExtractor}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={
            <Box h={32} alignItems="center" justifyContent="flex-end">
              {requestState.moreLoading && (
                <Box alignItems="center" justifyContent="center">
                  <Spinner size="sm" color="primary" />
                </Box>
              )}
              {requestState.reachedEnd && requestState.data.length ? (
                <Text ta="center">{local.noMoreItems}</Text>
              ) : null}
            </Box>
          }
          ListEmptyComponent={requestState.moreLoading ? null : <Empty {...local?.empty} />}
          {...rest}
        />
      )}
    </Box>
  );
};

export default InfiniteScrollList;
