import { action } from "@storybook/addon-actions";
import MoneyInput, { TMoneyInputProps } from "./MoneyInput";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Inputs/MoneyInput",
  component: MoneyInput,
} satisfies Meta<typeof MoneyInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 500,
    label: "Amount",
    disabled: false,
    allowDecimal: true,
    variant: "default",
    style: {
      maxWidth: 400,
    },
    onValueChange: action("onValueChange"),
  },
};
