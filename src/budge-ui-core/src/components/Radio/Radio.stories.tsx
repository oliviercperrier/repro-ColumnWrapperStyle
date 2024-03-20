import { action } from "@storybook/addon-actions";
import React, { useEffect, useState } from "react";

import Radio, { TRadioProps } from "./Radio";
import { TFormItemValueTypes } from "../Form";
import RadioGroup from "./RadioGroup";
import { Meta, StoryFn } from "@storybook/react";

const meta = {
  title: "Inputs/Radio",
  component: Radio,
  args: {
    label: "I'm radio button 1",
    value: "value_1",
    disabled: false,
    onValueChange: () => {},
  },
} satisfies Meta<typeof Radio>;

export default meta;

type Story = StoryFn<typeof Radio>;

export const Default: Story = (args) => {
  const [checked, setChecked] = useState(args.value);

  useEffect(() => {
    setChecked(!!args.value);
  }, [args.value]);

  return (
    <Radio
      {...args}
      onValueChange={value => {
        action("onValueChange")(value);
        setChecked(value);
      }}
      status={checked === args.value ? "checked" : "unchecked"}
    />
  );
};

export const Group: Story = (args) => {
  const [value, setValue] = React.useState<TFormItemValueTypes>("");

  useEffect(() => {
    setValue(args.value);
  }, [args.value]);

  return (
    <RadioGroup
      onValueChange={newValue => {
        action("onValueChange")(newValue);
        setValue(newValue);
      }}
      value={value}
      options={[
        { label: "I'm radio button 1", value: "value1" },
        { label: "I'm radio button 2", value: "value2" },
      ]}
    />
  );
};
