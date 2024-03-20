import React from "react";
import { Box } from "../Box";
import { Stack } from ".";
import { Meta, StoryFn } from "@storybook/react";

const meta = {
  title: "Layout/Stack/Horizontal",
  component: Stack,
  args: {
    spacing: "sm",
    justifyContent: "flex-start",
  },
} satisfies Meta<typeof Stack.Horizontal>;

export default meta;

type Story = StoryFn<typeof Stack.Horizontal>;

export const Default: Story = (args) => (
  <Stack.Horizontal {...args}>
    <Box h={50} w={100} bg="dark" />
    <Box h={50} w={100} bg="dark" />
    <Box h={50} w={100} bg="dark" />
    <Box h={50} w={100} bg="dark" />
    <Box h={50} w={100} bg="dark" />
  </Stack.Horizontal>
);
