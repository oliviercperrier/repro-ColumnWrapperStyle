import React from "react";
import { Stack } from "../Stack";
import { Text } from "../Text";

import Divider, { TDividerProps } from "./Divider";
import { Meta, StoryFn, StoryObj } from "@storybook/react";

const meta = {
  title: "Layout/Divider",
  component: Divider,
  args: {
    size: "xs",
    color: "gray.2",
    spacing: "lg",
  },
} satisfies Meta<typeof Divider>;

export default meta;

type StoryFunc = StoryFn<typeof meta>;
type StoryObject = StoryObj<typeof meta>;

export const Default: StoryObject = {
  args: {
    size: "xs",
    color: "gray.2",
    spacing: "lg",
  },
};

export const WithText: StoryFunc = ({ args }) => (
  <Stack>
    <Divider orientation="left" {...args}>
      <Text color="textSecondary">Left</Text>
    </Divider>
    <Divider orientation="center">
      <Text color="textSecondary">Center</Text>
    </Divider>
    <Divider orientation="right">
      <Text color="textSecondary">Right</Text>
    </Divider>
  </Stack>
);
