import { NumberFormat } from "intl";
import "intl/locale-data/jsonp/en-US";

import { DEFAULT_CURRENCY, DEFAULT_LOCALE } from "../constants";

export type TFormatMoneyParams = {
  amountCents: number | null | undefined;
  curreny?: string;
  minFractionDigits?: number;
  maxFractionDigits?: number;
  locale?: string;
  defaultValue?: number;
};

/**
 * Returns the formatted money string
 *
 * @example
 * ```
 * formatMoney({
 *   amountCents: 12000000
 * });
 *
 * // Returns: $120,000.00
 * ```
 *
 * @param object - @see TFormatMoneyParams
 * @returns string
 *
 */
export const formatMoney = ({
  amountCents,
  curreny = DEFAULT_CURRENCY,
  minFractionDigits,
  maxFractionDigits,
  defaultValue = 0,
}: TFormatMoneyParams) => {
  const cents = (amountCents || defaultValue) / 100;
  return new NumberFormat(DEFAULT_LOCALE, {
    style: "currency",
    currency: curreny,
    maximumFractionDigits: maxFractionDigits,
    minimumFractionDigits:
      minFractionDigits === undefined ? (cents % 1 === 0 || cents === 0 ? 0 : 2) : minFractionDigits,
  }).format(cents);
};
