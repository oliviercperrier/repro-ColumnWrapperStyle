import { formatNumber } from "../number";

describe("Testing number.ts", () => {
  test("Format number: 120000", () => {
    expect(
      formatNumber({
        value: 120000,
      })
    ).toBe("120,000");
  });
  test("Format number default value", () => {
    expect(
      formatNumber({
        value: undefined,
        defaultValue: 10000,
      })
    ).toBe("10,000");
  });
});
