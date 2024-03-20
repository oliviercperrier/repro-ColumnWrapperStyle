import { useCallback, useEffect, useRef } from "react";
import { AppState, Platform } from "react-native";
import storage from "../utils/storage";

export interface IdleTimerProps {
  active?: boolean;
  postExpiredMsg: () => void;
  /**
   * How much time in seconds the user needs to be inactive
   * before the warning modal is shown.
   */
  timeoutInSecondes?: number;
  onTimeout: () => void;
  onExpired: () => void;
  rootViewRef: React.MutableRefObject<any>;
  storageKey: string;
}

export const useIdleTimer = ({
  rootViewRef,
  postExpiredMsg,
  active = true,
  timeoutInSecondes = 30 * 60,
  onTimeout,
  onExpired,
  storageKey,
}: IdleTimerProps) => {
  const timerRef = useRef<any>(null);
  const intervalRef = useRef<any>(null);

  useEffect(() => {
    if (active) {
      tracker();
      startInterval();
    } else {
      cleanUp();
    }
  }, [active]);

  useEffect(
    () => () => {
      cleanUp();
    },
    []
  );

  const verifyExpiration = async () => {
    const expiredTime = parseInt((await storage.getItem(storageKey)) as any, 10);

    if (expiredTime > 0 && expiredTime < Date.now()) {
      postExpiredMsg();
      handleOnExpired();
      return true;
    }

    return false;
  };

  const startInterval = () => {
    updateExpiredTime();

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(async () => {
      const expiredTime = parseInt((await storage.getItem(storageKey)) as any, 10);

      if (expiredTime < Date.now()) {
        onTimeout();
      }
    }, 1000);
  };

  const handleOnExpired = () => {
    onExpired();
    cleanUp();
  };

  const updateExpiredTime = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(async () => {
      await storage.saveItem(storageKey, (Date.now() + timeoutInSecondes * 1000).toString());
    }, 200);
  }, []);

  const tracker = async () => {
    if (!active) {
      return;
    }

    const isExpired = await verifyExpiration();

    if (!isExpired && rootViewRef.current) {
      if (Platform.OS === "web") {
        rootViewRef.current.addEventListener("touchstart", updateExpiredTime);
        rootViewRef.current.addEventListener("mousemove", updateExpiredTime);
        rootViewRef.current.addEventListener("click", updateExpiredTime);
      }

      AppState.addEventListener("change", async state => {
        if (state === "active") {
          await verifyExpiration();
        }
      });
    }
  };

  const cleanUp = async () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    if (rootViewRef.current && Platform.OS === "web") {
      rootViewRef.current.removeEventListener("touchstart", updateExpiredTime);
      rootViewRef.current.removeEventListener("mousemove", updateExpiredTime);
      rootViewRef.current.removeEventListener("click", updateExpiredTime);
    }

    await storage.removeItem(storageKey);
  };

  return {
    start: startInterval,
    cleanUp,
  };
};
