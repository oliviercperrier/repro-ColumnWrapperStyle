import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import SurveyScale, { TSurveyScaleProps } from "./SurveyScale";
import { Box } from "../Box";
import { Meta, StoryFn } from "@storybook/react";

const meta = {
  title: "Inputs/Survey Scale",
  component: SurveyScale,
  args: {
    maxValue: 10,
    minValueLabel: "Not Confident",
    maxValueLabel: "Totally Confident",
    readOnly: false,
    value: 0
  },
} satisfies Meta<typeof SurveyScale>;

export default meta;

type Story = StoryFn<typeof SurveyScale>;

export const Default: Story = ({args}) => {
  const [value, setValue] = useState<number>();

  return (
    <Box maw={500}>
      <SurveyScale
        {...args}
        value={value || args.value}
        onValueChange={newValue => {
          action("onValueChange")(newValue);
          setValue(newValue);
        }}
      />
    </Box>
  );
};
