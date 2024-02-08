import { formatPercent } from "../percent";

describe("Testing percent.ts", () => {
  test("Format percent: 5.00", () => {
    expect(
      formatPercent({
        value: 5.0,
      })
    ).toBe("5.00%");
  });
  test("Format percent: 5.00 with 0 fraction digits", () => {
    expect(
      formatPercent({
        value: 5.0,
        minFractionDigits: 0,
      })
    ).toBe("5%");
  });
  test("Format percent default value", () => {
    expect(
      formatPercent({
        value: undefined,
        defaultValue: 5,
      })
    ).toBe("5.00%");
  });
});
