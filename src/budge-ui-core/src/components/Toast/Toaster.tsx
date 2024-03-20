import React, { useEffect, useMemo, useState } from "react";
import { useScreenSize } from "@budgeinc/budge-ui-hooks";
import { Dimensions, View } from "react-native";
import { useTheme } from "@budgeinc/budge-ui-styling";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AnimatePresence } from "moti";
import { toast as toastManager } from "./Toast.state";
import { BPortal } from "../Portal";
import { TToast } from "./Toast.types";
import { Box, MotifiedBox } from "../Box";
import { Alert } from "../Alert";

export type TToasterProps = {
  /* Number of seconds */
  closeAfter?: number;
};

const PADDING_X = 12;

const Toaster = ({ closeAfter = 5000 }: TToasterProps) => {
  const theme = useTheme();
  const { isSmallerThan } = useScreenSize();
  const [toasts, setToasts] = useState<TToast[]>([]);
  const refMap = useMemo(() => new Map<number | string, View>(), []);
  const toastWidth = isSmallerThan("xs") ? Dimensions.get("window").width - 2 * PADDING_X : 350;
  const { bottom } = useSafeAreaInsets();

  useEffect(
    () =>
      toastManager.subscribe(toast => {
        setTimeout(() => {
          setToasts(prevToasts => {
            const indexOfExistingToast = prevToasts.findIndex(t => t.id === toast.id);

            if (indexOfExistingToast !== -1) {
              return [
                ...prevToasts.slice(0, indexOfExistingToast),
                { ...prevToasts[indexOfExistingToast], ...toast },
                ...prevToasts.slice(indexOfExistingToast + 1),
              ];
            }

            return [...prevToasts, toast];
          });
        });
      }),
    []
  );

  const removeToast = (toast: TToast) => setToasts(prevToasts => prevToasts.filter(({ id }) => id !== toast.id));

  return (
    <BPortal hostName={theme.portalProviderNames.toasts}>
      <Box pos="absolute" px="md" bottom={bottom || theme.spacing.md} left={undefined} right={0}>
        <AnimatePresence>
          {toasts.map(item => (
            <MotifiedBox
              key={item.id}
              from={{
                opacity: 0,
                translateX: toastWidth,
                width: toastWidth,
              }}
              animate={{
                opacity: 1,
                translateX: 0,
              }}
              exit={{
                opacity: 0,
                translateX: toastWidth,
              }}
              exitTransition={{
                duration: 250,
                type: "timing",
              }}
              transition={{
                type: "spring",
                translateX: {
                  stiffness: 300,
                  damping: 100,
                },
              }}
              mt="sm"
              onDidAnimate={(styleProp, finished, value, event) => {
                // translateX to 0 means toast is opened, close it after x seconds
                if (styleProp === "translateX" && finished && event.attemptedValue === 0) {
                  setTimeout(() => removeToast(item), item.duration || closeAfter);
                }
              }}
            >
              <Alert
                title={item.title}
                color={item.color}
                contentColor="white"
                variant="filled"
                ref={ref => ref && refMap.set(item.id, ref)}
                onClose={() => removeToast(item)}
                sx={t => ({
                  position: "relative",
                  width: toastWidth,
                  ...t.shadow.xl,
                })}
                px={PADDING_X}
                py={10}
                icon={item.icon}
              >
                {typeof item.message === "string" ? item.message : item.message?.(() => removeToast(item))}
              </Alert>
            </MotifiedBox>
          ))}
        </AnimatePresence>
      </Box>
    </BPortal>
  );
};

export default Toaster;
