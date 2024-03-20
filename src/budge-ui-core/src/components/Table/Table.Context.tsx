import React, { useContext } from "react";
import { TColumnProps, TOnTableSort, TSortState, TTableVariant } from "./types";

export type TTableContextType<T> = {
  columns: TColumnProps<T>[];
  expandable?: ((record: T) => React.ReactNode) | undefined;
  variant: TTableVariant;
  onSort?: TOnTableSort;
  sort?: TSortState | null;
};

export const TableContext = React.createContext<TTableContextType<any> | null>(null as any);

export const TableContextProvider = TableContext.Provider;

export const useTableContext = () => {
  const context = useContext(TableContext);

  if (!context) {
    throw new Error("TableContext must be used inside an TableContext.Provider");
  }

  return context;
};
