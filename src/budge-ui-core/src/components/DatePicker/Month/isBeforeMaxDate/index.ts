import { addDays, isBefore } from "date-fns";

export const isBeforeMaxDate = (date: Date, maxDate?: Date) =>
  maxDate instanceof Date ? isBefore(date, addDays(maxDate, 1)) : true;
