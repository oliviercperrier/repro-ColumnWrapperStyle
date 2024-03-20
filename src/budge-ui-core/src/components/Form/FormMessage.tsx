import React from "react";
import { Alert, TAlertProps } from "../Alert";
import { Text } from "../Text";

export type TFormMessageProps = TAlertProps & {
  message: string;
};

const FormMessage = ({ message, ...rest }: TFormMessageProps) => (
  <Alert style={{ overflow: "hidden" }} {...rest}>
    <Text color={rest.color}>{message}</Text>
  </Alert>
);

export default FormMessage;
