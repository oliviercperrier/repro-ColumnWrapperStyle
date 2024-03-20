import { View } from "react-native";
import React, { forwardRef } from "react";
import { useComponentDefaultProps } from "@budgeinc/budge-ui-styling";
import { format, isSameMonth } from "date-fns";
import PickerControl from "../PickerControl";
import { useCalendarContext } from "../CalendarProvider";
import { isBeforeMaxDate } from "../Month/isBeforeMaxDate";
import { isAfterMinDate } from "../Month/isAfterMinDate";
import { GetControlPropsFunc } from "../General.types";

export type TDaySettings = {
  getDayControlProps?: GetControlPropsFunc;
  excludeDate?(date: Date): boolean;
};

export type TDayProps = TDaySettings & {
  date: Date;
  month: Date;
};

const Day = forwardRef<View, TDayProps>((props, ref) => {
  const { size, minDate, maxDate } = useCalendarContext();
  const { date, month, excludeDate, getDayControlProps } = useComponentDefaultProps("Day", {}, props);

  const isInsideMonth = isSameMonth(month, date);
  const defaultTitle = format(date, "d");
  const isDisabled = excludeDate?.(date) || !isBeforeMaxDate(date, maxDate) || !isAfterMinDate(date, minDate);
  const dayControlProps = getDayControlProps?.(date, defaultTitle, !isInsideMonth, isDisabled);
  const selected = dayControlProps?.selected;
  const textColor = !isInsideMonth && !selected ? "gray.3" : selected ? "white" : undefined;

  return (
    <PickerControl
      ref={ref}
      f={1}
      size={size}
      disabled={isDisabled}
      title={defaultTitle}
      fullWidth
      titleTextProps={{
        color: textColor,
      }}
      {...dayControlProps}
    />
  );
});

export default Day;
