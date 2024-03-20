import { TNumberSize } from "@budgeinc/budge-ui-styling";
import { createContext, useContext } from "react";

const CardContext = createContext<{ padding: TNumberSize }>({ padding: 0 });

export const CardProvider = CardContext.Provider;

export const useCard = () => useContext(CardContext);
