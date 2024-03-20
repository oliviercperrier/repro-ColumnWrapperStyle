import React from "react";

import LoadingOverlay, { TLoadingOverlayProps } from "./LoadingOverlay";
import { Stack } from "../Stack";
import { Input } from "../Input";
import Paper from "../Paper/Paper";
import { Button } from "../Button";
import { Text } from "../Text";
import { Meta, StoryFn } from "@storybook/react";

const meta = {
  title: "Overlays/LoadingOverlay",
  component: LoadingOverlay,
  args: {
    spinnerSize: "md",
    spinnerColor: "primary",
    overlayColor: "white",
  },
  decorators: [(Story: any) => Story()],
} satisfies Meta<typeof LoadingOverlay>;

export default meta;

type Story = StoryFn<typeof meta>;

export const Default: Story = ({ args }) => (
  <Paper p="xl" radius="md" shadow="sm" maw={500}>
    <Stack>
      <Text mb="lg" variant="bodyMedium" fw="500">
        Personal Information
      </Text>
      <Input label="First Name" value="Olivier" />
      <Input label="Last Name" value="Perrier" />
      <Input label="Email Name" value="olivier.castro-perrier@budge.app" />
      <Button title="Submit" color="primary" variant="filled" size="sm" mt="sm" alignSelf="flex-end" />
    </Stack>
    <LoadingOverlay radius="md" {...args} />
  </Paper>
);
