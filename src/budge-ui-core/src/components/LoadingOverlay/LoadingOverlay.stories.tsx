import type { Meta, StoryObj } from "@storybook/react";
import LoadingOverlay from "./LoadingOverlay";

const meta = {
  title: "Overlays/Loading",
  component: LoadingOverlay,
} satisfies Meta<typeof LoadingOverlay>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {}
