import React, { useEffect, useState } from "react";

export type TUseDebounceProps = {
  value: any;
  delay: number;
};

export const useDebounce = ({ value, delay }: TUseDebounceProps) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};