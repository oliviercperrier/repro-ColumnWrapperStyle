import type { Meta, StoryFn } from "@storybook/react";
import React, { useState } from "react";
import ModalBase from "./Modal.Base";
import { Text } from "../Text";
import { Button } from "../Button";
import { BPortal } from "../Portal";
import { action } from "@storybook/addon-actions";
import { Stack } from "../Stack";

const meta = {
  title: "Overlays/Modals",
  component: ModalBase,
} satisfies Meta<typeof ModalBase>;

export default meta;

type Story = StoryFn<typeof meta>;

export const Basic: Story = () => {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Button title="Open" alignSelf="start" onPress={() => setOpened(true)} />
      <BPortal hostName="modals-provider">
        <ModalBase
          opened={opened}
          onClose={() => {
            action("onClose")();
            setOpened(false);
          }}
          onOpened={action("onOpened")}
          onClosed={action("onClosed")}
        >
          <Stack p="xl" spacing="sm">
            <Text size="2xl">Welcome to Budge</Text>
            <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
              of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </Text>
          </Stack>
        </ModalBase>
      </BPortal>
    </>
  );
};
