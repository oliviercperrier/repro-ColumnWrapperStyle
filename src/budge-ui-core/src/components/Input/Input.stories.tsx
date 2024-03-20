import React from "react";

import Input from "./Input";
import { AddNewGoalIcon, StudentGoalIcon } from "../Icons";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Inputs/Input",
  component: Input,
  args: {
    label: "Basic Input",
    disabled: false,
    centered: false,
    variant: "default",
    style: {
      maxWidth: 350,
    },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: "Basic Input",
    disabled: false,
    centered: false,
    variant: "default",
    style: {
      maxWidth: 350,
    },
  },
};

export const WithFocus: Story = {
  args: {
    autoFocus: true,
    label: "Basic Input",
    disabled: false,
    centered: false,
    variant: "default",
    style: {
      maxWidth: 350,
    },
  },
};

export const Multiline: Story = {
  args: {
    multiline: true,
    numberOfLines: 5,
    label: "Html shell",
    style: {
      maxWidth: 500,
    },
    value: `<!DOCTYPE html>
  <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Hello!</title>
      <meta name="description" content="description"/>
      <meta name="author" content="author" />
      <meta name="keywords" content="keywords" />
      <link rel="stylesheet" href="./stylesheet.css" type="text/css" />
      <style type="text/css">.body { width: auto; }</style>
    </head>
    <body>
    </body>
  </html>`,
  },
};

export const WithRightIcon: Story = {
  args: {
    label: "Basic Input",
    disabled: false,
    centered: false,
    variant: "default",
    style: {
      maxWidth: 350,
    },
    rightSection: <StudentGoalIcon />,
  },
};

export const WithLeftIcon: Story = {
  args: {
    label: "Basic Input",
    disabled: false,
    centered: false,
    variant: "default",
    style: {
      maxWidth: 350,
    },
    leftSection: <AddNewGoalIcon />,
  },
};
