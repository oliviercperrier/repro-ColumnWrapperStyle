import { DEFAULT_TIMEZONE } from "../../constants";
import { formatDateISO, intlFormatDate } from "../date";

describe("Testing date.ts", () => {
  test("Format simple date without time", () => {
    expect(
      intlFormatDate({
        value: "2022-05-16",
        timeZone: DEFAULT_TIMEZONE,
      })
    ).toBe("May 16, 2022");
  });

  test("Format simple date month short", () => {
    expect(
      intlFormatDate({
        value: "2022-09-16",
        timeZone: DEFAULT_TIMEZONE,
        monthFormat: "short",
      })
    ).toBe("Sep 16, 2022");
  });

  test("Format date with time", () => {
    expect(
      (() => {
        const result = intlFormatDate({
          value: "2022-08-30T15:07:45.090Z",
          timeZone: DEFAULT_TIMEZONE,
          showTime: true,
        });

        return result === "August 30, 2022, 15:07" || result === "August 30, 2022 at 15:07";
      })()
    ).toBe(true);
  });

  test("Format date to iso string", () => {
    expect((() => formatDateISO("2022-08-30"))()).toBe("2022-08-30T00:00:00.000Z");
  });

  test("Format date to iso string without time", () => {
    expect((() => formatDateISO("2022-08-30", { withoutTime: true }))()).toBe("2022-08-30");
  });
});
