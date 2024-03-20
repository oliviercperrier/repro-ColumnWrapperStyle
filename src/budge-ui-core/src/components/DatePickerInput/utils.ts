import { TInputOnKeyPress } from "../Input";

export const onKeyPress: TInputOnKeyPress = (e, localValue, setLocalValue): void => {
  const value = localValue || "";
  const key = e.nativeEvent.key.toLowerCase();

  let secondDigitMonthMask = /\d/;

  if (value.charAt(0) === "0") {
    secondDigitMonthMask = /[1-9]/;
  }
  if (value.charAt(0) === "1") {
    secondDigitMonthMask = /[012]/;
  }

  let secondDigitDayMask = /\d/;

  if (value.charAt(3) === "0") {
    secondDigitDayMask = /[1-9]/;
  }

  if (value.charAt(3) === "3") {
    secondDigitDayMask = /[01]/;
  }

  const len = value.length; // +1 for the current char

  if (/[0-9]/.test(key)) {
    if (len === 0 && !/[0-1]/.test(key)) {
      e.preventDefault();
    }

    if (len === 1 && !secondDigitMonthMask.test(key)) {
      e.preventDefault();
    }

    if ((len === 3 || len === 2) && !/[0-3]/.test(key)) {
      e.preventDefault();
    }

    if (len === 4 && !secondDigitDayMask.test(key)) {
      e.preventDefault();
    }

    // If they don't add the slash, do it for them...
    if (len === 2) {
      setLocalValue(`${localValue}/`);
    }

    // If they don't add the slash, do it for them...
    if (len === 5) {
      setLocalValue(`${localValue}/`);
    }
  } else if (key === "/" || key === "tab") {
    // If we're at a particular place, let the user type the slash. ex.: 05/16/1995
  } else if (!["backspace", "arrowleft", "arrowright"].includes(key)) {
    e.preventDefault();
  }
};
