import React from "react";

import { ComponentMeta } from "@storybook/react-native";
import { Button } from "../Button";
import Modal from "../Modal/Modal";
import { modalManager } from "./ModalManager.state";
import { Text } from "../Text";
import { TModalProps } from "../Modal/Modal.types";
import { Box } from "../Box";

type TModalPropsKeys = (keyof TModalProps)[];

const DefaultFields: TModalPropsKeys = ["size", "withCloseButton"];

const ModalMeta: ComponentMeta<typeof Modal> = {
  title: "Misc/ModalManager",
  component: Modal,
  parameters: {
    controls: {
      include: DefaultFields,
    },
  },
};

export default ModalMeta;

export const Default = () => (
  <>
    <Button
      title="Open Modal"
      onPress={() => {
        modalManager.openModal({
          title: "Modal title",
          okButtonProps: {
            title: "Next",
            onPress: modalManager.closeActiveModal,
          },
          cancelButtonProps: {
            title: "cancel",
          },
          children: (
            <Box px="xl">
              <Text>Modal content</Text>
            </Box>
          ),
        });
      }}
    />
  </>
);

export const ConfirmModal = () => (
  <>
    <Button
      title="Open Modal"
      onPress={() => {
        modalManager.openConfirm({
          confirmProps: {
            title: "Next",
          },
          cancelProps: {
            title: "cancel",
          },
          closeOnConfirm: false,
          onConfirm: () =>
            modalManager.openConfirm({
              children: <Text>Confirm content</Text>,
              onConfirm: modalManager.closeAllModals,
              confirmProps: {
                title: "Close all modal",
              },
              cancelProps: {
                title: "Back",
              },
            }),
          children: (
            <Box>
              <Text>First modal content</Text>
            </Box>
          ),
        });
      }}
    />
  </>
);

export const AsyncConfirmModal = () => (
  <>
    <Button
      title="Open Async Modal"
      onPress={() => {
        modalManager.openConfirm({
          confirmProps: {
            title: "Next",
          },
          cancelProps: {
            title: "cancel",
          },
          closeOnConfirm: false,
          onConfirm: async () =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve(true);
              }, 3000);
            }).then(modalManager.closeActiveModal),
          children: (
            <Box>
              <Text>Confirm with async confirm</Text>
            </Box>
          ),
        });
      }}
    />
  </>
);
