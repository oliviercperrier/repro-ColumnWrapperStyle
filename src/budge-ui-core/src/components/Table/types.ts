import { ReactNode } from "react";
import { FlexAlignType, StyleProp, ViewStyle } from "react-native";
import { TCollapseProps } from "../Collapse";
import { TEmptyProps } from "../Empty";
import { TBoxProps } from "../Box";

export type TTableVariant = TCollapseProps["variant"];

export type SortDirection = "asc" | "desc";

export type TOnTableSort = (state: TSortState | null) => void;

export type TSortState = {
  columnId: string;
  direction: SortDirection;
};

export type TTableProps<T = any> = TBoxProps & {
  style?: StyleProp<ViewStyle>;
  data: T[];
  columns: TColumnProps<T>[];
  expandable?: (record: T) => ReactNode;
  loading?: boolean;
  variant?: TTableVariant;
  onSort?: TOnTableSort;
  sort?: TSortState | null;
  local?: {
    empty: TEmptyProps;
  };
};

export type TColumnProps<T = any> = {
  id: string;
  title: string;
  render: (record: T) => ReactNode;
  align?: FlexAlignType;
  maxWidth?: number;
  width?: number;
  sortable?: boolean;
  hidden?: boolean;
};
