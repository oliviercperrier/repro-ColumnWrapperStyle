import React from "react";
import Spinner from "./Spinner";
import { Meta, StoryFn } from "@storybook/react";

const meta = {
  title: "Feedback/Loader/Spinner",
  component: Spinner,
  args: {
    size: "md",
    color: "primary",
  },
} satisfies Meta<typeof Spinner>;

export default meta;

type Story = StoryFn<typeof meta>;

export const Default: Story = ({ args }) => <Spinner {...args} />;
