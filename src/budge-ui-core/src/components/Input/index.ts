import { ForwardedRef } from "react";
import Input, { TInputProps } from "./Input";

export * from "./Input";
export * from "./FileInput";
export * from "./MoneyInput";
export * from "./PercentInput";
export * from "./NumberInput";
export * from "./PasswordInput";
export * from "./CodeInput";
export * from "./UnstyledTextInput";

type TInputComponent = (props: TInputProps & { ref?: ForwardedRef<any> }) => JSX.Element;

const InputTemp: any = Input;

if (process.env.NODE_ENV !== "production") {
  InputTemp.displayName = "Input";
}

const InputMain = InputTemp as TInputComponent;

export { InputMain as Input };
