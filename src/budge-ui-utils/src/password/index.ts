import * as zxcvbnCommonPackage from "@zxcvbn-ts/language-common";
import * as zxcvbnEnPackage from "@zxcvbn-ts/language-en";
import zxcvbn from "zxcvbn";

const wordsDict = [
  ...zxcvbnCommonPackage.dictionary.diceware,
  ...zxcvbnCommonPackage.dictionary.passwords,
  ...zxcvbnEnPackage.dictionary.commonWords,
  ...zxcvbnEnPackage.dictionary.firstnames,
  ...zxcvbnEnPackage.dictionary.lastnames,
  ...zxcvbnEnPackage.dictionary.wikipedia,
];

export type PasswordStrength = {
  score: 0 | 1 | 2 | 3 | 4;
  warning: string | null;
  suggestions: string[];
};

// asdjkfnajkdsbfhsdbfy7fqre635rf23yvehj!@!@!@!@!@!@

export const getPasswordStrength = (password: string): PasswordStrength => {
  // https://zxcvbn-ts.github.io/zxcvbn/guide/getting-started/#output
  // 0 # too guessable: risky password. (guesses < 10^3)
  // 1 # very guessable: protection from throttled online attacks. (guesses < 10^6)
  // 2 # somewhat guessable: protection from unthrottled online attacks. (guesses < 10^8)
  // 3 # safely unguessable: moderate protection from offline slow-hash scenario. (guesses < 10^10)
  // 4 # very unguessable: strong protection from offline slow-hash scenario. (guesses >= 10^10)
  const result = zxcvbn(password, wordsDict);

  return {
    score: result.score,
    warning: result.feedback.warning,
    suggestions: result.feedback.suggestions,
  };
};
