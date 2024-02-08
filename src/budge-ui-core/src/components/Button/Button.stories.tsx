import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import Button from "./Button";

const meta = {
  title: "MyButton",
  component: Button,
  args: {
    title: "Button",
    color: "red",
    variant:"filled"
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16, alignItems: "flex-start" }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
