import React, { useEffect } from "react";
import { useTimer } from "@budgeinc/budge-ui-hooks";
import { i18n } from "@budgeinc/budge-ui-utils";
import { Stack } from "../Stack";
import { Text } from "../Text";
import { Modal } from "../Modal";
import ConfirmModal from "../ModalManager/ConfirmModal";
import { splitConfirmAndModalProps } from "../ModalManager/utils";
import { TOpenConfirmModalProps } from "../ModalManager";

export type TSessionExpiringSoonConfirmProps = Omit<TOpenConfirmModalProps, "children"> & {
  durationInSecondes?: number;
  onTimerUp: () => void;
};

const SessionExpiringSoonConfirm = ({
  durationInSecondes = 60,
  onTimerUp,
  ...rest
}: TSessionExpiringSoonConfirmProps) => {
  const { modalProps, confirmProps } = splitConfirmAndModalProps(rest as any);
  const { time, start, reset } = useTimer(durationInSecondes);

  const handleOnOpened = () => {
    if (rest.onOpened) {
      rest.onOpened();
    }

    start();
  };

  const handleOnClosed = () => {
    if (rest.onClosed) {
      rest.onClosed();
    }

    reset();
  };

  useEffect(() => {
    if (time < 1) {
      onTimerUp();
    }
  }, [time]);

  return (
    <Modal
      {...modalProps}
      size={350}
      onOpened={handleOnOpened}
      onClosed={handleOnClosed}
      footer={null}
      withCloseButton={false}
    >
      <ConfirmModal
        {...confirmProps}
        confirmProps={{
          title: i18n.t("ui-core.idleMonitoring.keepMeSignIn"),
          ...rest.confirmProps,
        }}
        cancelProps={{
          title: i18n.t("ui-core.idleMonitoring.signMeOut"),
          ...rest.cancelProps,
        }}
      >
        <Stack spacing="lg" pt="md" pb="md">
          <Text variant="bodyLarge" fw="500">
            {i18n.t("ui-core.idleMonitoring.sessionAboutToExpire")}
          </Text>
          <Text>
            {i18n.t("ui-core.idleMonitoring.youWillBeLoggedOutIn")}{" "}
            <Text fw="600" color="red">
              {time}
            </Text>{" "}
            {i18n.t("ui-core.idleMonitoring.second", { count: time })}.
          </Text>
        </Stack>
      </ConfirmModal>
    </Modal>
  );
};

export default SessionExpiringSoonConfirm;
