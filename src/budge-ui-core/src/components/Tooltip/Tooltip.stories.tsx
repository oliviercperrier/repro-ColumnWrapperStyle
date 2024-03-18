import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import React from "react";
import { Tooltip } from "../Tooltip";
import { Box } from "../Box";
import { Text } from "../Text";

const meta = {
  title: "Overlays/Tooltip",
  component: Tooltip,
  args: {},
  decorators: [
    Story => (
      <Box alignItems="start">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryFn<typeof meta>;

export const Basic: Story = args => (
  <Tooltip {...args}>
    <Tooltip.Trigger>
      <Text>Hover Me!</Text>
    </Tooltip.Trigger>
    <Tooltip.Content>Tooltip Content</Tooltip.Content>
  </Tooltip>
);
