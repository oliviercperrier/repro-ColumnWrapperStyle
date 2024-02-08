import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import Button from "./Button";
import { Box } from "../Box";

const meta = {
  title: "Buttons/Button",
  component: Button,
  args: {
    title: "Button",
    color: "primary",
    variant: "filled",
  },
  decorators: [
    Story => (
      <Box alignItems="start">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
