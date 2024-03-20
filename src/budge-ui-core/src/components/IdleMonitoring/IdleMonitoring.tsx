import { IdleTimerProps, useIdleTimer } from "@budgeinc/budge-ui-hooks";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Platform } from "react-native";
import SessionExpiredConfirm from "./SessionExpiredConfirm";
import SessionExpiringSoonConfirm from "./SessionExpiringSoonConfirm";

export type TIdleMonitoringProps = Omit<IdleTimerProps, "onTimeout" | "onExpired" | "postExpiredMsg" | "storageKey"> & {
  onLogoutOut(): void;
  /**
   * How much time in seconds the user has to decide
   * to continue or not the current session.
   */
  sessionExpiringTimerDurationInSeconds?: number;
  storageKey?: string;
  onExpired(): void;
};

export const EXPIRED_MSG = "EXPIRED";
export const LOGOUT_MSG = "ON_LOGOUT_MSG";
export const KEEP_SIGNIN_MSG = "KEEP_SIGNIN_MSG";

const IdleMonitoring = ({
  rootViewRef,
  active,
  timeoutInSecondes,
  sessionExpiringTimerDurationInSeconds = 60,
  onLogoutOut,
  onExpired,
  storageKey = "_expiredTime",
}: TIdleMonitoringProps) => {
  const idleChannel = useRef<BroadcastChannel>();
  const [sessionExpiredOpen, setSessionExpiredOpen] = useState(false);
  const [sessionExpiringSoonOpen, setSessionExpiringSoonOpen] = useState(false);

  const handleClose = () => {
    setSessionExpiredOpen(false);
    setSessionExpiringSoonOpen(false);
    onLogoutOut();
  };

  const handleKeepSignin = () => {
    start();
    setSessionExpiringSoonOpen(false);
  };

  const handleOnExpired = () => {
    onExpired();
    setSessionExpiringSoonOpen(false);
    setSessionExpiredOpen(true);
  };

  const handleOnTimeout = () => setSessionExpiringSoonOpen(true);

  const handleOnTimerUp = () => {
    handleOnExpired();
    postExpiredMsg();
  };

  const handleKeepSigninClick = () => {
    handleKeepSignin();
    postKeepSigninMsg();
  };

  const handleOnLogoutClick = () => {
    cleanUp();
    postLogoutMsg();
  };

  useEffect(() => {
    /**
     * BroadcastChannel is only supported by web.
     * An alternative is not necessary for mobile because
     * you cant have the same app open twice
     */
    if (Platform.OS === "web" && typeof BroadcastChannel !== "undefined") {
      idleChannel.current = new BroadcastChannel(storageKey);
      idleChannel.current.onmessage = ({ data }) => {
        if (data === EXPIRED_MSG && active) {
          handleOnExpired();
          idleChannel.current?.close();
        } else if (data === LOGOUT_MSG) {
          handleClose();
        } else if (data === KEEP_SIGNIN_MSG) {
          handleKeepSignin();
        }
      };
    }
  }, [active, storageKey]);

  const postExpiredMsg = useCallback(() => {
    idleChannel.current?.postMessage(EXPIRED_MSG);
  }, [idleChannel.current]);

  const postLogoutMsg = useCallback(() => {
    idleChannel.current?.postMessage(LOGOUT_MSG);
  }, [idleChannel.current]);

  const postKeepSigninMsg = useCallback(() => {
    idleChannel.current?.postMessage(KEEP_SIGNIN_MSG);
  }, [idleChannel.current]);

  const { start, cleanUp } = useIdleTimer({
    active,
    storageKey,
    rootViewRef,
    timeoutInSecondes,
    postExpiredMsg,
    onTimeout: handleOnTimeout,
    onExpired: handleOnExpired,
  });

  return (
    <>
      {sessionExpiringSoonOpen && (
        <SessionExpiringSoonConfirm
          durationInSecondes={sessionExpiringTimerDurationInSeconds}
          opened={sessionExpiringSoonOpen}
          onTimerUp={handleOnTimerUp}
          onConfirm={handleKeepSigninClick}
          onCancel={handleOnLogoutClick}
        />
      )}
      {sessionExpiredOpen && (
        <SessionExpiredConfirm opened={sessionExpiredOpen} onCancel={handleClose} onConfirm={handleClose} />
      )}
    </>
  );
};

export default IdleMonitoring;
