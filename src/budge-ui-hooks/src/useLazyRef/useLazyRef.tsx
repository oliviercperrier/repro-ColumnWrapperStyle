import React from "react";

export function useLazyRef<T>(callback: () => T) {
  const lazyRef = React.useRef<T | undefined>();

  if (lazyRef.current === undefined) {
    lazyRef.current = callback();
  }

  return lazyRef as React.MutableRefObject<T>;
}
