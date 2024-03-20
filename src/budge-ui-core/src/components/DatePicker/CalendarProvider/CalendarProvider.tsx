import React, { createContext, useMemo } from "react";
import { TSize } from "@budgeinc/budge-ui-styling";
import { DayOfWeek } from "../General.types";

export type TCalendarProviderValue = {
  locale: string;
  firstDayOfWeek: DayOfWeek;
  weekendDays: DayOfWeek[];
  size: TSize;
  minDate?: Date;
  maxDate?: Date;
  showToday?: boolean;
};

export type TCalendarProviderSettings = Partial<TCalendarProviderValue>;

export const CALENDAR_PROVIDER_DEFAULT_SETTINGS: TCalendarProviderValue = {
  locale: "en",
  firstDayOfWeek: 1,
  weekendDays: [0, 6],
  size: "sm",
  showToday: false,
};

export const CalendarProviderContext = createContext(CALENDAR_PROVIDER_DEFAULT_SETTINGS);

export type TCalendarProviderProps = {
  settings: TCalendarProviderSettings;
  children: React.ReactNode;
};

export const CalendarProvider = ({ settings, children }: TCalendarProviderProps) => {
  const memoedContextValue = useMemo(() => ({ ...CALENDAR_PROVIDER_DEFAULT_SETTINGS, ...settings }), [settings]);

  return <CalendarProviderContext.Provider value={memoedContextValue}>{children}</CalendarProviderContext.Provider>;
};
