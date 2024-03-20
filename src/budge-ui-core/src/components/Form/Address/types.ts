import { AddressOutput } from "@budgeinc/budge-api";
import { yup, ZipSchema } from "@budgeinc/budge-ui-utils";

export enum ADDRESS_FIELDS {
  ZIP = "zip",
  LINE1 = "line1",
  LINE2 = "line2",
  CITY = "city",
  STATE = "state",
}

export type AddressObjectType<T> = Record<keyof AddressOutput, T>;

export const addressFieldsValidations: AddressObjectType<any> = {
  [ADDRESS_FIELDS.CITY]: yup.string().required(),
  [ADDRESS_FIELDS.LINE1]: yup.string().required(),
  [ADDRESS_FIELDS.LINE2]: yup.string(),
  [ADDRESS_FIELDS.STATE]: yup.string().required(),
  [ADDRESS_FIELDS.ZIP]: ZipSchema().required(),
};
