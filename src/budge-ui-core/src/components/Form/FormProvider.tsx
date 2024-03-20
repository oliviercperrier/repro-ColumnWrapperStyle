import React, { PropsWithChildren } from "react";
import { FormikContextType, FormikProvider, FormikValues } from "formik";
import FormMessage, { TFormMessageProps } from "./FormMessage";
import { Stack, TStackProps } from "../Stack";

export type TFormProviderProps<Values> = TStackProps & {
  value: FormikContextType<Values>;
  formErrorMsg?: string;
  formSuccessMsg?: string;
  formErrorProps?: TFormMessageProps;
  formSuccessProps?: TFormMessageProps;
};

const FormProvider = <Values extends FormikValues = FormikValues>({
  value,
  formErrorMsg,
  formSuccessMsg,
  formSuccessProps,
  formErrorProps,
  children,
  ...rest
}: PropsWithChildren<TFormProviderProps<Values>>) => (
  <Stack spacing="md" {...rest}>
    {formSuccessMsg && <FormMessage color="green" message={formSuccessMsg} {...formSuccessProps} />}
    {formErrorMsg && <FormMessage color="red" message={formErrorMsg} {...formErrorProps} />}
    <FormikProvider value={value}>{children}</FormikProvider>
  </Stack>
);

export default FormProvider;
