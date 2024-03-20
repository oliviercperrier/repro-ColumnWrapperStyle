import React, { forwardRef } from "react";
import { useComponentDefaultProps } from "@budgeinc/budge-ui-styling";
import { View } from "react-native";
import { Stack } from "../../Stack";
import WeekdaysRow from "../WeekdaysRow";
import { getMonthDays } from "./getMonthDays";
import { useCalendarContext } from "../CalendarProvider";
import { Grid } from "../../Grid";
import Day, { TDaySettings } from "../Day/Day";

export type TMonthSettings = TDaySettings;

export type TMonthProps = TMonthSettings & {
  month: Date;
};

const Month = forwardRef<View, TMonthProps>((props, ref) => {
  const { firstDayOfWeek } = useCalendarContext();
  const { month, ...others } = useComponentDefaultProps("Month", {}, props);

  const monthDays = getMonthDays(month, firstDayOfWeek);

  return (
    <Stack ref={ref} spacing={0}>
      <WeekdaysRow />
      <Grid column={7} gutter={4}>
        {monthDays.map(date => (
          <Day key={`day-${date.toISOString()}`} date={date} month={month} {...others} />
        ))}
      </Grid>
    </Stack>
  );
});

export default Month;
