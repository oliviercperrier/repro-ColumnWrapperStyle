import React from "react";
import { i18n } from "@budgeinc/budge-ui-utils";
import { Stack } from "../Stack";
import { Text } from "../Text";
import { Modal } from "../Modal";
import ConfirmModal from "../ModalManager/ConfirmModal";
import { TOpenConfirmModalProps } from "../ModalManager/ModalManager.types";
import { splitConfirmAndModalProps } from "../ModalManager/utils";

const SessionExpiredConfirm = (props: Omit<TOpenConfirmModalProps, "children">) => {
  const { modalProps, confirmProps } = splitConfirmAndModalProps(props as any);

  return (
    <Modal {...modalProps} size={350} footer={null} withCloseButton={false}>
      <ConfirmModal {...confirmProps} cancelProps={{ display: "none" }}>
        <Stack spacing="lg" mt="md" mb="md">
          <Text variant="bodyLarge" fw="500">
            {i18n.t("ui-core.idleMonitoring.sessionExpire")}
          </Text>
        </Stack>
      </ConfirmModal>
    </Modal>
  );
};

export default SessionExpiredConfirm;
