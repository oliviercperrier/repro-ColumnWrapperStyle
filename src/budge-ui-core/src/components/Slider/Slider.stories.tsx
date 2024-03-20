import React from "react";

import { action } from "@storybook/addon-actions";
import Slider from "./Slider";
import { Meta, StoryFn } from "@storybook/react";

const meta = {
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
    animationType: "timing"
  },
} satisfies Meta<typeof Slider>;

export default meta;

type Story = StoryFn<typeof Slider>;

export const Default: Story = (args) => <Slider onSlidingComplete={action("onSlidingCompleted")} {...args} />;
