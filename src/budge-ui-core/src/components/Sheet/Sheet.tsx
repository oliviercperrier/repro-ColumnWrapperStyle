import React, { ReactNode, forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from "react";
import { StyleSheet, Dimensions } from "react-native";
import { useTheme } from "@budgeinc/budge-ui-styling";
import { MotifiedBox } from "../Box";
import { Pressable } from "../Pressable";
import { BPortal } from "../Portal";

export interface BottomSheetRef {
  show: () => void;
  hide: () => void;
  opened: boolean;
}

export type TBottomSheetProps = {
  opened?: boolean;
  onClose?: () => void;
  onClosed?: () => void;
  onOpened?: () => void;
  children: (({ hide }: { hide: () => void }) => JSX.Element) | JSX.Element | ReactNode;
  closeOnOverlayTap?: boolean;
};

const BottomSheet = forwardRef<BottomSheetRef, TBottomSheetProps>(
  ({ children, opened = false, closeOnOverlayTap = true, onClose, onClosed, onOpened }, ref) => {
    const theme = useTheme();
    const [isOpened, setIsOpened] = useState(opened);
    const [rendered, setRendered] = useState(false);
    const onDidAnimateOpened = useRef(false);

    const handleClose = useCallback(() => {
      onClose?.();
      setIsOpened(false);
    }, [onClose]);

    useEffect(() => {
      if (opened && !isOpened) {
        setRendered(true);
      }

      setIsOpened(opened);
    }, [opened]);

    useEffect(() => {
      if (isOpened) {
        setIsOpened(true);
      } else if (!isOpened) {
        setIsOpened(false);
      }
    }, [isOpened]);

    useImperativeHandle(
      ref,
      () => ({
        opened: isOpened,
        show: () => {
          setRendered(true);
          setIsOpened(true);
        },
        hide: handleClose,
      }),
      [isOpened]
    );

    if (!rendered) {
      return null;
    }

    return (
      <MotifiedBox
        from={{
          opacity: 0,
        }}
        animate={{
          opacity: isOpened ? 1 : 0,
        }}
        transition={{
          type: "timing",
        }}
        style={[{ backgroundColor: theme.fn.alpha(theme.palette.colors.dark[9], 0.4) }, StyleSheet.absoluteFill]}
        onDidAnimate={() => {
          // onDidAnimate is weirdly called when the component is rerendered even if the animation has already finised
          // Adding a flag to fix that issue.
          if (isOpened && !onDidAnimateOpened.current) {
            onOpened?.();
            onDidAnimateOpened.current = true;
          }

          if (!isOpened) {
            onClosed?.();
            setRendered(false);
          }
        }}
      >
        <Pressable style={StyleSheet.absoluteFill} noCursor onPress={closeOnOverlayTap ? handleClose : undefined} />
        <MotifiedBox
          from={{
            bottom: -1 * Dimensions.get("window").height,
          }}
          animate={{
            bottom: isOpened ? 0 : -1 * Dimensions.get("window").height,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 100,
          }}
          bg="white"
          pos="absolute"
          left={0}
          right={0}
          bottom={0}
          sx={{
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            overflow: "hidden",
          }}
        >
          {typeof children === "function" ? children({ hide: handleClose }) : children}
        </MotifiedBox>
      </MotifiedBox>
    );
  }
);

export const useSheet = () => {
  const ref = useRef<BottomSheetRef>(null);

  return {
    ref,
    show: () => ref.current?.show(),
    hide: () => ref.current?.hide(),
  };
};

const BottomSheetWrapper = forwardRef<BottomSheetRef, TBottomSheetProps>((props: TBottomSheetProps, ref) => {
  const { portalProviderNames } = useTheme();

  return (
    <BPortal hostName={portalProviderNames.modals}>
      <BottomSheet ref={ref} {...props} />
    </BPortal>
  );
});

export default BottomSheetWrapper;
