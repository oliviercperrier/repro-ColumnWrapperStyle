export const getYearData = (decade: Date) => {
  const year = decade.getFullYear();
  const rounded = year - (year % 10);

  let currentYearIndex = 0;
  const results: Date[] = [];

  for (let i = 0; i < 10; i += 1) {
    results.push(new Date(rounded + currentYearIndex, 0));
    currentYearIndex += 1;
  }

  return results;
};
