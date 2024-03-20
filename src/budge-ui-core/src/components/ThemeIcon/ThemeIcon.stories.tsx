import React from "react";

import ThemeIcon, { TThemeIconProps } from "./ThemeIcon";
import { StudentIcon } from "../Icons";
import { Meta, StoryFn, StoryObj } from "@storybook/react";

const meta = {
  title: "General/ThemeIcon",
  component: ThemeIcon,
  args: {},
} satisfies Meta<typeof ThemeIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    icon: StudentIcon,
    color: "primary",
    radius: "default",
    size: "md",
    variant: "light",
    iconColor: "",
  },
};
