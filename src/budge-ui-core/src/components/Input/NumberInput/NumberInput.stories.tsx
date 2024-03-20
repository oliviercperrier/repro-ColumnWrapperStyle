import { action } from "@storybook/addon-actions";
import NumberInput, { TNumberInputProps } from "./NumberInput";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Inputs/NumberInput",
  component: NumberInput,
} satisfies Meta<typeof NumberInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Number",
    disabled: false,
    allowDecimal: true,
    snapStepValue: false,
    variant: "default",
    decimalSeparator: ".",
    prefix: "",
    suffix: "",
    style: {
      maxWidth: 400,
    },
    onValueChange: action("onValueChange"),
  },
};
