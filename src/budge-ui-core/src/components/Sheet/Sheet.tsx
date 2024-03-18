import { StyleSheet, Dimensions, useWindowDimensions } from "react-native";
import React, { ReactNode, forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from "react";
import { AnimatedBox } from "../Box";
import { Easing, runOnJS, useAnimatedStyle, useSharedValue, withSpring, withTiming } from "react-native-reanimated";
import { Pressable } from "../Pressable";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BPortal } from "../Portal";
import { Modal } from "../Modal";
import { useBudgeTheme } from "@budgeinc/budge-ui-styling";

export interface SheetRef {
  show: () => void;
  hide: () => void;
  opened: boolean;
}

export type TSheetProps = {
  opened?: boolean;
  onClose?: () => void;
  onClosed?: () => void;
  onOpened?: () => void;
  children: (({ hide }: { hide: () => void }) => JSX.Element) | JSX.Element | ReactNode;
  closeOnOverlayTap?: boolean;
  responsive?: boolean;
};

const Sheet = forwardRef<SheetRef, TSheetProps>(
  ({ responsive = true, opened = false, closeOnOverlayTap = true, onClose, onClosed, onOpened, children }, ref) => {
    const wDim = useWindowDimensions();
    const { top } = useSafeAreaInsets();
    const overlayAnimationFlagRef = useRef(false);
    const modalAnimationFlagRef = useRef(false);
    const [isOpened, setOpened] = useState(false);
    const [isRendered, setRendered] = useState(false);

    const openSharedValue = useSharedValue(false);

    const onOverlayFinished = (finished: boolean | undefined) => {
      if (!overlayAnimationFlagRef.current) {
        overlayAnimationFlagRef.current = true;
        return;
      }

      if (!finished) return;

      if (!isOpened) {
        onClosed?.();
        setRendered(false);
        overlayAnimationFlagRef.current = false;
      }
    };

    const overlayAnimatedStyle = useAnimatedStyle(
      () => ({
        opacity: withTiming(
          openSharedValue.value ? 1 : 0,
          {
            duration: 250,
          },
          finished => runOnJS(onOverlayFinished)(finished)
        ),
      }),
      [onOverlayFinished]
    );

    const onSheetFinished = (finished: boolean | undefined) => {
      if (!modalAnimationFlagRef.current) {
        modalAnimationFlagRef.current = true;
        return;
      }

      if (!finished) return;

      if (isOpened) {
        onOpened?.();
        modalAnimationFlagRef.current = false;
      }
    };

    const sheetAnimatedStyle = useAnimatedStyle(() => ({
      bottom: withSpring(
        openSharedValue.value ? 0 : -1 * wDim.height,
        {
          damping: 100,
          stiffness: 300,
        },
        finished => runOnJS(onSheetFinished)(finished)
      ),
    }));

    const handleOpen = useCallback((o: boolean) => {
      if (o) {
        setRendered(true);
        openSharedValue.value = true;
      }

      setOpened(o);
    }, []);

    const handleClose = useCallback(() => {
      onClose?.();
      setOpened(false);
      openSharedValue.value = false;
    }, [onClose]);

    useEffect(() => handleOpen(opened), [opened]);

    useImperativeHandle(
      ref,
      () => ({
        opened: isOpened,
        show: () => handleOpen(true),
        hide: handleClose,
      }),
      [isOpened]
    );

    if (!isRendered) return null;

    // TODO change with theme breakpoint -> md
    if (responsive && wDim.width > 768) {
      return (
        <Modal opened={isOpened} onClose={handleClose}>
          {typeof children === "function" ? children({ hide: handleClose }) : children}
        </Modal>
      );
    }

    return (
      <AnimatedBox className="bg-dark-9/40" style={[overlayAnimatedStyle, StyleSheet.absoluteFill]}>
        <Pressable style={StyleSheet.absoluteFill} noCursor onPress={closeOnOverlayTap ? handleClose : undefined} />
        <AnimatedBox
          position="absolute"
          left={0}
          right={0}
          bottom={0}
          bg="white"
          tlr="xl"
          trr="xl"
          mah={wDim.height - top}
          style={sheetAnimatedStyle}
        >
          {typeof children === "function" ? children({ hide: handleClose }) : children}
        </AnimatedBox>
      </AnimatedBox>
    );
  }
);

export const useSheet = () => {
  const ref = useRef<SheetRef>(null);

  return {
    ref,
    show: () => ref.current?.show(),
    hide: () => ref.current?.hide(),
  };
};

const SheetWrapper = forwardRef<SheetRef, TSheetProps>((props, ref) => {
  const theme = useBudgeTheme();

  return (
    <BPortal hostName={theme.portalProviderNames.modals}>
      <Sheet ref={ref} {...props} />
    </BPortal>
  );
});

export default SheetWrapper;
