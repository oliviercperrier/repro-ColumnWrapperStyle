import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import Tag from "./Tag";
import { Box } from "../Box";
import { SuccessIcon } from "../Icon";

const meta = {
  title: "Data Display/Tag",
  component: Tag,
  args: {
    value: "Success",
    color: "green",
    icon: SuccessIcon
  },
  decorators: [
    Story => (
      <Box alignItems="start">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof Tag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
