import React from "react";
import { Formik, FormikConfig, FormikProps, FormikValues } from "formik";
import FormMessage, { TFormMessageProps } from "./FormMessage";
import { Stack, TStackProps } from "../Stack";

export type TFormChildren<Values> = ((props: FormikProps<Values>) => React.ReactNode) | React.ReactNode;

export type TFormProps<Values, ExtraProps> = TStackProps & {
  formikProps: FormikConfig<Values> & ExtraProps;
  formErrorMsg?: string;
  formSuccessMsg?: string;
  formErrorProps?: TFormMessageProps;
  formSuccessProps?: TFormMessageProps;
  children: TFormChildren<Values>;
};

const Form = <Values extends FormikValues = FormikValues, ExtraProps = {}>({
  formErrorMsg,
  formSuccessMsg,
  formErrorProps,
  formSuccessProps,
  formikProps,
  children,
  ...rest
}: TFormProps<Values, ExtraProps>) => (
  <Stack spacing="md" {...rest}>
    {formSuccessMsg && <FormMessage color="green" message={formSuccessMsg} {...formSuccessProps} />}
    {formErrorMsg && <FormMessage color="red" message={formErrorMsg} {...formErrorProps} />}
    <Formik
      {...formikProps}
      validateOnBlur={formikProps.validateOnBlur === undefined ? true : formikProps.validateOnBlur}
    >
      {children}
    </Formik>
  </Stack>
);

export default Form;
