import React from "react";

import { action } from "@storybook/addon-actions";
import PercentInput from "./PercentInput";
import { Meta, StoryFn } from "@storybook/react";

const meta = {
  title: "Inputs/PercentInput",
  component: PercentInput,
  args: {
    value: 19.95,
    label: "Interest Rate",
    disabled: false,
    allowDecimal: true,
    variant: "default",
    style: {
      maxWidth: 400,
    },
  },
} satisfies Meta<typeof PercentInput>;

export default meta;

type Story = StoryFn<typeof meta>;

export const Default: Story = ({ args }) => <PercentInput {...args} onValueChange={action("onValueChange")} />;
