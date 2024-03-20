import {
  EmployeePayrollSettings,
  EmployeePayrollSettingsPayFrequencyEnum,
  EmployeePayrollSettingsPayDayOfWeekEnum,
  EmployeePayrollSettingsPayDayOfMonth1Enum,
} from "@budgeinc/budge-api";
import { DEFAULT_DATE_FORMAT_SHORT, ISO_DATE_FORMAT, formatDate, i18n, intlFormatDate } from "@budgeinc/budge-ui-utils";
import {
  getDate,
  addMonths,
  getDaysInMonth,
  getDay,
  getYear,
  getWeek,
  eachWeekOfInterval,
  addDays,
  addWeeks,
  startOfWeek,
  parseISO,
  isAfter,
  isBefore,
  setDay,
  add,
} from "date-fns";

export type DayOfMonth =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | 25
  | 26
  | 27
  | 28
  | 29
  | 30
  | 31;

export const getPaydayFrequencyDisplay = (
  paydaySettings: EmployeePayrollSettings,
  options: {
    showStartingOn: boolean;
  } = {
    showStartingOn: true,
  }
) => {
  const nextEffectivePayday = getNextEffectivePayDay(paydaySettings);
  const startingOnDisplay =
    options?.showStartingOn && nextEffectivePayday
      ? `, starting ${formatDate(nextEffectivePayday, DEFAULT_DATE_FORMAT_SHORT)}`
      : "";

  switch (paydaySettings.payFrequency) {
    case EmployeePayrollSettingsPayFrequencyEnum.Weekly:
      return `Every ${i18n.get(`enums.weekDay.${paydaySettings.payDayOfWeek}`)}${startingOnDisplay}`;
    case EmployeePayrollSettingsPayFrequencyEnum.BiWeekly:
      return `Every other ${i18n.get(`enums.weekDay.${paydaySettings.payDayOfWeek}`)}${startingOnDisplay}`;
    case EmployeePayrollSettingsPayFrequencyEnum.Monthly:
      return `Every ${getDayOfMonthDisplay(
        payDayOfMonthToNumber(paydaySettings.payDayOfMonth1!)
      )} of the month${startingOnDisplay}`;
    case EmployeePayrollSettingsPayFrequencyEnum.SemiMonthly:
      return `Every ${getDayOfMonthDisplay(
        payDayOfMonthToNumber(paydaySettings.payDayOfMonth1!)
      )} and ${getDayOfMonthDisplay(
        payDayOfMonthToNumber(paydaySettings.payDayOfMonth2!)
      )} of the month${startingOnDisplay}`;
    default:
      return "";
  }
};

/**
 * @deprecated Use the new {@link getPaydayFrequencyDisplay}.
 */
export const getPaydayDescription = ({
  frequency,
  dayOfTheWeek,
  daysOfTheMonth,
  options = {
    prefix: "You get paid",
  },
}: {
  frequency: EmployeePayrollSettingsPayFrequencyEnum | undefined;
  dayOfTheWeek: EmployeePayrollSettingsPayDayOfWeekEnum | undefined;
  daysOfTheMonth: EmployeePayrollSettingsPayDayOfMonth1Enum[];
  options?: {
    prefix?: string | null;
  };
}): string => {
  const prefix = options.prefix ? `${options.prefix} ` : "";

  switch (frequency) {
    case EmployeePayrollSettingsPayFrequencyEnum.Weekly:
      return `${prefix}every ${i18n.get(`enums.weekDay.${dayOfTheWeek}`)}`;
    case EmployeePayrollSettingsPayFrequencyEnum.BiWeekly:
      return `${prefix}every other ${i18n.get(`enums.weekDay.${dayOfTheWeek}`)}`;
    case EmployeePayrollSettingsPayFrequencyEnum.Monthly:
      return `${prefix}on the ${getDayOfMonthDisplay(payDayOfMonthToNumber(daysOfTheMonth[0]))} of each month`;
    case EmployeePayrollSettingsPayFrequencyEnum.SemiMonthly:
      return `${prefix}on the ${getDayOfMonthDisplay(
        payDayOfMonthToNumber(daysOfTheMonth[0])
      )} and ${getDayOfMonthDisplay(payDayOfMonthToNumber(daysOfTheMonth[1]))} of each month`;
    default:
      return "";
  }
};

/**
 * Get the next effective date based on the payday setting
 *
 * @param settings EmployeePayrollSettings
 * @returns Date
 */
