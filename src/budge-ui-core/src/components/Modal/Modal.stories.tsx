import type { Meta, StoryFn } from "@storybook/react";
import React, { useState } from "react";
import ModalBase from "./Modal.Base";
import { Text } from "../Text";
import { Button } from "../Button";
import { BPortal } from "../Portal";
import { AnimatedBox } from "../Box";
import { FadeIn } from "react-native-reanimated";

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
      <Button title="Open" onPress={() => setOpened(true)} />
      <BPortal hostName="modals-provider">
        <ModalBase opened={opened} onClose={() => setOpened(false)}>
          <Text>Allo</Text>
        </ModalBase>
      </BPortal>
    </>
  );
};
