import { action } from "@storybook/addon-actions";
import React, { useEffect, useState } from "react";

import Modal from "./Modal";
import { Button } from "../Button";
import { Stack } from "../Stack";
import { Input } from "../Input";
import { Box } from "../Box";
import { Meta, StoryFn } from "@storybook/react";

const meta = {
  title: "Overlays/Modal",
  component: Modal,
  args: {
    opened: false,
    title: "Modal title",
    titleDescription: "Modal title description",
    withCloseButton: true,
  },
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryFn<typeof Modal>;

export const Default: Story = (args) => {
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
