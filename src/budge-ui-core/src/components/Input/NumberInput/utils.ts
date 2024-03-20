import { TInputOnKeyPress } from "../Input";

type TNumberInputOnKeyPress = (allowDecimal?: boolean) => TInputOnKeyPress;

export const onKeyPressNumberInput: TNumberInputOnKeyPress =
  (allowDecimal = true) =>
  (e, value): void => {
    const key = e.nativeEvent.key.toLowerCase();
    const regex = allowDecimal ? /^[0-9]*\.?[0-9]*$/ : /^[0-9]*?[0-9]*$/;

    if (
      (!regex.test(key) || (allowDecimal && key === "." && value?.includes(key))) &&
      !["backspace", "arrowleft", "arrowright", "backspace", "tab", "enter", "meta", "control", "v", "c"].includes(key)
    ) {
      e.preventDefault();
    }
  };
