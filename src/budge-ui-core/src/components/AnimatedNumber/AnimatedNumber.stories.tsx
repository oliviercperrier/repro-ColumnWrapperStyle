import type { Meta, StoryFn } from "@storybook/react";
import { AnimatedNumber } from "../AnimatedNumber";
import { Box } from "../Box";

const meta = {
  title: "Data Display/AnimatedNumber",
  component: AnimatedNumber,
  args: {
    animate: true,
    value: "9999",
    textProps: {
      color: "purple",
      fz: 100,
      lh: 120,
      fw: "600",
    },
  },
} satisfies Meta<typeof AnimatedNumber>;

export default meta;

type Story = StoryFn<typeof meta>;

export const Basic: Story = ({ args }) => (
  <Box alignSelf="flex-start" px="xl" radius="lg">
    <AnimatedNumber {...args} />
  </Box>
);
