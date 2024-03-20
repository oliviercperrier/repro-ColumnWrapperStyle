import React, { useMemo } from "react";
import ReactDOM from "react-dom";
import { Animated, Platform, StyleSheet } from "react-native";
import { FocusScope } from "@react-native-aria/focus";
import { useCloseOnOutsideClick, useKeyboardDismissable, useAnimatedStyles } from "../hooks";
import type { IOverlayProps } from "../types";
import { OverlayContext } from "./context";

export const Overlay = (props: IOverlayProps): any => {
  const {
    isOpen,
    children,
    autoFocus = true,
    restoreFocus = true,
    trapFocus = true,
    onClose,
    isKeyboardDismissable = true,
    shouldCloseOnOutsideClick = true,
    focusable = true,
    animated = true,
    mode = "single",
    animationEntryDuration,
    animationExitDuration,
    overlayRef,
    triggerRef,
  } = props;

  const { styles, isExited } = useAnimatedStyles({
    animated,
    animationEntryDuration,
    animationExitDuration,
    isOpen,
  });

  useKeyboardDismissable({
    enabled: isKeyboardDismissable,
    onClose: onClose || (() => {}),
  });

  useCloseOnOutsideClick({
    refs: [overlayRef, triggerRef],
    enabled: shouldCloseOnOutsideClick,
    onClose: onClose || (() => {}),
  });

  const memomedContextValue = useMemo(() => ({ onClose }), [onClose]);

  if (!isOpen && isExited) {
    return null;
  }

  const content = (
    <OverlayContext.Provider value={memomedContextValue}>
      <Animated.View style={[StyleSheet.absoluteFill, styles]} pointerEvents="box-none">
        {focusable && mode === "single" ? (
          <FocusScope contain={trapFocus} autoFocus={autoFocus} restoreFocus={restoreFocus}>
            {children}
          </FocusScope>
        ) : (
          children
        )}
      </Animated.View>
    </OverlayContext.Provider>
  );

  return ReactDOM.createPortal(content, document.body);
};
