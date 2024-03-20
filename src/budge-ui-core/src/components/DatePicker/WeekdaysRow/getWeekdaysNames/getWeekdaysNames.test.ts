import { getWeekdayNames } from ".";

describe("test getWeekdayNames", () => {
  it("returns correct weekday names for given locale", () => {
    expect(getWeekdayNames({})).toStrictEqual(["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"]);
  });

  it("supports custom first day of week", () => {
    expect(getWeekdayNames({ firstDayOfWeek: 0 })).toStrictEqual(["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]);
  });
});
