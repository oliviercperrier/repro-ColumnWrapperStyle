import { isEmpty } from "..";

// Tests that passing a non-empty string returns false
it("test_non_empty_string", () => {
  expect(isEmpty("hello")).toBe(false);
});

// Tests that passing a non-empty array returns false
it("test_non_empty_array", () => {
  expect(isEmpty([1, 2, 3])).toBe(false);
});

// Tests that passing a non-empty object returns false
it("test_non_empty_object", () => {
  expect(isEmpty({ a: 1 })).toBe(false);
});

// Tests that passing an empty value returns true
it("test_empty_value", () => {
  expect(isEmpty(null)).toBe(true);
  expect(isEmpty(undefined)).toBe(true);
  expect(isEmpty("")).toBe(true);
  expect(isEmpty([])).toBe(true);
  expect(isEmpty({})).toBe(true);
});

// Tests that passing a date object with an invalid date returns true
it("test_invalid_date", () => {
  const invalidDate = new Date("invalid");
  expect(isEmpty(invalidDate)).toBe(true);
});

// Tests that passing null or undefined returns true
it("test_null_or_undefined", () => {
  expect(isEmpty(null)).toBe(true);
  expect(isEmpty(undefined)).toBe(true);
});
