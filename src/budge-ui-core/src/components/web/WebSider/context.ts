import React from "react";

export const WebSiderContext = React.createContext<{
  isCollapsed: boolean;
}>({
  isCollapsed: false,
});

export const WebSiderContextProvider = WebSiderContext.Provider;
