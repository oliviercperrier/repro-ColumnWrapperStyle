import React from "react";
import { getWeekdayNames } from "./getWeekdaysNames";
import { useCalendarContext } from "../CalendarProvider";
import PickerControl from "../PickerControl";
import { Stack } from "../../Stack";

const WeekdaysRow = () => {
  const { firstDayOfWeek, size } = useCalendarContext();

  const weekdays = getWeekdayNames({
    dayFormat: "EEEEEE",
    firstDayOfWeek,
  });

  return (
    <Stack.Horizontal spacing={0}>
      {weekdays.map((weekday, index) => (
        <PickerControl
          key={index}
          title={weekday as string}
          f={1}
          size={size}
          clickable={false}
          onPress={undefined}
          withDisabledOpacity={false}
          noCursor
          titleTextProps={{
            color: "gray.6",
          }}
        />
      ))}
    </Stack.Horizontal>
  );
};

export default WeekdaysRow;
