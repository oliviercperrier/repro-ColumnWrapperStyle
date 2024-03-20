import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import { Switch } from "../Switch";
import { Meta, StoryFn } from "@storybook/react";

const meta = {
  title: "Inputs/Switch",
  component: Switch,
  args: {
    size: "md",
    color: "primary",
    disabled: false,
    label: "This is a switch",
  },
} satisfies Meta<typeof Switch.Confirm>;

export default meta;

type Story = StoryFn<typeof Switch.Confirm>;

export const Default: Story = (args) => {
  const [checked, setChecked] = useState(false);

  return (
    <Switch
      {...args}
      checked={checked}
      onValueChange={value => {
        setChecked(value);
        action("onValueChange")(value);
      }}
    />
  );
};
