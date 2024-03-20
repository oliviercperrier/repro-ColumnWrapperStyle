import React from "react";
import { AddressOutput } from "@budgeinc/budge-api";
import { i18n, StatesList } from "@budgeinc/budge-ui-utils";
import { StyleProp, ViewStyle } from "react-native";
import { Input } from "../../Input";
import FormItem from "../FormItem";

import { ADDRESS_FIELDS, AddressObjectType } from "./types";
import { Grid, TGridProps } from "../../Grid";
import { Select } from "../../Select";

export type TAddressFormProps = Partial<TGridProps> & {
  disabled?: boolean;
  activateAutofocus?: boolean;
  style?: StyleProp<ViewStyle>;
};

export const getAddressFieldsInitialValues = (address: AddressOutput | undefined): AddressObjectType<string> => ({
  [ADDRESS_FIELDS.CITY]: address?.city || "",
  [ADDRESS_FIELDS.LINE1]: address?.line1 || "",
  [ADDRESS_FIELDS.LINE2]: address?.line2 || "",
  [ADDRESS_FIELDS.STATE]: address?.state || "",
  [ADDRESS_FIELDS.ZIP]: address?.zip || "",
});

const AddressForm = ({ disabled, activateAutofocus = false, ...rest }: TAddressFormProps) => (
  <Grid column={1} {...rest}>
    <FormItem name={ADDRESS_FIELDS.LINE1}>
      <Input
        label={i18n.t("ui-core.address.line1", { defaultValue: "Address Line 1" })}
        disabled={disabled}
        autoFocus={activateAutofocus && !disabled}
      />
    </FormItem>
    <FormItem name={ADDRESS_FIELDS.LINE2}>
      <Input
        label={i18n.t("ui-core.address.line2", { defaultValue: "Address Line 2 (optional)" })}
        disabled={disabled}
      />
    </FormItem>
    <FormItem name={ADDRESS_FIELDS.CITY}>
      <Input label={i18n.t("ui-core.address.city", { defaultValue: "City" })} disabled={disabled} />
    </FormItem>
    <Grid
      column={2}
      responsive={{
        xxs: 1,
      }}
    >
      <FormItem name={ADDRESS_FIELDS.STATE}>
        <Select
          label={i18n.t("ui-core.address.state", {
            defaultValue: "State",
          })}
          enableSearch
          disabled={disabled}
          filterCurrentValue={false}
          options={StatesList.map(state => ({
            value: state,
            label: state,
          }))}
        />
      </FormItem>
      <FormItem name={ADDRESS_FIELDS.ZIP}>
        <Input label={i18n.t("ui-core.address.zip", { defaultValue: "Zip" })} disabled={disabled} />
      </FormItem>
    </Grid>
  </Grid>
);

export default AddressForm;
