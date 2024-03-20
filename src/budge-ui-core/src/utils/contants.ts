import { i18n } from "@budgeinc/budge-ui-utils";

export const DEFAULT_ERROR_MSG = i18n.t("ui-core.error.defaultErrorMsg", {
  defaultValue: "A system error occured. Please reach out to the Budge success team for assistance",
});
export const EMPTY_VALUE_PLACEHOLDER = "-";

export const SpringConfig = { tension: 300, friction: 30 };
