import { formatMoney } from "../money";

describe("Testing money.ts", () => {
  test("Format amountCents default value", () => {
    expect(
      formatMoney({
        amountCents: undefined,
        defaultValue: 10000,
      })
    ).toBe("$100");
  });

  test("Format amountCents: 12000000", () => {
    expect(
      formatMoney({
        amountCents: 12000000,
      })
    ).toBe("$120,000");
  });

  test("Format amountCents with decimals: 10040", () => {
    expect(
      formatMoney({
        amountCents: 10040,
      })
    ).toBe("$100.40");
  });

  test("Format amountCents with max fraction digits to 0: 10040", () => {
    expect(
      formatMoney({
        amountCents: 10040,
        minFractionDigits: 0,
        maxFractionDigits: 0,
      })
    ).toBe("$100");
  });
});
