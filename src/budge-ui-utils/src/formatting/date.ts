import { format, intlFormat, parse } from "date-fns";
import { DateTimeFormat } from "intl";
import { DEFAULT_DATE_FORMAT, DEFAULT_LOCALE, DEFAULT_TIMEZONE, ISO_DATE_FORMAT } from "../constants";

export type TIntlFormatDateParams = {
  value: string | Date | null | undefined;
  locale?: string;
  timeZone?: string;
  showTime?: boolean;
  useUserTimezone?: boolean;
  monthFormat?: "long" | "short" | "narrow";
  weekday?: "long" | "short" | "narrow";
};

/**
 * Returns the formatted Intl string date
 *
 * @example
 * ```
 * intlFormatDate({
 *   value: "2022-05-16"
 * });
 *
 * // Returns: May 16, 2022
 * ```
 *
 *
 * @param object - @see TIntlFormatDateParams
 * @returns string
 *
 */
export const intlFormatDate = ({
  value,
  locale = DEFAULT_LOCALE,
  timeZone = DEFAULT_TIMEZONE,
  showTime = false,
  useUserTimezone = false,
  monthFormat = "long",
  weekday,
}: TIntlFormatDateParams) =>
  value
    ? intlFormat(
        new Date(value),
        {
          year: "numeric",
          month: monthFormat,
          day: "numeric",
          weekday,
          timeZone: useUserTimezone ? DateTimeFormat().resolvedOptions().timeZone : timeZone,
          ...(showTime
            ? {
                hour: "numeric",
                minute: "numeric",
                hour12: false,
              }
            : {}),
        },
        { locale }
      )
    : "";

export const parseDate = (dateString: string, dateFormat: string = ISO_DATE_FORMAT) =>
  parse(dateString, dateFormat, new Date());

export const formatDate = (date: Date | string | undefined) =>
  date ? format(new Date(date), DEFAULT_DATE_FORMAT) : "";

export const formatDateISO = (
  dateString: Date | string | undefined,
  options?: {
    withoutTime: boolean;
  }
) => {
  if (!dateString) return "";

  const isoDateString = new Date(dateString).toISOString();
  return options?.withoutTime ? isoDateString.split("T")[0] : isoDateString;
};
