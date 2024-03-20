import React, { PropsWithChildren, forwardRef, memo, useEffect, useRef, useState } from "react";
import { Platform, ScrollView, StyleSheet, View } from "react-native";
import { useComponentDefaultProps } from "@budgeinc/budge-ui-styling";
import { useWindowEvent } from "@budgeinc/budge-ui-hooks";
import { motify } from "moti";
import { MotifiedBox, Box } from "../Box";
import { useStyles } from "./Modal.styles";
import { Pressable } from "../Pressable";
import { TModalBaseProps } from "./Modal.types";

const MotifiedScrollView = motify(ScrollView)();

const ModalBase = forwardRef<View, PropsWithChildren<TModalBaseProps>>((props, ref) => {
  const {
    opened,
    onClose,
    onClosed,
    onOpened,
    size = 500,
    closeOnEscape = true,
    closeOnOverlayTap = true,
    children,
  } = useComponentDefaultProps("Modal", {}, props);
  const onDidAnimateOpened = useRef(false);

  const { rootStyle, modalStyle, scrollViewStyles, modalSize } = useStyles({ size });

  const [visible, setVisible] = useState(false);
  const [rendered, setRendered] = useState(false);

  if (Platform.OS === "web") {
    useWindowEvent("keydown", event => {
      if (event.key === "Escape" && closeOnEscape && visible) {
        onClose?.();
      }
    });
  }

  useEffect(() => {
    if (opened && !visible) {
      setRendered(true);
    }

    setVisible(!!opened);
  }, [opened]);

  if (!rendered) return null;

  return (
    <MotifiedScrollView
      from={{
        opacity: 0,
      }}
      animate={{
        opacity: visible ? 1 : 0,
      }}
      transition={{
        type: "timing",
      }}
      onDidAnimate={(styleProp, finished, value, event) => {
        if (styleProp === "opacity" && finished) {
          // opacity is 1 means modal is opened, call onOpened callback
          // we use onDidAnimateOpened.current to avoid recalling onOpened when
          // modal content is updated.
          if (event.attemptedValue === 1 && !onDidAnimateOpened.current) {
            onOpened?.();
            onDidAnimateOpened.current = true;
            return;
          }

          //  opacity is 0 means the modal is closed, call onClosed callback
          if (event.attemptedValue === 0) {
            onClosed?.();
            setRendered(false);
          }
        }
      }}
      style={[scrollViewStyles.rootStyle, StyleSheet.absoluteFill]}
      contentContainerStyle={scrollViewStyles.contentStyle}
    >
      <Box ref={ref} style={rootStyle}>
        <Pressable style={StyleSheet.absoluteFill} noCursor onPress={closeOnOverlayTap ? onClose : undefined} />
        <MotifiedBox
          from={{
            translateY: 50,
          }}
          animate={{
            translateY: visible ? 0 : 50,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 100,
          }}
          sx={[modalStyle, { maxWidth: modalSize }]}
        >
          {children}
        </MotifiedBox>
      </Box>
    </MotifiedScrollView>
  );
});

export default memo(ModalBase);
