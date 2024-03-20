import { getYearData } from "../../YearsList/getYearData";

export const getDecadeRange = (decade: Date) => {
  const years = getYearData(decade);
  return [years[0], years[9]] as const;
};
