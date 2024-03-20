import { action } from "@storybook/addon-actions";
import React, { useEffect, useState } from "react";


import Radio, { TRadioProps } from "./Radio";
import { TFormItemValueTypes } from "../Form";
import RadioGroup from "./RadioGroup";

type TRadioPropsKeys = (keyof TRadioProps)[];

const DefaultFields: TRadioPropsKeys = ["label", "value", "disabled"];

const RadioMeta: ComponentMeta<typeof Radio> = {
  title: "Inputs/Radio",
  component: Radio,
  args: {
    label: "I'm a radio button",
    value: "",
    disabled: false,
    onValueChange: () => {},
  },
  parameters: {
    controls: {
      include: DefaultFields,
    },
  },
};

export default RadioMeta;

type RadioStory = ComponentStory<typeof Radio>;

export const Default: RadioStory = args => {
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
Default.args = { label: "I'm radio button 1", value: "value_1" };

export const Group: RadioStory = args => {
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
