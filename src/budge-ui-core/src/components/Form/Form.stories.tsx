import { AddressOutput } from "@budgeinc/budge-api";
import { AddressSchema, CountriesList, DateSchema, EmailSchema, PasswordSchema } from "@budgeinc/budge-ui-utils";
import { action } from "@storybook/addon-actions";

import { useFormik } from "formik";
import React, { useState } from "react";
import { View } from "react-native";
import * as Yup from "yup";
import { Button } from "../Button";
import { Checkbox } from "../Checkbox";
import { Input, MoneyInput, NumberInput, PasswordInput } from "../Input";
import { Modal } from "../Modal";
import { RadioGroup } from "../Radio";
import { Select } from "../Select";
import { Stack } from "../Stack";
import { Switch } from "../Switch";
import { Text } from "../Text";
import {
  addressFieldsValidations,
  AddressFormItemCollapse,
  AddressFormItemModal,
  formatAddress,
  getAddressFieldsInitialValues,
} from "./Address";
import Form, { TFormProps } from "./Form";
import FormItem from "./FormItem";
import FormProvider from "./FormProvider";
import { DatePickerInput } from "../DatePickerInput";
import { FormFieldsWrapper } from ".";
import { MultiSelect } from "../MultiSelect";
import { Meta, StoryFn } from "@storybook/react";

const meta = {
  title: "Data Entry/Form",
  component: Form,
} satisfies Meta<typeof Form>;

export default meta;

type Story = StoryFn<typeof Form>;

export const Error: Story = () => (
  <View style={{ maxWidth: 500 }}>
    <Form
      formErrorMsg="Wrong credentials"
      formikProps={{
        initialValues: {
          email: "",
          password: "",
        },
        onSubmit: values => action("onSubmit")(values),
      }}
    >
      {({ submitForm }) => (
        <Stack spacing="md">
          <FormItem name="email">
            <Input label="Email" />
          </FormItem>
          <FormItem name="password">
            <PasswordInput label="Password" />
          </FormItem>
          <Button title="Submit" color="primary" onPress={() => submitForm()} />
        </Stack>
      )}
    </Form>
  </View>
);

export const Success: Story = () => (
  <View style={{ maxWidth: 500 }}>
    <Form
      formSuccessMsg="Password Updated Successfully"
      formikProps={{
        initialValues: {
          email: "",
          password: "",
        },
        onSubmit: values => action("onSubmit")(values),
      }}
    >
      {({ submitForm }) => (
        <Stack spacing="md">
          <FormItem name="email">
            <Input label="Email" />
          </FormItem>
          <FormItem name="password">
            <PasswordInput label="Password" />
          </FormItem>
          <Button title="Submit" variant="filled" color="primary" onPress={() => submitForm()} />
        </Stack>
      )}
    </Form>
  </View>
);

const today = new Date();

export const Complex: Story = () => {
  const address = {
    line1: "969 Willow Bay",
    line2: "",
    state: "NY",
    city: "Buffalo",
    zip: "14202",
  };

  return (
    <View style={{ maxWidth: 500 }}>
      <Form
        formikProps={{
          enableReinitialize: true,
          initialValues: {
            email: "olivier.castro-perrier@budge.app",
            birthDate: today,
            textarea: "Welcome to budge",
            country: "CA",
            countrymulti: ["CA"],
            employed: true,
            divorced: false,
            checkboxgroup: ["term"],
            manager: false,
            status: "single",
            salaryCents: 100,
            interestRate: 0,
            address: formatAddress(address),
            ...getAddressFieldsInitialValues(address),
          },
          validationSchema: Yup.object().shape({
            email: EmailSchema().required(),
            birthDate: DateSchema().required(),
            textarea: Yup.string().required(),
            salaryCents: Yup.number().required(),
            address: AddressSchema().required(),
            interestRate: Yup.number().required(),
            ...addressFieldsValidations,
          }),
          onSubmit: values => {
            action("onSubmit")(values);
          },
        }}
      >
        {({ submitForm }) => (
          <FormFieldsWrapper>
            <Stack spacing="md">
              <FormItem name="email">
                <Input label="Email" />
              </FormItem>
              <FormItem name="birthDate">
                <DatePickerInput label="Birthdate" />
              </FormItem>
              <FormItem name="address" hideError>
                <AddressFormItemCollapse fieldName="address" initialVisible={false} label="Address" />
              </FormItem>
              <FormItem name="countrymulti">
                <MultiSelect
                  label="Country"
                  options={CountriesList.map(country => ({
                    label: country.name,
                    value: country.value,
                  }))}
                />
              </FormItem>
              <FormItem name="country">
                <Select
                  label="Country"
                  options={CountriesList.map(country => ({
                    label: country.name,
                    value: country.value,
                  }))}
                />
              </FormItem>
              <FormItem name="salaryCents">
                <MoneyInput label="Salary" />
              </FormItem>
              <FormItem name="interestRate">
                <NumberInput label="Interest Rate" />
              </FormItem>
              <FormItem name="Message">
                <Input label="Message" multiline numberOfLines={6} />
              </FormItem>
              <FormItem name="employed">
                <Switch label="Employed" />
              </FormItem>
              <FormItem name="divorced">
                <Switch.Confirm
                  label="Divorced?"
                  confirmModalProps={{
                    children: "Are you really divorced?",
                  }}
                />
              </FormItem>
              <FormItem name="checkboxgroup">
                <Checkbox.Group
                  options={[
                    { label: "Accept Terms", value: "term" },
                    { label: "Enroll Newsletter", value: "enroll" },
                  ]}
                />
              </FormItem>
              <FormItem name="manager">
                <Checkbox.Confirm
                  label="I'm a manager"
                  confirmModalProps={{
                    children: "Are you really a manager?",
                  }}
                />
              </FormItem>
              <FormItem name="status">
                <RadioGroup
                  options={[
                    { label: "Single", value: "single" },
                    { label: "Married", value: "married" },
                  ]}
                />
              </FormItem>
              <Button onPress={submitForm} title="Submit" variant="filled" color="primary" />
            </Stack>
          </FormFieldsWrapper>
        )}
      </Form>
    </View>
  );
};

