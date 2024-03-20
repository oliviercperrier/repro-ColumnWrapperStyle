import React from "react";

import { Button } from "../Button";
import { MailIcon } from "../Icons";
import Empty from "./Empty";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Feedback/Empty",
  component: Empty,
} satisfies Meta<typeof Empty>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    title: "Empty title",
    description: "Empty description",
  },
};

export const WithAction: Story = {
  args: {
    icon: <MailIcon size={75} color="black" />,
    title: "No emails were found",
    description: "Create your first email",
    action: <Button title="New Email" size="sm" color="primary" />,
  },
};
