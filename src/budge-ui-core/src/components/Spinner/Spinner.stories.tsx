import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import Spinner from "./Spinner";

const meta = {
  title: "Feedback/Spinner",
  component: Spinner,
  args: {
    color: "primary",
    size: "md"
  },
  decorators: [
    Story => (
      <View style={{ padding: 16, alignItems: "flex-start" }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Spinner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
