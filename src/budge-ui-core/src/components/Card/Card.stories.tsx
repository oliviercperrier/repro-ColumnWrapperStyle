import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Card } from "../Card";
import { Text } from "../Text";

const meta = {
  title: "Data Display/Card",
  component: Card,
  args: {},
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: <Text>Card Content</Text>,
  },
};
