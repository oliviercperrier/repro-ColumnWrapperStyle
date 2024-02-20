import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import LoadingOverlay from "./LoadingOverlay";
import { Box } from "../Box";
import { Text } from "../Text";

const meta = {
  title: "Overlays/Loading",
  component: LoadingOverlay,
  args: {},
} satisfies Meta<typeof LoadingOverlay>;

export default meta;

type Story = StoryFn<typeof meta>;

export const Basic: Story = () => {
  return (
    <Box bw="xs" bc="gray" p="md" r="lg" shadow="md" h={250} w={250}>
      <Text>Box with loading overlay</Text>
      <LoadingOverlay r="lg" />
    </Box>
  );
};
