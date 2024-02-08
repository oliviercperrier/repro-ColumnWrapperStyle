/* eslint-disable no-useless-escape */

import * as Yup from "yup";
import {
  DEFAULT_END_DATE_MUST_BE_AFTER_MSG,
  ENTER_VALID_DATE_MSG,
  ENTER_VALID_PHONE_MSG,
  ENTER_VALID_SSN_MSG,
  INVALID_PHONE_MSG,
  INVALID_SSN_MSG,
  PASSWORD_MUST_MATCH_MSG,
  PASSWORD_IS_WEAK,
  YupLocales,
  INVALID_EMAIL,
} from "./locales";
import { getPasswordStrength } from "../password";

Yup.setLocale(YupLocales);

export const BuildValidationSchema = (shapes: Yup.ObjectShape) => Yup.object().shape(shapes);

/**
 *  Password Schema used in Signin and Signup Forms
 */
export const PasswordSchema = () =>
  Yup.string()
    .min(12)
    .test("checkStrength", PASSWORD_IS_WEAK, async (value, a) => {
      if (value) {
        return getPasswordStrength(value).score > 2;
      }

      return true;
    });

export const ConfirmPasswordSchema = (ref: string) => Yup.string().oneOf([Yup.ref(ref)], PASSWORD_MUST_MATCH_MSG);

export const EmailSchema = () =>
  Yup.string().matches(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    INVALID_EMAIL
  );

export const BooleanSchema = () => Yup.boolean().isTrue(YupLocales.mixed?.default);

export const VerificationCodeSchema = () => Yup.string().length(6);

export const ZipSchema = () => Yup.string().matches(/^\d{5}$/, "Must contain 5 digits");

export const SSNSchema = () =>
  Yup.string()
    .test("checkFormat", INVALID_SSN_MSG, value => {
      if (value) {
        return /^(?!(000|666|9))\d{3}(?!00)\d{2}(?!0000)\d{4}$/.test(value);
      }

      return true;
    })
    .typeError(ENTER_VALID_SSN_MSG);

export const PhoneSchema = () =>
  Yup.string()
    .test("checkFormat", INVALID_PHONE_MSG, value => {
      if (value) {
        return /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(value);
      }

      return true;
    })
    .typeError(ENTER_VALID_PHONE_MSG);

export const DateSchema = () => Yup.date().typeError(ENTER_VALID_DATE_MSG);

export const AddressSchema = () =>
  Yup.string().when("line1", {
    is: (value: any) => !value,
    then: schema => schema.required(),
    otherwise: schema => schema.required(),
  });

/**
 *  Validate that a given date is greater than another date.
 *
 *  @param ref key of the other date to use for the validation.
 */
export const EndDateSchema = (ref: string, msg = DEFAULT_END_DATE_MUST_BE_AFTER_MSG) =>
  DateSchema().when(ref, ([startDate], schema) => {
    if (startDate) {
      const dayAfter = new Date(startDate.getTime() + 86400000);

      return schema.min(dayAfter, msg);
    }

    return schema;
  });

export const yup = Yup;
