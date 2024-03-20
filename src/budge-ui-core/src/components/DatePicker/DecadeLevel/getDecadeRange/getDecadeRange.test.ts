import { getDecadeRange } from ".";

describe("test getDecadeRange", () => {
  it("returns correct range based on given date", () => {
    expect(getDecadeRange(new Date(2022, 0))).toStrictEqual([new Date(2020, 0), new Date(2029, 0)]);
    expect(getDecadeRange(new Date(2011, 0))).toStrictEqual([new Date(2010, 0), new Date(2019, 0)]);
  });
});