export const getNextEffectivePayDay = (settings: EmployeePayrollSettings): Date | null => {
  switch (settings.payFrequency) {
    case EmployeePayrollSettingsPayFrequencyEnum.Monthly:
      return getNextEffectivePayDayForDayOfMonth(payDayOfMonthToNumber(settings.payDayOfMonth1!));
    case EmployeePayrollSettingsPayFrequencyEnum.SemiMonthly:
      return getNextEffectivePayDayForSemiMonthlyFreq(
        payDayOfMonthToNumber(settings.payDayOfMonth1!),
        payDayOfMonthToNumber(settings.payDayOfMonth2!)
      );
    case EmployeePayrollSettingsPayFrequencyEnum.Weekly:
      return getNextEffectivePayDayForWeeklyFreq(settings.payDayOfWeek!);
    case EmployeePayrollSettingsPayFrequencyEnum.BiWeekly:
      return getNextEffectivePayDayForBiWeeklyFreq(settings.payDayStartDate!);
    default:
      return null;
  }
};

export const getDayOfMonthDisplay = (dayOfMonth: number): string => {
  switch (dayOfMonth) {
    case 1:
    case 21:
    case 31:
      return `${dayOfMonth}st`;
    case 2:
    case 22:
      return `${dayOfMonth}nd`;
    case 3:
    case 23:
      return `${dayOfMonth}rd`;
    default:
      return `${dayOfMonth}th`;
  }
};

export const PayFrequencyPaymentsPerMonthMap: Record<EmployeePayrollSettingsPayFrequencyEnum, number> = {
  [EmployeePayrollSettingsPayFrequencyEnum.BiWeekly]: 52 / 2 / 12,
  [EmployeePayrollSettingsPayFrequencyEnum.Weekly]: 52 / 12,
  [EmployeePayrollSettingsPayFrequencyEnum.Monthly]: 1,
  [EmployeePayrollSettingsPayFrequencyEnum.SemiMonthly]: 2,
};

export const PayDayOfWeekToIndexMap: Record<EmployeePayrollSettingsPayDayOfWeekEnum, number> = {
  [EmployeePayrollSettingsPayDayOfWeekEnum.Monday]: 1,
  [EmployeePayrollSettingsPayDayOfWeekEnum.Tuesday]: 2,
  [EmployeePayrollSettingsPayDayOfWeekEnum.Wednesday]: 3,
  [EmployeePayrollSettingsPayDayOfWeekEnum.Thursday]: 4,
  [EmployeePayrollSettingsPayDayOfWeekEnum.Friday]: 5,
};

export const IndexToPayDayOfWeekMap: Record<number, EmployeePayrollSettingsPayDayOfWeekEnum> = {
  1: EmployeePayrollSettingsPayDayOfWeekEnum.Monday,
  2: EmployeePayrollSettingsPayDayOfWeekEnum.Tuesday,
  3: EmployeePayrollSettingsPayDayOfWeekEnum.Wednesday,
  4: EmployeePayrollSettingsPayDayOfWeekEnum.Thursday,
  5: EmployeePayrollSettingsPayDayOfWeekEnum.Friday,
};

export const payDayOfMonthToNumber = (dayOfMonth: EmployeePayrollSettingsPayDayOfMonth1Enum) =>
  parseInt(dayOfMonth.replace("D", ""));

export const numberToPayDayOfMonth = (value: DayOfMonth): EmployeePayrollSettingsPayDayOfMonth1Enum =>
  `D${value.toString().padStart(2, "0")}` as EmployeePayrollSettingsPayDayOfMonth1Enum;

export const getMonthlyAmountCentsBasedOfPayDaySetting = (
  amountCents: number,
  payFrequency: EmployeePayrollSettingsPayFrequencyEnum
) => amountCents * Math.round(PayFrequencyPaymentsPerMonthMap[payFrequency]);

export const isPayFreqWeeklyOrBiweekly = (payFrequency: EmployeePayrollSettingsPayFrequencyEnum | undefined) =>
  isPayFreqWeekly(payFrequency) || isPayFreqBiWeekly(payFrequency);

export const isPayFreqWeekly = (payFrequency: EmployeePayrollSettingsPayFrequencyEnum | undefined) =>
  payFrequency === EmployeePayrollSettingsPayFrequencyEnum.Weekly;

export const isPayFreqBiWeekly = (payFrequency: EmployeePayrollSettingsPayFrequencyEnum | undefined) =>
  payFrequency === EmployeePayrollSettingsPayFrequencyEnum.BiWeekly;

export const isForPayDay = (paymentDayOfMonth: number | undefined) => paymentDayOfMonth === -1;

export const getNextEffectivePayDayForDayOfMonth = (dayOfMonth: number): Date => {
  const today = new Date();
  const daysInMonth = getDaysInMonth(today);

  if (daysInMonth < dayOfMonth) {
    // First day of next month
    return new Date(addMonths(today, 1).setDate(1));
  }

  if (getDate(today) >= dayOfMonth) {
    // Day is passed, date will be next month
    const nextMonth = addMonths(today, 1);
    const daysInNextMonth = getDaysInMonth(nextMonth);

    return new Date(daysInNextMonth < dayOfMonth ? nextMonth.setDate(1) : nextMonth.setDate(dayOfMonth));
  }
  // Day is not passed
  return new Date(today.setDate(dayOfMonth));
};

