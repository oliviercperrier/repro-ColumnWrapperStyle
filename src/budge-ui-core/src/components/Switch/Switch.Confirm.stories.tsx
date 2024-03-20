import React, { useState, useEffect } from "react";

import { action } from "@storybook/addon-actions";
import { Switch } from ".";
import { TSwitchConfirmProps } from "./Switch.types";

type TSwitchConfirmPropsKeys = (keyof TSwitchConfirmProps)[];

const DefaultFields: TSwitchConfirmPropsKeys = ["label", "checked", "disabled"];

const SwitchConfirmMeta: ComponentMeta<typeof Switch.Confirm> = {
  title: "Inputs/Switch",
  component: Switch.Confirm,
  args: {
    label: "I'm a checkbox with a confirm modal",
    checked: false,
    disabled: false,
    onValueChange: () => {},
  },
  parameters: {
    controls: {
      include: DefaultFields,
    },
  },
};

export default SwitchConfirmMeta;

type SwitchConfirmStory = ComponentStory<typeof Switch.Confirm>;

export const WithConfirm: SwitchConfirmStory = args => {
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
