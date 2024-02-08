import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { View } from "react-native";
import Input from "./Input";
import { Box } from "../Box";

const meta = {
  title: "Data Entry/Input",
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: "Email",
  },
};

export const AutoFocus: Story = {
  args: {
    label: "Email",
    autoFocus: true,
  },
};

export const Textarea: Story = {
  args: {
    label: "Html Shell",
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
    multiline: true,
    numberOfLines: 12,
  },
};
