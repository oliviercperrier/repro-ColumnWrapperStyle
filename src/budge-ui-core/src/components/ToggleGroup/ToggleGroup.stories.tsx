
import React, { useState } from "react";

import { action } from "@storybook/addon-actions";
import ToggleGroup, { TToggleGroupProps } from "./ToggleGroup";
import { Stack } from "../Stack";
import { CalendarIcon, GridIcon, InsightIcon, TMemoRefIconProps } from "../Icons";
import { Text } from "../Text";

type TSliderPropsKeys = (keyof TToggleGroupProps)[];

const DefaultFields: TSliderPropsKeys = ["options", "animated"];

const ToggleGroupMeta: ComponentMeta<typeof ToggleGroup> = {
  title: "Inputs/ToggleGroup",
  component: ToggleGroup,
  args: {
    animated: true,
    options: [
      {
        label: "Yes",
        value: "yes",
      },
      {
        label: "No",
        value: "no",
      },
      {
        label: "Maybe",
        value: "maybe",
      },
      {
        label: "Ok",
        value: "ok",
      },
    ],
  },
  parameters: {
    controls: {
      include: DefaultFields,
    },
  },
};

export default ToggleGroupMeta;

type ToggleGroupStory = ComponentStory<typeof ToggleGroup>;

export const Default: ToggleGroupStory = args => {
  const [value, setValue] = useState<any>("maybe");

  return (
    <ToggleGroup
      {...args}
      style={{ maxWidth: 500 }}
      value={value}
      onValueChange={val => {
        setValue(val);
        action("onValueChange")(val);
      }}
    />
  );
};

export const CustomLabel: ToggleGroupStory = () => {
  const [value, setValue] = useState<any>("dashboard");

  const renderLabel = (active: boolean, title: string, Icon: TMemoRefIconProps) => (
    <Stack.Horizontal alignItems="center">
      <Icon color={active ? "primary" : "gray.4"} />
      <Text variant="bodyMedium" color={active ? "default" : "textSecondary"}>
        {title}
      </Text>
    </Stack.Horizontal>
  );

  return (
    <ToggleGroup
      options={[
        {
          label: active => renderLabel(active, "Dashboard", InsightIcon),
          value: "dashboard",
        },
        {
          label: active => renderLabel(active, "Accounts", GridIcon),
          value: "accounts",
        },
        {
          label: active => renderLabel(active, "Payments", CalendarIcon),
          value: "payments",
        },
      ]}
      style={{ maxWidth: 500 }}
      value={value}
      h={50}
      onValueChange={val => {
        setValue(val);
        action("onValueChange")(val);
      }}
    />
  );
};
