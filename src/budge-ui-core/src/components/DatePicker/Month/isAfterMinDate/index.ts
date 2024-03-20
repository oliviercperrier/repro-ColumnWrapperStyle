import { isAfter, subDays } from "date-fns";

export const isAfterMinDate = (date: Date, minDate?: Date) =>
  minDate instanceof Date ? isAfter(date, subDays(minDate, 1)) : true;
