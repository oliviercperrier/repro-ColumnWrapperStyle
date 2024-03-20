import React, { useState } from "react";

import { action } from "@storybook/addon-actions";
import ToggleGroup, { TToggleGroupProps } from "./ToggleGroup";
import { Stack } from "../Stack";
import { CalendarIcon, GridIcon, InsightIcon, TMemoRefIconProps } from "../Icons";
import { Text } from "../Text";
import { Meta, StoryFn } from "@storybook/react";

const meta = {
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
} satisfies Meta<typeof ToggleGroup>;

export default meta;

type Story = StoryFn<typeof ToggleGroup>;

export const Default: Story = (args) => {
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

export const CustomLabel: Story = () => {
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
