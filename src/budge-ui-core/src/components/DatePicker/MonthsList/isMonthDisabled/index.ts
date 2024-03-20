import { isBefore, isAfter, startOfMonth, endOfMonth } from "date-fns";

export const isMonthDisabled = (month: Date, minDate: Date | undefined | null, maxDate: Date | undefined | null) => {
  if (!minDate && !maxDate) {
    return false;
  }

  if (minDate && isBefore(startOfMonth(month), startOfMonth(minDate))) {
    return true;
  }

  if (maxDate && isAfter(endOfMonth(month), endOfMonth(maxDate))) {
    return true;
  }

  return false;
};