export const getNextEffectivePayDayForSemiMonthlyFreq = (payDayOfMonth1: number, payDayOfMonth2: number): Date => {
  const todayDate = getDate(new Date());

  if (todayDate > payDayOfMonth1 && todayDate < payDayOfMonth2) {
    return getNextEffectivePayDayForDayOfMonth(payDayOfMonth2);
  }

  return getNextEffectivePayDayForDayOfMonth(payDayOfMonth1);
};

export const getNextEffectivePayDayForWeeklyFreq = (payDayOfWeek: EmployeePayrollSettingsPayDayOfWeekEnum): Date => {
  const dayOfWeekIndex = PayDayOfWeekToIndexMap[payDayOfWeek];

  let nextDate = addDays(new Date(), 1);

  while (!(getDay(nextDate) === dayOfWeekIndex)) {
    nextDate = addDays(nextDate, 1);
  }

  return new Date(nextDate);
};

const getDateForDayOfWeekInWeek = (year: number, weekNumber: number, dayOfWeek: number) => {
  const startOfWeekDate = startOfWeek(new Date(year, 0, 1), {
    weekStartsOn: 1,
  });

  const targetWeekDate = addWeeks(startOfWeekDate, weekNumber - 1);
  const targetDate = addDays(targetWeekDate, dayOfWeek - 1);

  return targetDate;
};

export const getNextEffectivePayDayForBiWeeklyFreq = (payDayStartDate: string): Date => {
  const start = parseISO(payDayStartDate);

  if (isBefore(new Date(), start)) {
    return start;
  }

  const startDayOfWeek = getDay(start);

  const weeksList = eachWeekOfInterval(
    {
      start,
      end: addMonths(new Date(), 1),
    },
    {
      weekStartsOn: 1,
    }
  );

  const nextBiweeklyPayDay = weeksList
    .filter((_, index) => index % 2 === 0)
    .map(date =>
      getDateForDayOfWeekInWeek(
        getYear(date),
        getWeek(date, {
          weekStartsOn: 1,
        }),
        startDayOfWeek
      )
    )
    .find((value, index) => {
      if (index > 0 && isAfter(value, new Date())) {
        return true;
      }

      return false;
    });

  return nextBiweeklyPayDay!;
};

export const getWeekDateStartDateOptions = (
  weekday: EmployeePayrollSettingsPayDayOfWeekEnum
): { label: string; value: string }[] => {
  const today = new Date();
  const currentDayOfWeek = getDay(new Date());
  const targetDayOfWeek = PayDayOfWeekToIndexMap[weekday];

  const dayOffset =
    currentDayOfWeek === targetDayOfWeek
      ? 7
      : currentDayOfWeek > targetDayOfWeek
      ? 7 - (currentDayOfWeek - targetDayOfWeek)
      : targetDayOfWeek - currentDayOfWeek;

  const nextDay1 = setDay(add(today, { days: dayOffset }), PayDayOfWeekToIndexMap[weekday]);
  const nextDay2 = add(nextDay1, { days: 7 });

  return [
    {
      label: intlFormatDate({ value: nextDay1, useUserTimezone: true }),
      value: formatDate(nextDay1, ISO_DATE_FORMAT),
    },
    {
      label: intlFormatDate({ value: nextDay2, useUserTimezone: true }),
      value: formatDate(nextDay2, ISO_DATE_FORMAT),
    },
  ];
};

export const hasValidPaydaySetting = ({
  frequency,
  currentStartDate,
  currentDayOfTheWeek,
  currentDaysOfTheMonth,
}: {
  frequency: EmployeePayrollSettingsPayFrequencyEnum | undefined;
  currentStartDate: string | null | undefined;
  currentDayOfTheWeek: EmployeePayrollSettingsPayDayOfWeekEnum | undefined;
  currentDaysOfTheMonth: (EmployeePayrollSettingsPayDayOfMonth1Enum | undefined)[];
}) => {
  switch (frequency) {
    case EmployeePayrollSettingsPayFrequencyEnum.Weekly:
      return !!currentDayOfTheWeek;
    case EmployeePayrollSettingsPayFrequencyEnum.BiWeekly:
      return (
        currentDayOfTheWeek &&
        !!getWeekDateStartDateOptions(currentDayOfTheWeek).find(({ value }) => value === currentStartDate)
      );
    case EmployeePayrollSettingsPayFrequencyEnum.Monthly:
      return currentDaysOfTheMonth.filter(Boolean).length === 1;
    case EmployeePayrollSettingsPayFrequencyEnum.SemiMonthly:
      return currentDaysOfTheMonth.filter(Boolean).length === 2;
    default:
      return false;
  }
};
