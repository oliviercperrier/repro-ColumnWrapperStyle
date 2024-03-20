import React, { forwardRef, PropsWithChildren } from "react";
import { View } from "react-native";
import { ErrorMessage } from "formik";
import { Text, TTextProps } from "../Text";
import { FormItemContextProvider } from "./context";
import { Box, TBoxProps } from "../Box";

export type TFormItemProps = TBoxProps & {
  name: string;
  hideError?: boolean;
  centerErrorText?: boolean;
  errorMessageProps?: TTextProps;
};

const FormItem = forwardRef<View, PropsWithChildren<TFormItemProps>>(
  ({ name, children, hideError = false, centerErrorText = false, errorMessageProps, ...rest }, ref) => (
    <FormItemContextProvider
      value={{
        name,
      }}
    >
      <Box ref={ref} {...rest}>
        {children}
        {!hideError && (
          <ErrorMessage
            name={name}
            render={errorMessage => (
              <Text
                mt={3}
                px={16}
                ta={centerErrorText ? "center" : "left"}
                color="red"
                variant="bodySmall"
                {...errorMessageProps}
              >
                {errorMessage}
              </Text>
            )}
          />
        )}
      </Box>
    </FormItemContextProvider>
  )
);

export default FormItem;
