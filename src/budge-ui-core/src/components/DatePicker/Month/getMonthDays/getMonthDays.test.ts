import { getMonthDays } from ".";

describe("test getMonthsDays", () => {
  it("returns all month days for given date", () => {
    const monthDays = getMonthDays(new Date(2021, 1, 2));
    expect(monthDays).toHaveLength(28);

    expect(monthDays[1]).toStrictEqual(new Date(2021, 1, 2));
    expect(monthDays[2]).toStrictEqual(new Date(2021, 1, 3));
    expect(monthDays[7]).toStrictEqual(new Date(2021, 1, 8));
    expect(monthDays[14]).toStrictEqual(new Date(2021, 1, 15));
    expect(monthDays[monthDays.length - 1]).toStrictEqual(new Date(2021, 2, 0));
  });

  it("returns all month days for given date, first day of week - sunday", () => {
    const monthDays = getMonthDays(new Date(2021, 1, 2), 0);
    expect(monthDays).toHaveLength(35);
    expect(monthDays[2]).toStrictEqual(new Date(2021, 1, 2));
    expect(monthDays[3]).toStrictEqual(new Date(2021, 1, 3));
    expect(monthDays[8]).toStrictEqual(new Date(2021, 1, 8));
    expect(monthDays[15]).toStrictEqual(new Date(2021, 1, 15));
    expect(monthDays[28]).toStrictEqual(new Date(2021, 1, 28));
  });

  it("returns outside days for given month", () => {
    // April 2021 has outside days in the beginning and end of month
    const monthDays = getMonthDays(new Date(2021, 3, 2));
    expect(monthDays).toHaveLength(35);
    expect(monthDays[0]).toStrictEqual(new Date(2021, 2, 29));
    expect(monthDays[1]).toStrictEqual(new Date(2021, 2, 30));
    expect(monthDays[monthDays.length - 1]).toStrictEqual(new Date(2021, 4, 2));
  });

  it("returns outside days for given month, first day of the week - sunday", () => {
    const monthDays = getMonthDays(new Date(2021, 3, 2), 0);
    expect(monthDays).toHaveLength(35);
    expect(monthDays[0]).toStrictEqual(new Date(2021, 2, 28));
    expect(monthDays[1]).toStrictEqual(new Date(2021, 2, 29));
    expect(monthDays[monthDays.length - 1]).toStrictEqual(new Date(2021, 4, 1));
  });
});
