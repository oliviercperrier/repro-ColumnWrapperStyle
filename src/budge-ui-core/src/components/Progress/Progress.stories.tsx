
import React from "react";

import { Stack } from "../Stack";
import Progress, { TProgressProps } from "./Progress";

type TProgressPropsKeys = (keyof TProgressProps)[];

const DefaultFields: TProgressPropsKeys = ["value", "size", "color"];

const ProgressMeta: ComponentMeta<typeof Progress> = {
  title: "Feedback/Progress",
  component: Progress,
  args: {
    color: "primary",
    size: "md",
    value: 75,
  },
  parameters: {
    controls: {
      include: DefaultFields,
    },
  },
  
};

export default ProgressMeta;

type ProgressStory = ComponentStory<typeof Progress>;

export const Default: ProgressStory = args => (
  <Stack spacing="md">
    <Progress {...args} color="default" />
    <Progress {...args} />
    <Progress {...args} color="brown" />
    <Progress {...args} color="red" />
    <Progress {...args} color="blue" />
    <Progress {...args} color="green" />
    <Progress {...args} color="yellow" />
    <Progress {...args} color="water" />
  </Stack>
);
