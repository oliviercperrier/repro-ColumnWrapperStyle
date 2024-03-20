import type { Meta, StoryObj } from "@storybook/react";
import { ActionIcon } from "../ActionIcon";
import { HearthIcon } from "../Icons";

const meta = {
  title: "Buttons/ActionIcon",
  component: ActionIcon,
} satisfies Meta<typeof ActionIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    icon: HearthIcon,
    color: "primary",
    radius: "default",
    size: "md",
    variant: "light",
    iconColor: "",
    disabled: false,
  },
};
