import { action } from "@storybook/addon-actions";
import React, { useEffect, useState } from "react";


import Modal from "./Modal";
import { Button } from "../Button";
import { Stack } from "../Stack";
import { Input } from "../Input";
import { Box } from "../Box";
import { TModalProps } from "./Modal.types";

type TModalPropsKeys = (keyof TModalProps)[];

const DefaultFields: TModalPropsKeys = ["size", "withCloseButton"];

const ModalMeta: ComponentMeta<typeof Modal> = {
  title: "Overlays/Modal",
  component: Modal,
  parameters: {
    controls: {
      include: DefaultFields,
    },
  },
};

export default ModalMeta;

type ModalStory = ComponentStory<typeof Modal>;

export const Default: ModalStory = args => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(!!args.opened);
  }, [args.opened]);

  return (
    <Box>
      <Button title="Show modal" color="primary" onPress={() => setIsVisible(true)} />
      <Modal
        {...args}
        opened={isVisible}
        onClose={() => {
          setIsVisible(false);
          action("onClose")();
        }}
        onOpened={action("onOpened")}
        onClosed={action("onClosed")}
        onOk={action("onOk")}
      >
        <Stack spacing="md" px="xl">
          <Input label="First name" />
          <Input label="Last name" />
          <Input label="Other input" />
        </Stack>
      </Modal>
    </Box>
  );
};
Default.args = {
  title: "Modal title",
  titleDescription: "Modal title description",
  withCloseButton: true,
};
Default.parameters = {
  controls: {
    include: ["title", "titleDescription", ...DefaultFields] as TModalPropsKeys,
  },
};

export const CustomFooter: ModalStory = args => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(!!args.opened);
  }, [args.opened]);

  return (
    <Box>
      <Button title="Show modal" color="primary" onPress={() => setIsVisible(true)} />
        <Modal
          {...args}
          opened={isVisible}
          onClose={() => {
            setIsVisible(false);
            action("onClose")();
          }}
          onOpened={action("onOpened")}
          onClosed={action("onClosed")}
          onOk={action("onOk")}
        >
          <Stack spacing="md" px="xl">
            <Input label="First name" />
            <Input label="Last name" />
            <Input label="Other input" />
          </Stack>
        </Modal>
    </Box>
  );
};
CustomFooter.args = {
  title: "Modal title",
  titleDescription: "Modal title description",
  withCloseButton: true,
  okButtonProps: {
    title: "Custom ok",
    color: "dark",
  },
  cancelButtonProps: {
    title: "Custom Cancel",
    color: "red",
    variant: "filled",
  },
};
CustomFooter.parameters = {
  controls: {
    include: ["title", "titleDescription", "cancelButtonProps", "okButtonProps", ...DefaultFields] as TModalPropsKeys,
  },
};
