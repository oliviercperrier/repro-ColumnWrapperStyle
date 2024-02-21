import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import React from "react";
import Card from "./Card";
import { Text } from "../Text";

const meta = {
  title: "Data Display/Card",
  component: Card,
  args: {
    shadow: "md",
    loading: false,
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryFn<typeof meta>;

export const Basic: Story = args => (
  <Card {...args}>
    <Text>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
      type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
      Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
      of Lorem Ipsum.
    </Text>
  </Card>
);
