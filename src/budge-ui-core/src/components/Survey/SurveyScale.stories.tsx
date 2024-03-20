
import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import SurveyScale, { TSurveyScaleProps } from "./SurveyScale";
import { Box } from "../Box";

type TSurveyScalePropsKeys = (keyof TSurveyScaleProps)[];

const DefaultFields: TSurveyScalePropsKeys = ["maxValue", "maxValueLabel", "minValueLabel", "value", "readOnly"];

const SurveyScaleMeta: ComponentMeta<typeof SurveyScale> = {
  title: "Inputs/Survey Scale",
  component: SurveyScale,
  args: {
    maxValue: 10,
    minValueLabel: "Not Confident",
    maxValueLabel: "Totally Confident",
    readOnly: false,
  },
  parameters: {
    controls: {
      include: DefaultFields,
    },
  },
};

export default SurveyScaleMeta;

type SurveyScaleStory = ComponentStory<typeof SurveyScale>;

export const Default: SurveyScaleStory = args => {
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
