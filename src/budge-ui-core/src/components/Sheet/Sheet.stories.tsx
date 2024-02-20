import type { Meta, StoryFn } from "@storybook/react";
import React from "react";
import Sheet, { useSheet } from "./Sheet";
import { Button } from "../Button";
import { action } from "@storybook/addon-actions";
import { Text } from "../Text";
import { Stack } from "../Stack";

const meta = {
  title: "Overlays/Sheet",
  component: Sheet,
  args: {},
} satisfies Meta<typeof Sheet>;

export default meta;

type Story = StoryFn<typeof meta>;

export const Basic: Story = () => {
  const { ref, show } = useSheet();

  return (
    <>
      <Button title="Open" alignSelf="start" onPress={show} />
      <Sheet ref={ref} onClose={action("onClose")} onOpened={action("onOpened")} onClosed={action("onClosed")}>
        <Stack p="xl" spacing="sm">
          <Text size="2xl">Welcome to Budge</Text>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </Text>
        </Stack>
      </Sheet>
    </>
  );
};
