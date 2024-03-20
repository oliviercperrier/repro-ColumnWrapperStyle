import React, { forwardRef } from "react";
import { View } from "react-native";
import { useComponentDefaultProps } from "@budgeinc/budge-ui-styling";
import { endOfMonth, format, isAfter, isBefore, startOfMonth } from "date-fns";
import Month, { TMonthSettings } from "../Month/Month";
import CalendarHeader, { TCalendarHeaderSettings } from "../CalendarHeader/CalendarHeader";
import { Stack } from "../../Stack";
import { useCalendarContext } from "../CalendarProvider";
import { Divider } from "../../Divider";
import { GetHeaderTitleFunc } from "../General.types";
import { Button } from "../../Button";

export interface TMonthLevelSettings extends TCalendarHeaderSettings, TMonthSettings {
  onTodayPress?(): void;
  getMonthLevelHeaderTitle?: GetHeaderTitleFunc;
}

export type TMonthLevelProps = TMonthLevelSettings & {
  month: Date;
};

const MonthLevel = forwardRef<View, TMonthLevelProps>((props, ref) => {
  const { minDate, maxDate, showToday } = useCalendarContext();
  const {
    // CalendarHeader Settings
    onNext,
    onPrevious,
    onLevelPress,
    hasNextLevel,

    // Month Settings
    month,
    onTodayPress,
    getDayControlProps,
    getMonthLevelHeaderTitle,
  } = useComponentDefaultProps("MonthLevel", {}, props);

  const isPreviousDisabled = minDate ? !isAfter(startOfMonth(month), minDate) : false;
  const isNextDisabled = maxDate ? !isBefore(endOfMonth(month), maxDate) : false;

  const defaultTitle = format(month, "MMMM Y");
  const title = getMonthLevelHeaderTitle?.(month, defaultTitle) || defaultTitle;

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
      <Month month={month} getDayControlProps={getDayControlProps} />
      {showToday && (
        <>
          <Divider spacing={0} mt="xs" />
          <Button fullWidth variant="subtle" title="Today" color="primary" size="sm" onPress={onTodayPress} />
        </>
      )}
    </Stack>
  );
});

export default MonthLevel;
