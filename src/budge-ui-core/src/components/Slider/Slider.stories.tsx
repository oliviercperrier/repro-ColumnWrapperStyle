import React from "react";

import { action } from "@storybook/addon-actions";
import Slider, { TSliderProps } from "./Slider";

type TSliderPropsKeys = (keyof TSliderProps)[];

const DefaultFields: TSliderPropsKeys = [
  "thumbSize",
  "trackSize",
  "step",
  "minimumValue",
  "maximumValue",
  "thumbColor",
  "minimumTrackTintColor",
  "maximumTrackTintColor",
];

const SliderMeta: ComponentMeta<typeof Slider> = {
  title: "Inputs/Slider",
  component: Slider,
  args: {
    thumbSize: "md",
    trackSize: "md",
    thumbColor: "primary",
    minimumTrackTintColor: "primary.2",
    maximumTrackTintColor: "gray.1",
    step: 1,
    minimumValue: 0,
    maximumValue: 100,
  },
  parameters: {
    controls: {
      include: DefaultFields,
    },
  },
  decorators: [(Story: any) => Story()],
};

export default SliderMeta;

type SliderStory = ComponentStory<typeof Slider>;

export const Default: SliderStory = args => <Slider onSlidingComplete={action("onSlidingCompleted")} {...args} />;
