import { createContext, useContext } from "react";
import { TTabsPaneContextType } from "./Tabs.types";

export const TabsPaneContext = createContext<TTabsPaneContextType>({});

export const useTabsPaneContext = () => useContext(TabsPaneContext);
