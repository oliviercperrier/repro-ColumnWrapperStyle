import React from "react";
import { TFormItemValueTypes } from "../Form";

export type RadioGroupContextType = {
  value: TFormItemValueTypes | undefined;
  onValueChange: ((value: TFormItemValueTypes) => void) | undefined;
};

export const RadioGroupContext = React.createContext<RadioGroupContextType>(null as any);

export const RadioGroupContextProvider = RadioGroupContext.Provider;
