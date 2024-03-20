import React from "react";
import { Input } from "../../Input";
import { EditIcon, RoundIcon } from "../../Icons";
import FormItem from "../FormItem";
import { Pressable } from "../../Pressable";

interface OwnProps {
  label: string;
  fieldName: string;
  onModalVisibleChange: (value: boolean) => void;
}

const AddressFormItemInput = ({ label, fieldName, onModalVisibleChange }: OwnProps) => (
  <FormItem name={fieldName}>
    <Pressable onPress={() => onModalVisibleChange(true)}>
      <Input label={label} rightSection={<RoundIcon icon={EditIcon} color="primary" />} editable={false} />
    </Pressable>
  </FormItem>
);

export default AddressFormItemInput;
