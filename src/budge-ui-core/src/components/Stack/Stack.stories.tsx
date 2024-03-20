import React from "react";
import { Box } from "../Box";
import Stack from "./Stack";
import { Meta, StoryFn } from "@storybook/react";

const meta = {
  title: "Layout/Stack/Vertical",
  component: Stack,
  args: {
    spacing: "sm",
    alignItems: "flex-start",
  },
} satisfies Meta<typeof Stack>;

export default meta;

type Story = StoryFn<typeof Stack>;

export const Default: Story = (args) => (
  <Stack {...args}>
    <Box h={50} w={100} bg="dark" />
    <Box h={50} w={100} bg="dark" />
    <Box h={50} w={100} bg="dark" />
    <Box h={50} w={100} bg="dark" />
    <Box h={50} w={100} bg="dark" />
    <Box h={50} w={100} bg="dark" />
  </Stack>
);
