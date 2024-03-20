import { useEffect } from "react";

export function useWindowEvent<K extends keyof DocumentEventMap>(
  type: K,
  listener: (this: Document, ev: DocumentEventMap[K]) => void,
  options?: boolean | AddEventListenerOptions
) {
  useEffect(() => {
    window.document.addEventListener(type, listener, options);
    return () => window.document.removeEventListener(type, listener, options);
  }, [type, listener]);
}
