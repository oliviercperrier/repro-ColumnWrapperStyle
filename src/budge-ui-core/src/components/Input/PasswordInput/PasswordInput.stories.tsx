import React from "react";
import PasswordInput from "./PasswordInput";
import { Meta, StoryFn, StoryObj } from "@storybook/react";

const meta = {
  title: "Inputs/PasswordInput",
  component: PasswordInput,
} satisfies Meta<typeof PasswordInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: "Password",
    disabled: false,
    variant: "default",
    showStrengthMeter: true,
    showSuggestions: true,
    showStrengthLabel: true,
    style: {
      maxWidth: 400,
    },
  },
};
