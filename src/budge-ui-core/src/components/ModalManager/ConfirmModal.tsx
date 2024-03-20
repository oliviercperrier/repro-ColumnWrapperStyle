import React, { forwardRef, useState } from "react";
import { GestureResponderEvent, View } from "react-native";
import { i18n } from "@budgeinc/budge-ui-utils";
import { Stack } from "../Stack";
import { ThemeIcon } from "../ThemeIcon";
import { UrgentIcon } from "../Icons";
import { Text } from "../Text";
import { Box } from "../Box";
import { Button } from "../Button";
import { modalManager } from "./ModalManager.state";
import { TConfirmModalProps } from "./ModalManager.types";

const ConfirmModal = forwardRef<View, TConfirmModalProps>(
  (
    {
      children,
      icon = UrgentIcon,
      iconColor = "yellow",
      cancelProps,
      confirmProps,
      onCancel,
      onConfirm,
      closeOnCancel = true,
      closeOnConfirm = true,
      hideCancel = false,
    },
    ref
  ) => {
    const [isCancelLoading, setCancelLoading] = useState(false);
    const [isConfirmLoading, setConfirmLoading] = useState(false);

    const handleCancel = async (e: GestureResponderEvent) => {
      setCancelLoading(true);
      await onCancel?.();
      await cancelProps?.onPress?.(e);
      setCancelLoading(false);
      closeOnCancel && modalManager.closeActiveModal();
    };

    const handleConfirm = async (e: GestureResponderEvent) => {
      setConfirmLoading(true);
      await onConfirm?.();
      await confirmProps?.onPress?.(e);
      setConfirmLoading(false);
      closeOnConfirm && modalManager.closeActiveModal();
    };

    return (
      <Box>
        <Stack ref={ref} spacing="lg" w="100%" px="xl" pt="xl">
          <ThemeIcon size="sm" icon={icon} variant="light" radius="xxl" color={iconColor} />
          {typeof children === "string" ? (
            <Text variant="bodyMedium" fw="500" f={1}>
              {children}
            </Text>
          ) : (
            children
          )}
        </Stack>
        <Stack.Horizontal justifyContent="flex-end" fwrap="wrap" mt="xl" px="xl" pb="xl">
          {!hideCancel && (
            <Button
              key="cancel"
              title={i18n.t("cancel")}
              variant="default"
              size="sm"
              {...cancelProps}
              onPress={handleCancel}
              loading={isCancelLoading || cancelProps?.loading}
            />
          )}
          <Button
            key="ok"
            title={i18n.t("ok")}
            color="primary"
            variant="filled"
            size="sm"
            {...confirmProps}
            onPress={handleConfirm}
            loading={isConfirmLoading || confirmProps?.loading}
          />
        </Stack.Horizontal>
      </Box>
    );
  }
);

export default ConfirmModal;
