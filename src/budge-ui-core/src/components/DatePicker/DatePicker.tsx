import { View } from "react-native";
import React, { forwardRef } from "react";
import { useComponentDefaultProps } from "@budgeinc/budge-ui-styling";
import { useValue } from "@budgeinc/budge-ui-hooks";
import { isSameDay } from "date-fns";
import { TMonthLevelSettings } from "./MonthLevel/MonthLevel";
import Calendar, { TCalendarProps } from "./Calendar/Calendar";

export type TDatePickerSettings = TMonthLevelSettings & {
  value?: Date;
  defaultValue?: Date;
  onChange?(date: Date): void;
};

export type TDatePickerProps = TCalendarProps & TDatePickerSettings;

const DatePicker = forwardRef<View, TDatePickerProps>((props, ref) => {
  const { value, defaultValue, onChange, getDayControlProps, onTodayPress, ...others } = useComponentDefaultProps(
    "DatePicker",
    {},
    props
  );

  const [_value, setValue] = useValue({
    value,
    defaultValue,
    finalValue: undefined,
    onChange,
  });

  return (
    <Calendar
      ref={ref}
      minLevel="month"
      getDayControlProps={(date, defaultTitle, isOutside, disabled) => {
        const extendedControlProps = getDayControlProps?.(date, defaultTitle, isOutside, disabled);

        return {
          ...extendedControlProps,
          onPress: e => {
            setValue(date);
            extendedControlProps?.onPress?.(e);
          },
          selected: value && isSameDay(date, value),
        };
      }}
      onTodayPress={() => {
        setValue(new Date());
        onTodayPress?.();
      }}
      {...others}
    />
  );
});

export default DatePicker;
