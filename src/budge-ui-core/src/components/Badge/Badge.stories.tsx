import type { Meta, StoryFn } from "@storybook/react";
import Badge from "./Badge";
import { NotificationIcon, RoundIcon } from "../Icons";

const meta = {
  title: "Data Display/Badge",
  component: Badge,
  args: {
    count: 50,
    color: "red",
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryFn<typeof Badge>;

export const Basic: Story = (args) => (
  <Badge {...args}>
    <RoundIcon icon={NotificationIcon} />
  </Badge>
);
