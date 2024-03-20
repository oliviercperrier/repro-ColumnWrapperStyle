import React from "react";

import { Stack } from "../Stack";
import Text from "./Text";
import { Meta, StoryFn } from "@storybook/react";

const meta = {
  title: "General/Text",
  component: Text,
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryFn<typeof Text>;

export const Default: Story = () => (
  <Stack>
    <Text variant="bodySmall">Body Small</Text>
    <Text variant="bodyDefault">Body Default</Text>
    <Text variant="bodyMedium">Body Medium</Text>
    <Text variant="bodyLarge">Body Large</Text>
    <Text fw="500">Bold 500</Text>
    <Text fw="600">Bold 600</Text>
    <Text fw="700">Bold 700</Text>
    <Text fw="800">Bold 800</Text>
    <Text fs="italic">Italic</Text>
    <Text tdl="underline">Underline</Text>
    <Text tdl="line-through">Line Through</Text>
    <Text color="textSecondary">Color Secondary</Text>
    <Text color="red">Color Red</Text>
    <Text color="primary.3">Color Primary Shade #3</Text>
    <Text tt="uppercase">uppercase text</Text>
    <Text tt="capitalize">capitalized text</Text>
    <Text ta="center">Align Center</Text>
    <Text ta="right">Align Right</Text>
  </Stack>
);
