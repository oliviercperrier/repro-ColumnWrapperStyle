import { StyleSheet, View, Platform } from "react-native";
import React, { PropsWithChildren, forwardRef, useCallback, useEffect, useRef, useState } from "react";
import { AnimatedBox, Box } from "../Box";
import { Easing, runOnJS, useAnimatedStyle, useSharedValue, withSpring, withTiming } from "react-native-reanimated";
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
    const animatedMountedRef = useRef(false);
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
    const modalSv = useSharedValue<"opened" | "closing" | "closed">("closed");

    const overlayAnimatedStyle = useAnimatedStyle(() => ({
      opacity: withTiming(overlaySv.value ? 1 : 0, {}, finished => {
        runOnJS(() => {
          if (!animatedMountedRef.current) {
            animatedMountedRef.current = true;
            return;
          }

          if (!finished) return;

          if (!isOpened) {
            onClosed?.();
            setRendered(false);
            modalSv.value = "closed";
          }
        })();
      }),
    }));

    const modalAnimatedStyle = useAnimatedStyle(() => ({
      transform: [
        {
          translateY: withSpring(
            modalSv.value === "opened" ? 0 : modalSv.value === "closing" ? 50 : -50,
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
        },
      ],
    }));

    const handleOpen = useCallback((o: boolean) => {
      if (o) {
        setRendered(true);
        overlaySv.value = true;
        modalSv.value = "opened";
      }

      setOpened(o);
    }, []);

    const handleClose = useCallback(() => {
      onClose?.();
      setOpened(false);
      overlaySv.value = false;
      modalSv.value = "closing";
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
