import React, { useState } from "react";
import CodeInput from "./CodeInput";
import { Box } from "../../Box";
import { Meta, StoryFn } from "@storybook/react";

const meta = {
  title: "Inputs/CodeInput",
  component: CodeInput,
  args: {
    cellCount: 6,
  },
  decorators: [(Story: any) => <Box maw={500}>{Story()}</Box>],
} satisfies Meta<typeof CodeInput>;

export default meta;

type Story = StoryFn<typeof meta>;

export const Default: Story = ({ args }) => {
  const [value, setValue] = useState<number | null>(null);

  return (
    <Box maw={400}>
      <CodeInput value={value} onValueChange={setValue} autoFocus {...args} />
    </Box>
  );
};
