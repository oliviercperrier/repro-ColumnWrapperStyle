import React from "react";
import { NumberInput, TNumberInputProps } from "../NumberInput";

export type TPercentInputProps = Omit<TNumberInputProps, "prefix" | "thousandSeparator">;

const PercentInput = ({ decimalScale = 2, allowDecimal = true, ...props }: TPercentInputProps) => (
  <NumberInput suffix="%" thousandSeparator="," allowDecimal={allowDecimal} decimalScale={decimalScale} {...props} />
);

export default PercentInput;
