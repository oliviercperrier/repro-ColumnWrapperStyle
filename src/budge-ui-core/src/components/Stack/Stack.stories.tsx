import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import Stack from "./Stack";
import { Box } from "../Box";

const meta = {
  title: "Layout/Stack/Vertical",
  component: Stack,
  args: {
    spacing: "sm",
  },
} satisfies Meta<typeof Stack>;

export default meta;

type Story = StoryFn<typeof meta>;

export const Basic: Story = args => {
  return (
    <Stack {...args}>
      <Box h={50} w={100} bg="black" />
      <Box h={50} w={100} bg="black" />
      <Box h={50} w={100} bg="black" />
      <Box h={50} w={100} bg="black" />
    </Stack>
  );
};
