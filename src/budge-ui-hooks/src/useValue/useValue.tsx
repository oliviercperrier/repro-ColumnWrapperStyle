import { useState } from "react";

interface UseValueInput<T> {
  value?: T;
  defaultValue?: T;
  finalValue?: T;
  onChange?(value: T): void;
}

export const useValue = <T,>({
  value,
  defaultValue,
  finalValue,
  onChange = () => {},
}: UseValueInput<T>): [T, (value: T) => void, boolean] => {
  const [_value, setValue] = useState(defaultValue !== undefined ? defaultValue : finalValue);

  const handleChange = (val: T) => {
    setValue(val);
    onChange?.(val);
  };

  if (value !== undefined) {
    return [value as T, onChange, true];
  }

  return [_value as T, handleChange, false];
};
