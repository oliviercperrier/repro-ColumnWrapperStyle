import React from "react";

export type TFormContextType = {
  name: string;
};

export const FormItemContext = React.createContext<TFormContextType>({
  name: "",
});

export const FormItemContextProvider = FormItemContext.Provider;
