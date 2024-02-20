import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { Switch } from "../Switch";
import { Box } from "../Box";

const meta = {
  title: "Inputs/Switch",
  component: Switch,
  args: {
    size: "md",
    disabled: false
  },
  decorators: [
    Story => (
      <Box alignItems="start">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryFn<typeof meta>;

export const Basic: Story = args => {
  const [checked, setChecked] = useState(false);

  console.log(args)

  return <Switch checked={checked} onChange={setChecked} {...args} />;
};
