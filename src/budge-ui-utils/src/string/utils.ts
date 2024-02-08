/**
 * Uppercase the first letter of a string
 */
export const capitalize = (str: string) => (str ? str.charAt(0).toUpperCase() + str.slice(1) : str);

/**
 * Lowercase the first letter of a string
 */
export const unCapitalize = (str: string) => (str ? str.charAt(0).toLowerCase() + str.slice(1) : str);

/**
 * Uppercase the first letter of each word in a string
 */
export const capitalizeEachWords = (str: string) =>
  str
    ? str
        .split(" ")
        .map(a => capitalize(a))
        .join(" ")
    : str;

/**
 * Obfuscate a part of a string
 *
 * @example
 * ```
 * obfuscate({
 *  value: "4242424242424242",
 *  nbCharToObfuscate: 8.
 *  symbol: "*"
 * });
 *
 * // Returns: ********42424242
 * ```
 *
 * @param num number
 * @returns string
 *
 */
export const obfuscate = ({ value, nbCharToObfuscate, symbol = "*" }: TObfuscateParams) => {
  if (value.length < nbCharToObfuscate) {
    throw new Error("Number of char to obfuscate must be smaller then the string length.");
  }

  let ubfuscateString = "";
  for (let i = 0; i < nbCharToObfuscate; i++) {
    ubfuscateString += symbol;
  }
  return value.replace(value.substring(0, nbCharToObfuscate), ubfuscateString);
};

export type TObfuscateParams = {
  value: string;
  nbCharToObfuscate: number;
  symbol?: string;
};

export const isUUID = (value: string) =>
  /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(value);

export const isNotUUID = (value: string) => !isUUID(value);

const escapeRegExp = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

export const replaceAll = (str: string, match: string, replacement: string) =>
  str.replace(new RegExp(escapeRegExp(match), "g"), () => replacement);

export const removeAllSpecialCharacters = (str: string) => str.replace(/[^\w\s]/gi, "");
