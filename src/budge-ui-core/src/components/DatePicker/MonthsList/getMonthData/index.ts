import { addMonths, startOfYear, toDate } from "date-fns";

export const getMonthsData = (year: Date) => {
  const startOfYearDate = toDate(startOfYear(year));

  const results: Date[] = [];
  let currentMonthIndex = 0;

  for (let i = 0; i < 12; i += 1) {
    results.push(toDate(addMonths(startOfYearDate, currentMonthIndex)));
    currentMonthIndex += 1;
  }

  return results;
};
