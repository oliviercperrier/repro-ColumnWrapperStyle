import React, { useState, useEffect } from "react";
import { action } from "@storybook/addon-actions";
import { TCheckboxConfirmProps } from "./Checkbox.types";
import { Checkbox } from ".";
import { Meta, StoryFn } from "@storybook/react";

const meta = {
  title: "Inputs/Checkbox",
  component: Checkbox.Confirm,
  args: {
    label: "I'm a checkbox with a confirm modal",
    checked: false,
    disabled: false,
    onValueChange: () => {},
  },
} satisfies Meta<typeof Checkbox.Confirm>;

export default meta;

type Story = StoryFn<typeof Checkbox.Confirm>;

export const WithConfirm: Story = (args) => {
  const [isChecked, setChecked] = useState(args.checked);

  useEffect(() => {
    setChecked(args.checked);
  }, [args.checked]);

  return (
    <Checkbox.Confirm
      {...args}
      checked={isChecked}
      onValueChange={value => {
        action("onValueChange")(value);
        setChecked(value);
      }}
      confirmModalProps={{
        children: "I'm the confirm checkbox confirmation message",
        onConfirm: () => {
          action("onOk")();
          setChecked(true);
        },
      }}
    />
  );
};
