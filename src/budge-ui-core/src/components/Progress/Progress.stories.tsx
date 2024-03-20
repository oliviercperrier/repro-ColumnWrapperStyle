import React from "react";

import { Stack } from "../Stack";
import Progress, { TProgressProps } from "./Progress";
import { Meta, StoryFn } from "@storybook/react";

const meta = {
  title: "Feedback/Progress",
  component: Progress,
  args: {
    color: "primary",
    size: "md",
    value: 75,
  },
} satisfies Meta<typeof Progress>;

export default meta;

type Story = StoryFn<typeof Progress>;

export const Default: Story = (args) => (
  <Stack spacing="md">
    <Progress {...args} color="default" />
    <Progress {...args} />
    <Progress {...args} color="brown" />
    <Progress {...args} color="red" />
    <Progress {...args} color="blue" />
    <Progress {...args} color="green" />
    <Progress {...args} color="yellow" />
    <Progress {...args} color="water" />
  </Stack>
);