export const SignupForm: Story = () => {
  const form = useFormik({
    initialValues: {
      email: "olivier.castro-perrier@budge.app",
      password: "",
    },
    validateOnBlur: false,
    validateOnChange: false,
    validationSchema: Yup.object().shape({
      email: EmailSchema().required(),
      password: PasswordSchema().required(),
    }),
    onSubmit: async values =>
      new Promise(resolveOuter => {
        resolveOuter(
          new Promise(resolveInner => {
            setTimeout(resolveInner, 2000);
          })
        );
      }),
  });

  return (
    <View style={{ maxWidth: 500 }}>
      <FormProvider value={form}>
        <Stack spacing="md">
          <FormItem name="email">
            <Input label="Email" />
          </FormItem>
          <FormItem name="password">
            <PasswordInput label="Password" showStrengthMeter />
          </FormItem>
          <Button
            loading={form.isValidating || form.isSubmitting}
            onPress={() => form.submitForm()}
            title="Submit"
            color="primary"
            variant="filled"
          />
        </Stack>
      </FormProvider>
    </View>
  );
};

export const AddressModalInput: Story = () => {
  const [busninessAddress, setBusinessAddress] = useState<AddressOutput>({
    line1: "",
    line2: "",
    city: "",
    state: "",
    zip: "",
  });

  return (
    <View style={{ maxWidth: 500 }}>
      <Form
        formikProps={{
          initialValues: getAddressFieldsInitialValues(undefined),
          validationSchema: Yup.object().shape({
            ...addressFieldsValidations,
          }),
          onSubmit: values => action("onSubmit")(values),
        }}
      >
        {({ submitForm, setFieldValue }) => (
          <Stack spacing="md">
            <AddressFormItemModal
              label="Business Primary Address"
              fieldName="address"
              initialState={busninessAddress}
              onSaveCb={(details, formattedAddress) => {
                setBusinessAddress(details);
                setFieldValue("address", formattedAddress);
                action("onSaveCb")(details);
              }}
            />
            <Button
              style={{ marginBottom: 12 }}
              onPress={() => submitForm()}
              title="Submit"
              variant="filled"
              color="primary"
            />
          </Stack>
        )}
      </Form>
    </View>
  );
};

export const AddressCollapseInput: Story = () => (
  <View style={{ maxWidth: 500 }}>
    <Form
      formikProps={{
        initialValues: getAddressFieldsInitialValues(undefined),
        validationSchema: Yup.object().shape({
          ...addressFieldsValidations,
        }),
        onSubmit: values => action("onSubmit")(values),
      }}
    >
      {({ submitForm }) => (
        <Stack spacing="md">
          <AddressFormItemCollapse
            label="Personal Address"
            disabled={false}
            fieldName="address"
            initialVisible={false}
          />
          <Button
            style={{ marginBottom: 12 }}
            onPress={() => submitForm()}
            title="Submit"
            variant="filled"
            color="primary"
          />
        </Stack>
      )}
    </Form>
  </View>
);

export const InModal: Story = () => {
  const form = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: values => action("onSubmit")(values),
  });

  return (
    <Modal
      title={<Text variant="bodyLarge">Form in a Modal</Text>}
      opened
      onClose={action("onClose")}
      onOk={form.submitForm}
      okButtonProps={{
        disabled: !form.dirty,
      }}
    >
      <FormProvider value={form} px="xl">
        <Stack spacing="md">
          <FormItem name="email">
            <Input label="Email" />
          </FormItem>
          <FormItem name="password">
            <Input label="Password" secureTextEntry />
          </FormItem>
        </Stack>
      </FormProvider>
    </Modal>
  );
};
