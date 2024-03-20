import React, { forwardRef } from "react";
import { View } from "react-native";
import { useComponentDefaultProps } from "@budgeinc/budge-ui-styling";
import { format, isAfter, isBefore } from "date-fns";
import CalendarHeader, { TCalendarHeaderSettings } from "../CalendarHeader/CalendarHeader";
import YearsList, { TYearsListSettings } from "../YearsList/YearsList";
import { getDecadeRange } from "./getDecadeRange";
import { Stack } from "../../Stack";
import { useCalendarContext } from "../CalendarProvider";
import { GetHeaderTitleFunc } from "../General.types";

export interface TDecadeLevelSettings extends TCalendarHeaderSettings, TYearsListSettings {
  getDecadeLevelHeaderTitle?: GetHeaderTitleFunc;
}

export type TDecadeLevelProps = TDecadeLevelSettings & {
  decade: Date;
};

const formatDecade = (date: Date) => format(date, "yyyy");

const DecadeLevel = forwardRef<View, TDecadeLevelProps>((props, ref) => {
  const { minDate, maxDate } = useCalendarContext();
  const {
    // CalendarHeader Settings
    onNext,
    onPrevious,
    onLevelPress,

    // Decade Settings
    decade,

    // YearList Settings
    onSelectYear,
    getYearControlProps,
    getDecadeLevelHeaderTitle,
  } = useComponentDefaultProps("DecadeLevel", {}, props);

  const [startOfDecade, endOfDecade] = getDecadeRange(decade);

  const isPreviousDisabled = minDate ? !isAfter(startOfDecade, minDate) : false;
  const isNextDisabled = maxDate ? !isBefore(endOfDecade, maxDate) : false;

  const defaultTitle = `${formatDecade(startOfDecade)} - ${formatDecade(endOfDecade)}`;
  const title = getDecadeLevelHeaderTitle?.(decade, defaultTitle) || defaultTitle;

  return (
    <Stack ref={ref} spacing="sm">
      <CalendarHeader
        title={title}
        onNext={onNext}
        onPrevious={onPrevious}
        onLevelPress={onLevelPress}
        previousDisabled={isPreviousDisabled}
        nextDisaled={isNextDisabled}
      />
      <YearsList decade={decade} onSelectYear={onSelectYear} getYearControlProps={getYearControlProps} />
    </Stack>
  );
});

export default DecadeLevel;
