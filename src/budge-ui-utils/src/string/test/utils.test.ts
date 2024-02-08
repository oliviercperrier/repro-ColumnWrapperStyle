import {
  capitalize,
  capitalizeEachWords,
  isNotUUID,
  isUUID,
  obfuscate,
  removeAllSpecialCharacters,
  replaceAll,
  unCapitalize,
} from "../utils";

describe("Testing string utils.ts", () => {
  test("Capitalize string", () => {
    expect(capitalize("olivier")).toBe("Olivier");
  });

  test("Un Capitalize string", () => {
    expect(unCapitalize("Olivier Perrier")).toBe("olivier Perrier");
  });

  test("Capitalize each words in a string", () => {
    expect(capitalizeEachWords("olivier is coding")).toBe("Olivier Is Coding");
  });

  test("Obfuscated string", () => {
    expect(
      obfuscate({
        value: "4242424242424242",
        nbCharToObfuscate: 8,
        symbol: "*",
      })
    ).toBe("********42424242");
  });

  test("Is UUID", () => {
    expect(isUUID("b285e218-5be4-412b-869a-4f3f6e9c80a1")).toBe(true);
  });

  test("Is UUID false", () => {
    expect(isUUID("b28000")).toBe(false);
  });

  test("Is not UUID", () => {
    expect(isNotUUID("b28000")).toBe(true);
  });

  test("Replace All in string", () => {
    expect(replaceAll("oli_vi_er", "_", "")).toBe("olivier");
  });

  test("Remove All special characters in string", () => {
    expect(removeAllSpecialCharacters("$12$3ab$d^^&")).toBe("123abd");
  });
});
