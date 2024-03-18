import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { LinearGradient } from "../LinearGradient";

const meta = {
  title: "Other/LinearGradient",
  component: LinearGradient,
  args: {},
} satisfies Meta<typeof LinearGradient>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    h: 100,
    w: 100,
    locations: [0.15, 1],
    colors: ["red", "purple"],
  },
};
