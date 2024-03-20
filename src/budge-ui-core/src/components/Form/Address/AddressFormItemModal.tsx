import React, { useState } from "react";
import { AddressOutput } from "@budgeinc/budge-api";
import { BuildValidationSchema, i18n } from "@budgeinc/budge-ui-utils";
import { useFormik } from "formik";
import { StyleProp, ViewStyle } from "react-native";
import { Text } from "../../Text";
import FormProvider from "../FormProvider";
import AddressForm, { getAddressFieldsInitialValues } from "./AddressForm";
import { addressFieldsValidations } from "./types";
import AddressFormItemInput from "./AddressFormItemInput";
import { Modal } from "../../Modal";
import { Box } from "../../Box";

interface OwnProps {
  label: string;
  fieldName: string;
  initialState: AddressOutput;
  onSaveCb: (value: AddressOutput, formattedAddress: string) => void;
  style?: StyleProp<ViewStyle>;
}

export const formatAddress = (address: AddressOutput | undefined) =>
  !address || !Object.keys(address).length ? "" : `${address.line1}, ${address.city}, ${address.state}, ${address.zip}`;

const validationSchema = BuildValidationSchema(addressFieldsValidations);

const AddressFormItemModal = ({ label, initialState, fieldName, onSaveCb, style }: OwnProps) => {
  const [modalVisible, setModalVisible] = useState(false);

  const form = useFormik({
    initialValues: getAddressFieldsInitialValues(initialState),
    enableReinitialize: true,
    validationSchema,
    onSubmit: values => {
      setModalVisible(false);
      onSaveCb(values, formatAddress(values));
    },
  });

  const handleOnClose = () => {
    form.resetForm();
    setModalVisible(false);
  };

  return (
    <Box style={style}>
      <AddressFormItemInput label={label} fieldName={fieldName} onModalVisibleChange={setModalVisible} />
        <Modal
          opened={modalVisible}
          onOk={form.handleSubmit}
          onClose={handleOnClose}
          okButtonProps={{
            title: i18n.t("save"),
          }}
          title={
            <Text variant="bodyLarge" fw="600">
              {label}
            </Text>
          }
        >
          <FormProvider value={form} px="xl">
            <AddressForm activateAutofocus />
          </FormProvider>
        </Modal>
    </Box>
  );
};

export default AddressFormItemModal;
