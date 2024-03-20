import React, { useEffect, useState } from "react";
import { i18n } from "@budgeinc/budge-ui-utils";
import { TError, TErrorManagerProps } from "./ErrorManager.types";
import { errorManager } from "./ErrorManager.state";
import Stack from "../../../components/Stack/Stack";
import { ActionIcon } from "../../../components/ActionIcon";
import { UrgentIcon } from "../../../components/Icons";
import { Text } from "../../../components/Text";
import { Box } from "../../../components/Box";
import { ScrollView } from "../../../components/ScrollView";
import { Button } from "../../../components/Button";
import { getErrorMessageByKey } from "../utils";
import { modalManager } from "../../../components/ModalManager";

const ErrorManager = ({ messages }: TErrorManagerProps) => {
  const [errors, setErrors] = useState<TError[]>([]);

  useEffect(
    () =>
      errorManager.subscribe({
        onError,
        onDismissError,
      }),
    []
  );

  const onError = (modal: TError) =>
    setErrors(prevErrors => {
      const indexOfExistingModal = prevErrors.findIndex(t => t.id === modal.id);

      if (indexOfExistingModal !== -1) {
        const updatedModal = { ...prevErrors[indexOfExistingModal], ...modal };

        return [
          ...prevErrors.slice(0, indexOfExistingModal),
          updatedModal,
          ...prevErrors.slice(indexOfExistingModal + 1),
        ];
      }

      return [...prevErrors, modal];
    });

  const onDismissError = (id: number | string) => {
    setErrors(prevErrors => {
      const error = prevErrors.find(m => m.id === id);

      if (!error) return prevErrors;

      return prevErrors.filter(e => e.id !== id);
    });
  };

  const currentError = errors[errors.length - 1];
  const currentMsgKey = currentError?.key || currentError?.error?.message;

  useEffect(() => {
    if (errors.length) {
      modalManager.openModal({
        size: 400,
        withCloseButton: false,
        footer: null,
        children: (
          <Stack spacing={32} p="xl">
            <Stack spacing="xl">
              <ActionIcon
                noCursor
                radius="xxl"
                icon={UrgentIcon}
                color="red"
                variant="light"
                withHoverEffect={false}
                withPressEffect={false}
                onLongPress={() =>
                  modalManager.openModal({
                    title: (
                      <Text fw="600" variant="bodyLarge">
                        Detailed API Error
                      </Text>
                    ),
                    size: 500,
                    onClose: modalManager.closeAllModals,
                    footer: null,
                    children: (
                      <Box px="xl" pb="xl">
                        <Box bg="dark.8" p="md" sx={theme => ({ borderRadius: theme.fn.radius(theme.defaultRadius) })}>
                          <ScrollView mah={350}>
                            <Text color="white" fw="400">
                              {currentError.error
                                ? JSON.stringify(currentError.error, null, 2)
                                : "No details available"}
                            </Text>
                          </ScrollView>
                        </Box>
                      </Box>
                    ),
                  })
                }
              />
              <Text variant="titleH3">
                {currentError.customMessage
                  ? currentError.customMessage
                  : getErrorMessageByKey(messages, currentMsgKey)}
              </Text>
            </Stack>
            <Button
              title={i18n.t("close", { defaultValue: "Close" })}
              onPress={modalManager.closeActiveModal}
              fullWidth
              size="md"
            />
          </Stack>
        ),
      });
    }
  }, [JSON.stringify(errors)]);

  return null;
};

export default ErrorManager;
