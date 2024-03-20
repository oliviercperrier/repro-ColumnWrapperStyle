
import React, { useState } from "react";

import { action } from "@storybook/addon-actions";
import { Switch } from "../Switch";
import { TSwitchProps } from "./Switch.types";

type TSwitchPropsKeys = (keyof TSwitchProps)[];

const DefaultFields: TSwitchPropsKeys = ["disabled", "color", "size", "label"];

const SwitchMeta: ComponentMeta<typeof Switch> = {
  title: "Inputs/Switch",
  component: Switch,
  args: {
    size: "md",
    color: "primary",
    disabled: false,
    label: "This is a switch",
  },
  parameters: {
    controls: {
      include: DefaultFields,
    },
  },
};

export default SwitchMeta;

type SwitchStory = ComponentStory<typeof Switch>;

export const Default: SwitchStory = args => {
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
