import type { Meta, StoryObj } from "@storybook/react";
import Spinner from "./Spinner";

const meta = {
  title: "Feedback/Spinner",
  component: Spinner,
  args: {
    color: "primary",
    size: "md"
  },
} satisfies Meta<typeof Spinner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
