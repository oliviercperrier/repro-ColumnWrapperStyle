import React from "react";
import { useTheme } from "@budgeinc/budge-ui-styling";
import MoneyInput from "../MoneyInput";
import { TNumberInputProps } from "../../NumberInput";

export type TMoneySelectorProps = Omit<TNumberInputProps, "withControls">;

const MoneySelector = ({ step = 500, ...props }: TMoneySelectorProps) => {
  const theme = useTheme();

  return (
    <MoneyInput
      withControls
      step={step / 100}
      textStyle={{
        fontSize: 20,
        color: theme.fn.primaryColor(),
      }}
      {...props}
    />
  );
};

export default MoneySelector;
