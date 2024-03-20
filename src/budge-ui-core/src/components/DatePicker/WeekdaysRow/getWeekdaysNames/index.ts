import React from "react";
import { setDay, format, addDays, toDate } from "date-fns";
import type { DayOfWeek } from "../../General.types";

interface GetWeekdaysNamesInput {
  dayFormat?: string | ((date: Date) => React.ReactNode);
  firstDayOfWeek?: DayOfWeek;
}

export function getWeekdayNames({ dayFormat = "EEEEEE", firstDayOfWeek = 1 }: GetWeekdaysNamesInput) {
  const baseDate = setDay(new Date(), firstDayOfWeek);
  const labels: Array<string | React.ReactNode> = [];

  for (let i = 0; i < 7; i += 1) {
    if (typeof dayFormat === "string") {
      labels.push(format(addDays(baseDate, i), dayFormat));
    } else {
      labels.push(dayFormat(toDate(addDays(baseDate, i))));
    }
  }

  return labels;
}
