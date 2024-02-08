import { LocaleObject } from "yup";
import { i18n } from "../i18n";

export const YupLocales: LocaleObject = {
  mixed: {
    default: i18n.t("utils.yup.mixed.default"),
    required: i18n.t("utils.yup.mixed.required"),
    notType: i18n.t("utils.yup.mixed.notType"),
  },
  number: {
    min: ({ min }) => i18n.t("utils.yup.number.min", { count: min }),
    max: ({ max }) => i18n.t("utils.yup.number.max", { count: max }),
    lessThan: ({ less }) => i18n.t("utils.yup.number.lessThan", { less }),
    moreThan: ({ more }) => i18n.t("utils.yup.number.moreThan", { more }),
  },
  string: {
    email: i18n.t("utils.yup.string.email"),
    length: ({ length }) => i18n.t("utils.yup.string.length", { count: length }),
    min: ({ min }) => i18n.t("utils.yup.string.min", { count: min }),
    max: ({ max }) => i18n.t("utils.yup.string.max", { count: max }),
    url: i18n.t("utils.yup.string.url"),
    uuid: i18n.t("utils.yup.string.uuid"),
  },
};

export const INVALID_EMAIL = i18n.t("utils.yup.other.invalidEmail");
export const PASSWORD_IS_WEAK = i18n.t("utils.yup.other.passwordIsTooWeak");
export const PASSWORD_MUST_MATCH_MSG = i18n.t("utils.yup.other.passwordMustMatch");
export const ENTER_VALID_DATE_MSG = i18n.t("utils.yup.other.enterValidDate");
export const DEFAULT_END_DATE_MUST_BE_AFTER_MSG = i18n.t("utils.yup.other.endDateMustBeAfter");
export const ENTER_VALID_SSN_MSG = i18n.t("utils.yup.other.enterValidSsn");
export const INVALID_SSN_MSG = i18n.t("utils.yup.other.invalidSsn");
export const ENTER_VALID_PHONE_MSG = i18n.t("utils.yup.other.enterValidPhone");
export const INVALID_PHONE_MSG = i18n.t("utils.yup.other.invalidPhone");
