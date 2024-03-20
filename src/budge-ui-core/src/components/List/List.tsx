import React from "react";
import { DefaultProps, extractSystemStyles, useComponentDefaultProps, useSx } from "@budgeinc/budge-ui-styling";
import { FlatList, FlatListProps, ViewStyle } from "react-native";
import { Divider } from "../Divider";

export type TListProps<ItemT = any> = DefaultProps<ViewStyle> &
  FlatListProps<ItemT> & {
    useDefaultItemSeparator?: boolean;
  };

const List = <ItemT,>(props: TListProps<ItemT>) => {
  const {
    sx,
    style,
    onEndReached,
    onEndReachedThreshold,
    useDefaultItemSeparator = false,
    showsVerticalScrollIndicator = false,
    ...others
  } = useComponentDefaultProps("List", {}, props);
  const { systemStyles, rest } = extractSystemStyles(others);

  return (
    <FlatList
      style={[...useSx(sx || [], systemStyles), style]}
      onEndReached={onEndReached}
      onEndReachedThreshold={onEndReachedThreshold || 0.2}
      showsVerticalScrollIndicator={showsVerticalScrollIndicator}
      ItemSeparatorComponent={
        useDefaultItemSeparator ? () => <Divider size="xs" spacing="md" /> : rest.ItemSeparatorComponent
      }
      {...rest}
    />
  );
};

export default List;
