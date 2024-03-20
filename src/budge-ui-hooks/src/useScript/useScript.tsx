/* eslint-disable no-multi-assign */
import { useState, useEffect } from "react";

/**
 * Helper hook to load scripts in the browser
 */

export interface UseScriptProps {
  src: HTMLScriptElement["src"] | null;
  onScriptLoaded?(): void;
  [key: string]: any;
}

type ScriptErrorState = ErrorEvent | null;

type ScriptStatusState = {
  loading: boolean;
  error: ScriptErrorState;
  scriptEl: HTMLScriptElement;
};

type ScriptStatusStateMap = {
  [key: string]: ScriptStatusState;
};

const isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined";

export const scriptsCache: ScriptStatusStateMap = {};

const checkifScriptAlreadyExist = (src: string): ScriptStatusState | undefined => {
  const existing: HTMLScriptElement | null = document.querySelector(`script[src="${src}"]`);

  if (existing) {
    return (scriptsCache[src] = {
      loading: false,
      error: null,
      scriptEl: existing,
    });
  }
  return undefined;
};

export const useScript = ({ src, onScriptLoaded, ...attributes }: UseScriptProps): [boolean, ScriptErrorState] => {
  let status: ScriptStatusState | undefined = src ? scriptsCache[src] : undefined;

  if (!status && src && isBrowser) {
    status = checkifScriptAlreadyExist(src);
  }

  const [loading, setLoading] = useState<boolean>(status ? status.loading : Boolean(src));
  const [error, setError] = useState<ScriptErrorState>(status ? status.error : null);
  const [scriptLoaded, setScriptLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (!isBrowser || !src || scriptLoaded || error) return;

    status = scriptsCache[src];

    if (!status) {
      status = checkifScriptAlreadyExist(src);
    }

    let scriptEl: HTMLScriptElement;

    if (status) {
      scriptEl = status.scriptEl;
    } else {
      scriptEl = document.createElement("script");
      scriptEl.src = src;

      Object.keys(attributes).forEach(key => {
        if ((scriptEl as any)[key] === undefined) {
          scriptEl.setAttribute(key, attributes[key]);
        } else {
          (scriptEl as any)[key] = attributes[key];
        }
      });

      status = scriptsCache[src] = {
        loading: true,
        error: null,
        scriptEl,
      };
    }

    const handleLoading = () => {
      if (status) {
        status.loading = false;
      }

      setScriptLoaded(true);
      setLoading(false);
      onScriptLoaded?.();
    };

    const handleError = (eventError: ErrorEvent) => {
      if (status) {
        status.error = eventError;
      }

      setError(eventError);
    };

    scriptEl.addEventListener("load", handleLoading, { passive: true });
    scriptEl.addEventListener("error", handleError, { passive: true });

    document.body.appendChild(scriptEl);

    return () => {
      scriptEl.removeEventListener("load", handleLoading);
      scriptEl.removeEventListener("error", handleError);
    };
  }, [src]);

  return [loading, error];
};
