import { isBefore, isAfter, startOfYear, endOfYear } from "date-fns";

export const isYearDisabled = (year: Date, minDate: Date | undefined | null, maxDate: Date | undefined | null) => {
  if (!minDate && !maxDate) {
    return false;
  }

  if (minDate && isBefore(startOfYear(year), startOfYear(minDate))) {
    return true;
  }

  if (maxDate && isAfter(endOfYear(year), endOfYear(maxDate))) {
    return true;
  }

  return false;
};
