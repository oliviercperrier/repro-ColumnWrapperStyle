import React, { useState, useEffect } from "react";
import { action } from "@storybook/addon-actions";
import { Checkbox, TCheckboxProps } from "../Checkbox";
import { TFormItemValueTypes } from "../Form";
import { Meta, StoryFn } from "@storybook/react";

const meta = {
  title: "Inputs/Checkbox",
  component: Checkbox,
  args: {
    label: "I'm a checkbox",
    checked: false,
    disabled: false,
    onValueChange: () => {},
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryFn<typeof meta>;

export const Basic: Story = ({ args }) => {
  const [isChecked, setChecked] = useState<boolean>(args.checked);

  useEffect(() => {
    if (args.checked !== isChecked) {
      setChecked(args.checked);
    }
  }, [args.checked]);

  return (
    <Checkbox
      {...args}
      checked={isChecked}
      onValueChange={value => {
        action("onValueChange")(value);
        setChecked(!!value);
      }}
    />
  );
};

export const Group: Story = () => {
  const [value, setValue] = React.useState<TFormItemValueTypes[]>([]);

  return (
    <Checkbox.Group
      onValueChange={newValue => {
        action("onValueChange")(newValue);
        setValue(newValue);
      }}
      value={value}
      options={[
        { label: "I'm checkbox 1", value: "value1" },
        { label: "I'm checkbox 2", value: "value2" },
      ]}
    />
  );
};
