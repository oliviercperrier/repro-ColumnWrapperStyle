import React, { forwardRef } from "react";
import { View } from "react-native";
import { useComponentDefaultProps } from "@budgeinc/budge-ui-styling";
import { endOfYear, format, isAfter, isBefore, startOfYear } from "date-fns";
import MonthsList, { TMonthsListSettings } from "../MonthsList/MonthsList";
import CalendarHeader, { TCalendarHeaderSettings } from "../CalendarHeader/CalendarHeader";
import { Stack } from "../../Stack";
import { useCalendarContext } from "../CalendarProvider";
import { GetHeaderTitleFunc } from "../General.types";

export interface TYearLevelSettings extends TCalendarHeaderSettings, TMonthsListSettings {
  getYearLevelHeaderTitle?: GetHeaderTitleFunc;
}

export type TYearLevelProps = TYearLevelSettings & {
  year: Date;
};

const YearLevel = forwardRef<View, TYearLevelProps>((props, ref) => {
  const { minDate, maxDate } = useCalendarContext();
  const {
    // CalendarHeader Settings
    onNext,
    onPrevious,
    onLevelPress,
    hasNextLevel,

    // Year Settings
    year,
    getYearLevelHeaderTitle,

    // MonthList Settings
    onSelectMonth,
    getMonthControlProps,
  } = useComponentDefaultProps("YearLevel", {}, props);

  const isPreviousDisabled = minDate ? !isAfter(startOfYear(year), minDate) : false;
  const isNextDisabled = maxDate ? !isBefore(endOfYear(year), maxDate) : false;
  const defaultTitle = format(year, "yyyy");
  const title = getYearLevelHeaderTitle?.(year, defaultTitle) || defaultTitle;

  return (
    <Stack ref={ref} spacing="sm">
      <CalendarHeader
        title={title}
        onNext={onNext}
        onPrevious={onPrevious}
        onLevelPress={onLevelPress}
        hasNextLevel={hasNextLevel}
        previousDisabled={isPreviousDisabled}
        nextDisaled={isNextDisabled}
      />
      <MonthsList year={year} onSelectMonth={onSelectMonth} getMonthControlProps={getMonthControlProps} />
    </Stack>
  );
});

export default YearLevel;
