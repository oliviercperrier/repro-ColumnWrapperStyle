import { useField, useFormikContext, getIn, FieldMetaProps, FieldHelperProps, FieldInputProps } from "formik";
import { useContext } from "react";
import { FormItemContext } from "./context";

export const isRequiredField = (validationSchema: any, name: string) =>
  !!getIn(validationSchema.describe().fields, name).tests.find((testName: string) => testName === "required");

export interface UseFormikFieldType {
  field: FieldInputProps<any> | undefined;
  meta: FieldMetaProps<any> | undefined;
  helpers: FieldHelperProps<any> | undefined;
  hasError: boolean;
  // isRequired: boolean;
}

const useFormikField = (): UseFormikFieldType => {
  const formikContext = useFormikContext();
  const { name } = useContext(FormItemContext);
  const [field, meta, helpers] = formikContext && name ? useField(name) : [undefined, undefined, undefined];
  // Waiting on: ref: https://github.com/jaredpalmer/formik/issues/2458
  // const isRequired =
  //  field?.name && formikContext.validationSchema
  //    ? useMemo(
  //        () => isRequiredField(formikContext.validationSchema, field.name),
  //        [name, formikContext.validationSchema]
  //      )
  //    : false;

  return {
    field,
    meta,
    helpers,
    hasError: !!(meta?.error && meta?.touched),
    // isRequired,
  };
};

export default useFormikField;
