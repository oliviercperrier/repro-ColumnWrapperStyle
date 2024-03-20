import React, { useState } from "react";
import { StyleProp, ViewStyle } from "react-native";
import { Box } from "../../../components/Box";

import AddressForm, { TAddressFormProps } from "./AddressForm";
import AddressFormItemInput from "./AddressFormItemInput";

export type TAddressFormItemCollapseProps = TAddressFormProps & {
  label: string;
  fieldName: string;
  initialVisible?: boolean;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
};
const AddressFormItemCollapse = ({
  initialVisible = false,
  label,
  fieldName,
  disabled,
  style,
  ...rest
}: TAddressFormItemCollapseProps) => {
  const [isVisible, setIsVisible] = useState(initialVisible);

  return (
    <Box style={style}>
      {!isVisible && <AddressFormItemInput label={label} fieldName={fieldName} onModalVisibleChange={setIsVisible} />}
      {isVisible && <AddressForm activateAutofocus={!initialVisible} disabled={disabled} {...rest} />}
    </Box>
  );
};

export default AddressFormItemCollapse;
