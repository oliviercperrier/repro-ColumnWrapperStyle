import React from "react";

import { action } from "@storybook/addon-actions";
import MoneySelector from "./index";
import { Box } from "../../../Box";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Inputs/MoneySelector",
  component: MoneySelector,
  decorators: [(Story: any) => <Box maw={500}>{Story()}</Box>],
} satisfies Meta<typeof MoneySelector>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 0,
    variant: "default",
    allowNegative: false,
    onValueChange: action("onValueChange"),
  },
};
