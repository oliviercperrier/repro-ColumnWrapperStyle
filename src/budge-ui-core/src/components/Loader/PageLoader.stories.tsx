import React from "react";
import { View } from "react-native";
import PageLoader from "./PageLoader";
import { Meta, StoryFn } from "@storybook/react";

const meta = {
  title: "Feedback/Loader/Page Loader",
  component: PageLoader,
  args: {
    spinnerSize: "lg",
    spinnerColor: "primary",
    title: "Now Loading",
  },
} satisfies Meta<typeof PageLoader>;

export default meta;

type Story = StoryFn<typeof PageLoader>;

export const Default: Story = (args) => (
  <View style={{ height: 650 }}>
    <PageLoader {...args} />
  </View>
);
