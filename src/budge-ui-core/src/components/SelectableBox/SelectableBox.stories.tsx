import React, { useEffect, useState } from "react";

import { CardIcon, RoundIcon } from "../Icons";
import { Stack } from "../Stack";
import { Text } from "../Text";
import SelectableBox from "./SelectableBox";
import { Meta, StoryFn } from "@storybook/react";

const meta = {
  title: "Misc/Selectable Box",
  component: SelectableBox,
  args: {
    isSelected: false,
    disabled: false,
  },
} satisfies Meta<typeof SelectableBox>;

export default meta;

type Story = StoryFn<typeof SelectableBox>;

export const Default: Story = (args) => {
  const [isSelected, setSelected] = useState(false);

  useEffect(() => {
    setSelected(args.isSelected);
  }, [args.isSelected]);

  return (
    <SelectableBox
      {...args}
      style={{ maxWidth: 350 }}
      selectedColor="primary"
      isSelected={isSelected}
      onPress={() => setSelected(!isSelected)}
    >
      <Stack.Horizontal alignItems="center">
        <RoundIcon icon={CardIcon} color={isSelected ? "primary" : undefined} />
        <Text selectable={false}>Mastercard **** **** **** 4444</Text>
      </Stack.Horizontal>
    </SelectableBox>
  );
};
