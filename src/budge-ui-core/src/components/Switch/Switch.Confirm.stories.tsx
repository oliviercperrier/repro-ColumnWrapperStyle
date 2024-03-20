import React, { useState, useEffect } from "react";

import { action } from "@storybook/addon-actions";
import { Switch } from ".";
import { Meta, StoryFn } from "@storybook/react";

const meta = {
  title: "Inputs/Switch",
  component: Switch.Confirm,
  args: {
    label: "I'm a checkbox with a confirm modal",
    checked: false,
    disabled: false,
    onValueChange: () => {},
  },
} satisfies Meta<typeof Switch.Confirm>;

export default meta;

type Story = StoryFn<typeof Switch.Confirm>;

export const WithConfirm: Story = (args) => {
  const [isChecked, setChecked] = useState(args.checked);

  useEffect(() => {
    setChecked(args.checked);
  }, [args.checked]);

  return (
    <Switch.Confirm
      {...args}
      checked={isChecked}
      onValueChange={value => {
        action("onValueChange")(value);
        setChecked(value);
      }}
      confirmModalProps={{
        children: "I'm the switch confirmation message",
        onConfirm: () => {
          action("onOk")();
          setChecked(true);
        },
      }}
    />
  );
};
