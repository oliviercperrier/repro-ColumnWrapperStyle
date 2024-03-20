import React, { Fragment, PropsWithChildren } from "react";
import { Platform } from "react-native";
import { Form } from "formik";

const FormFieldsWrapper = ({ children }: PropsWithChildren) =>
  Platform.OS === "web" ? (
    <Form
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {children}
      <input
        type="submit"
        tabIndex={-1}
        style={{
          display: "none",
        }}
      />
    </Form>
  ) : (
    <>{children}</>
  );

export default FormFieldsWrapper;
