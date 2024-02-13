import { StyleSheet, Dimensions, useWindowDimensions } from "react-native";
import React, { ReactNode, forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from "react";
import { AnimatedBox } from "../Box";
import { Easing, runOnJS, useAnimatedStyle, useSharedValue, withSpring, withTiming } from "react-native-reanimated";
import { Pressable } from "../Pressable";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BPortal } from "../Portal";
import ModalBase from "../Modal/Modal.Base";

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
    const animatedMountedRef = useRef(false);
    const [isOpened, setOpened] = useState(false);
    const [isRendered, setRendered] = useState(false);

    const overlaySv = useSharedValue(false);
    const overlayAnimatedStyle = useAnimatedStyle(() => ({
      opacity: withTiming(
        overlaySv.value ? 1 : 0,
        {
          easing: Easing.linear,
        },
        finished => {
          runOnJS(() => {
            if (!animatedMountedRef.current) {
              animatedMountedRef.current = true;
              return;
            }

            if (!finished) return;

            if (!isOpened) {
              onClosed?.();
              setRendered(false);
            }
          })();
        }
      ),
    }));

    const sheetAnimatedStyle = useAnimatedStyle(() => ({
      bottom: withSpring(
        overlaySv.value ? 0 : -1 * Dimensions.get("window").height,
        {
          damping: 100,
          stiffness: 300,
        },
        finished => {
          runOnJS(() => {
            if (!animatedMountedRef.current) {
              animatedMountedRef.current = true;
              return;
            }

            if (!finished) return;

            if (isOpened) {
              onOpened?.();
            }
          })();
        }
      ),
    }));

    const handleOpen = useCallback((o: boolean) => {
      if (o) {
        setRendered(true);
        overlaySv.value = true;
      }

      setOpened(o);
    }, []);

    const handleClose = useCallback(() => {
      onClose?.();
      setOpened(false);
      overlaySv.value = false;
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
    if (wDim.width > 768) {
      return (
        <ModalBase opened={isOpened} onClose={handleClose}>
          {typeof children === "function" ? children({ hide: handleClose }) : children}
        </ModalBase>
      );
    }

    return (
      <AnimatedBox
        className="bg-dark-9/40"
        position="absolute"
        left={0}
        right={0}
        bottom={0}
        top={0}
        style={overlayAnimatedStyle}
      >
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
  return (
    <BPortal hostName="modals-provider">
      <Sheet ref={ref} {...props} />
    </BPortal>
  );
});

export default SheetWrapper;
