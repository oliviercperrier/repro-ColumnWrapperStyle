import { StyleSheet, View, Platform } from "react-native";
import React, { PropsWithChildren, forwardRef, useCallback, useEffect, useRef, useState } from "react";
import { AnimatedBox, Box } from "../Box";
import {
  Easing,
  SlideInDown,
  SlideInUp,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { Pressable } from "../Pressable";
import { TModalBaseProps } from "./Modal.types";
import { useWindowEvent } from "@budgeinc/budge-ui-hooks";
import { AnimatedScrollView } from "../ScrollView";
import { modalBaseVariant } from "./Modal.variants";

const ModalBase = forwardRef<View, PropsWithChildren<TModalBaseProps>>(
  (
    {
      opened = false,
      size = 500,
      closeOnEscape = true,
      closeOnOverlayTap = true,
      onClose,
      onClosed,
      onOpened,
      children,
    },
    ref
  ) => {
    const overlayAnimatedMountedRef = useRef(false);
    const modalAnimatedMountedRef = useRef(false);
    const [isOpened, setOpened] = useState(false);
    const [isRendered, setRendered] = useState(false);

    const variantStyles = modalBaseVariant();

    if (Platform.OS === "web") {
      useWindowEvent("keydown", event => {
        if (event.key === "Escape" && closeOnEscape && isRendered) {
          onClose?.();
        }
      });
    }

    const overlaySv = useSharedValue(false);

    const overlayAnimatedStyle = useAnimatedStyle(() => ({
      opacity: withTiming(
        overlaySv.value ? 1 : 0,
        {
          duration: 250,
        },
        finished => {
          runOnJS(() => {
            if (!overlayAnimatedMountedRef.current) {
              overlayAnimatedMountedRef.current = true;
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

    const modalAnimatedStyle = useAnimatedStyle(() => ({
      transform: [
        {
          scale: withTiming(
            overlaySv.value ? 1 : 0.85,
            {
              duration: 250,
            },
            finished => {
              runOnJS(() => {
                if (!modalAnimatedMountedRef.current) {
                  modalAnimatedMountedRef.current = true;
                  return;
                }

                if (!finished) return;

                if (isOpened) {
                  onOpened?.();
                }
              })();
            }
          ),
        },
      ],
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

    if (!isRendered) return null;

    return (
      <AnimatedScrollView
        className={variantStyles.scrollView()}
        contentContainerClassName={variantStyles.scrollViewContent()}
        style={[StyleSheet.absoluteFill, overlayAnimatedStyle]}
      >
        <Box ref={ref} className={variantStyles.wrapper()}>
          <Pressable style={StyleSheet.absoluteFill} noCursor onPress={closeOnOverlayTap ? handleClose : undefined} />
          <AnimatedBox className={variantStyles.modal()} maw={size} style={modalAnimatedStyle}>
            {children}
          </AnimatedBox>
        </Box>
      </AnimatedScrollView>
    );
  }
);

export default ModalBase;
