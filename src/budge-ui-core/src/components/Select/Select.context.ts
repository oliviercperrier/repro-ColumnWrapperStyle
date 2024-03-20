import React from "react";

export type SelectContextType = {
  getDisplayName: (value: any) => string;
};

export const SelectContext = React.createContext<SelectContextType | null>(null as any);

export const SelectContextProvider = SelectContext.Provider;
