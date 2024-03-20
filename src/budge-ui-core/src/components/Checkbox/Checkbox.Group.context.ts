import React from "react";
import { TFormItemValueTypes } from "../Form";

export type CheckboxGroupContextType = {
  value: TFormItemValueTypes[] | undefined;
  onValueChange: ((value: TFormItemValueTypes[]) => void) | undefined;
};

export const CheckboxGroupContext = React.createContext<CheckboxGroupContextType>(null as any);

export const CheckboxGroupContextProvider = CheckboxGroupContext.Provider;
