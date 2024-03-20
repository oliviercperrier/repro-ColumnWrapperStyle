import React from "react";
import { Stack } from "../Stack";

import Logo, { TLogoProps } from "./Logo";
import LogoSquare from "./LogoSquare";
import { Box } from "../Box";
import { Meta, StoryFn } from "@storybook/react";

const meta = {
  title: "General/Logo",
  component: Logo,
  args: {
    width: 125,
  },
} satisfies Meta<typeof Logo>;

export default meta;

type Story = StoryFn<typeof Logo>;

export const Default: StoryFn = ({ args }) => (
  <Stack>
    <Box p="md">
      <Logo {...args} />
    </Box>
    <Box bg="primary.4" p="md" radius="sm" alignSelf="flex-start">
      <Logo textColor="white" />
    </Box>
  </Stack>
);

export const Square: Story = args => <LogoSquare />;
