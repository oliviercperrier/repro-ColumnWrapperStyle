import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Button } from "../Button";
import { Box } from "../Box";

const meta = {
  title: "Buttons/Button",
  component: Button,
  args: {},
  decorators: [
    Story => (
      <Box alignItems="flex-start">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    title: "Button",
    color: "primary",
    variant: "filled",
    loading: false,
    disabled: false,
    size: "md",
  },
};
