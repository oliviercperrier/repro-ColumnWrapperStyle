import { NumberFormat } from "intl";
import "intl/locale-data/jsonp/en-US";

import { DEFAULT_FRACTION_DIGITS, DEFAULT_LOCALE } from "../constants";

export type TFormatPercentParams = {
  value: number | null | undefined;
  minFractionDigits?: number;
  maxFractionDigits?: number;
  defaultValue?: number;
  locale?: string;
};

/**
 * Returns the formatted percent string
 *
 * @example
 * ```
 * formatPercent({
 *  value: 5.00
 * });
 *
 * // Returns: 5.00%
 * ```
 *
 * @param num number
 * @returns string
 *
 */
export const formatPercent = ({
  value,
  minFractionDigits = DEFAULT_FRACTION_DIGITS,
  maxFractionDigits,
  defaultValue = 0,
}: TFormatPercentParams) =>
  new NumberFormat(DEFAULT_LOCALE, {
    style: "percent",
    maximumFractionDigits: maxFractionDigits,
    minimumFractionDigits: minFractionDigits,
  }).format((value || defaultValue) / 100);
