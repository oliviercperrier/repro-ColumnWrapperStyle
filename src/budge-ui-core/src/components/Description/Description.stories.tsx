import React from "react";
import { Description } from ".";
import { Meta, StoryFn } from "@storybook/react";

const meta = {
  title: "Data Display/Description",
  component: Description.Item,
  args: {
    label: "Item title",
  },
} satisfies Meta<typeof Description.Item>;

export default meta;

type Story = StoryFn<typeof meta>;

export const Default: Story = ({ args }) => (
  <Description>
    <Description.Item {...args}>content 1</Description.Item>
    <Description.Item {...args}>content 2</Description.Item>
  </Description>
);
