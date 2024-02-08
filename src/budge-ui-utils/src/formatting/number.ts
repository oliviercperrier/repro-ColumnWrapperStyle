import { NumberFormat } from "intl";
import "intl/locale-data/jsonp/en-US";

import { DEFAULT_LOCALE } from "../constants";

export type TFormatNumberParams = {
  value: number | null | undefined;
  minFractionDigits?: number;
  maxFractionDigits?: number;
  defaultValue?: number;
};

/**
 * Returns the formatted number string
 *
 * @example
 * ```
 * formatNumber({
 *   value: 12000000
 * });
 *
 * // Returns: 120,000
 * ```
 *
 * @param object - @see TFormatMoneyParams
 * @returns string
 *
 */
export const formatNumber = ({
  value,
  minFractionDigits = 0,
  maxFractionDigits,
  defaultValue = 0,
}: TFormatNumberParams) =>
  new NumberFormat(DEFAULT_LOCALE, {
    minimumFractionDigits: minFractionDigits,
    maximumFractionDigits: maxFractionDigits,
  }).format(value || defaultValue);
