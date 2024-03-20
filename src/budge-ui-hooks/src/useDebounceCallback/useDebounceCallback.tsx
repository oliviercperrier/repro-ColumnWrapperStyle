import React, { useCallback, useRef } from "react";

export interface TUseDebounceCallbackProps {
  callback: (...args: any) => void;
  delay: number;
}

export const useDebounceCallback = ({ callback, delay }: TUseDebounceCallbackProps) => {
  const timeoutRef = useRef<any>();

  const debouncedCallback = useCallback(
    (...args: any) => {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay]
  );

  return debouncedCallback;
};
