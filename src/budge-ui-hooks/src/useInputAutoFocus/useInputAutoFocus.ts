import { useRef, useEffect } from "react";
import { TextInput } from "react-native";

export const useInputAutoFocus = (activated: boolean = true) => {
  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    if (inputRef.current && activated) {
      inputRef.current.focus();
    }
  }, [activated, inputRef.current]);

  return inputRef;
};
