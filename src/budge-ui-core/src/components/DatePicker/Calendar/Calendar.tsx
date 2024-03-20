import React, { forwardRef, useMemo } from "react";
import { View } from "react-native";
import { useComponentDefaultProps } from "@budgeinc/budge-ui-styling";
import { useValue } from "@budgeinc/budge-ui-hooks";
import { addMonths, addYears, subMonths, subYears, toDate } from "date-fns";
import { CalendarLevel } from "../General.types";
import { Stack, TStackProps } from "../../Stack";
import MonthLevel, { TMonthLevelSettings } from "../MonthLevel/MonthLevel";
import { CALENDAR_PROVIDER_DEFAULT_SETTINGS, CalendarProvider, TCalendarProviderSettings } from "../CalendarProvider";
import { useStyles } from "./Calendar.styles";
import { clampLevel } from "./clampLevel/clampLevel";
import YearLevel, { TYearLevelSettings } from "../YearLevel/YearLevel";
import DecadeLevel, { TDecadeLevelSettings } from "../DecadeLevel/DecadeLevel";

export interface TCalendarSettings
  extends Omit<TDecadeLevelSettings, "onNext" | "onPrevious">,
    Omit<TMonthLevelSettings, "onNext" | "onPrevious">,
    Omit<TYearLevelSettings, "onNext" | "onPrevious">,
    TCalendarProviderSettings {
  level?: CalendarLevel;
  defaultLevel?: CalendarLevel;
  onLevelChange?(level: CalendarLevel): void;
  onYearSelect?(date: Date): void;
  onMonthSelect?(date: Date): void;
  onDateChange?(date: Date): void;
  onNextDecade?(date: Date): void;
  onPreviousDecade?(date: Date): void;
  onNextYear?(date: Date): void;
  onPreviousYear?(date: Date): void;
  onNextMonth?(date: Date): void;
  onPreviousMonth?(date: Date): void;
  maxLevel?: CalendarLevel;
  minLevel?: CalendarLevel;
}

export type TCalendarProps = TStackProps &
  TCalendarSettings & {
    date?: Date;
    defaultDate?: Date;
  };

const Calendar = forwardRef<View, TCalendarProps>((props, ref) => {
  const {
    date,
    defaultDate,
    // Calendar Settings
    level,
    defaultLevel,
    onDateChange,
    onLevelChange,
    onNextMonth,
    onPreviousMonth,
    onNextYear,
    onPreviousYear,
    onNextDecade,
    onPreviousDecade,
    onMonthSelect,
    onYearSelect,
    onTodayPress,
    getDayControlProps,
    getMonthControlProps,
    getYearControlProps,
    getDecadeLevelHeaderTitle,
    getMonthLevelHeaderTitle,
    getYearLevelHeaderTitle,
    minLevel = "month",
    maxLevel = "decade",
    // Calendar Provider Settings
    locale,
    firstDayOfWeek,
    weekendDays,
    size,
    minDate,
    maxDate,
    showToday,
    ...others
  } = useComponentDefaultProps("Calendar", { ...CALENDAR_PROVIDER_DEFAULT_SETTINGS }, props);
  const { maw } = useStyles({ size });

  const [_level, setLevel] = useValue({
    value: level ? clampLevel(level, minLevel, maxLevel) : undefined,
    defaultValue: defaultLevel ? clampLevel(defaultLevel, minLevel, maxLevel) : undefined,
    finalValue: clampLevel(undefined, minLevel, maxLevel),
    onChange: onLevelChange,
  });

  const [_date, setDate] = useValue({
    value: date,
    defaultValue: defaultDate,
    finalValue: null,
    onChange: onDateChange,
  });

  const currentDate = _date || new Date();

  const handleNextMonth = () => {
    const nextDate = toDate(addMonths(currentDate, 1));
    onNextMonth?.(nextDate);
    setDate(nextDate);
  };

  const handlePreviousMonth = () => {
    const nextDate = toDate(subMonths(currentDate, 1));
    onPreviousMonth?.(nextDate);
    setDate(nextDate);
  };

  const handleNextYear = () => {
    const nextDate = toDate(addYears(currentDate, 1));
    onNextYear?.(nextDate);
    setDate(nextDate);
  };

  const handlePreviousYear = () => {
    const nextDate = toDate(subYears(currentDate, 1));
    onPreviousYear?.(nextDate);
    setDate(nextDate);
  };

  const handleNextDecade = () => {
    const nextDate = toDate(addYears(currentDate, 10));
    onNextDecade?.(nextDate);
    setDate(nextDate);
  };

  const handlePreviousDecade = () => {
    const nextDate = toDate(subYears(currentDate, 10));
    onPreviousDecade?.(nextDate);
    setDate(nextDate);
  };

  const memoedContextValue = useMemo(
    () => ({ locale, firstDayOfWeek, weekendDays, size, minDate, maxDate, showToday }),
    [locale, firstDayOfWeek, weekendDays, size, minDate, maxDate, showToday]
  );

  return (
    <CalendarProvider settings={memoedContextValue}>
      <Stack maw={maw} spacing={0} {...others}>
        {_level === "month" && (
          <MonthLevel
            month={currentDate}
            onNext={handleNextMonth}
            onPrevious={handlePreviousMonth}
            onTodayPress={onTodayPress}
            onLevelPress={() => setLevel("year")}
            hasNextLevel={maxLevel !== "month"}
            getDayControlProps={getDayControlProps}
            getMonthLevelHeaderTitle={getMonthLevelHeaderTitle}
          />
        )}
        {_level === "year" && (
          <YearLevel
            year={currentDate}
            onNext={handleNextYear}
            onPrevious={handlePreviousYear}
            onLevelPress={() => setLevel("decade")}
            onSelectMonth={month => {
              setDate(month);
              setLevel(clampLevel("month", minLevel, maxLevel));
              onMonthSelect?.(month);
            }}
            hasNextLevel={maxLevel !== "month" && maxLevel !== "year"}
            getYearLevelHeaderTitle={getYearLevelHeaderTitle}
            getMonthControlProps={getMonthControlProps}
          />
        )}
        {_level === "decade" && (
          <DecadeLevel
            decade={currentDate}
            onNext={handleNextDecade}
            onPrevious={handlePreviousDecade}
            onSelectYear={year => {
              setDate(year);
              setLevel(clampLevel("year", minLevel, maxLevel));
              onYearSelect?.(year);
            }}
            getDecadeLevelHeaderTitle={getDecadeLevelHeaderTitle}
            getYearControlProps={getYearControlProps}
          />
        )}
      </Stack>
    </CalendarProvider>
  );
});

export default Calendar;
