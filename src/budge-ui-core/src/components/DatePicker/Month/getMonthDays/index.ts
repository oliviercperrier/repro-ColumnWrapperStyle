import { endOfWeek, startOfWeek } from "date-fns";
import { DayOfWeek } from "../../General.types";

export const getMonthDays = (date: Date, firstDayOfWeek: DayOfWeek = 1): Date[] => {
  const currentMonth = date.getMonth();
  const startOfMonth = new Date(date.getFullYear(), currentMonth, 1);
  const endOfMonth = new Date(date.getFullYear(), currentMonth + 1, 0);
  const endDate = endOfWeek(endOfMonth, { weekStartsOn: firstDayOfWeek });
  const startDate = startOfWeek(startOfMonth, { weekStartsOn: firstDayOfWeek });
  const days: Date[] = [];

  while (startDate <= endDate) {
    days.push(new Date(startDate));
    startDate.setDate(startDate.getDate() + 1);
  }

  return days;
};
