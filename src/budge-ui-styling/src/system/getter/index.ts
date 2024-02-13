import { getColorValue } from "./getColorValue";
import { getDefaultValue } from "./getDefaultValue";
import { getFontSizeValue } from "./getFontSizeValue";
import { getSpacingValue } from "./getSpacingValue";

export const valueGetters = {
  color: getColorValue,
  default: getDefaultValue,
  fontSize: getFontSizeValue,
  spacing: getSpacingValue,
};

export type SystemValueType = keyof typeof valueGetters;
