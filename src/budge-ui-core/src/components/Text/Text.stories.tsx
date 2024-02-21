import React from "react";

import { Stack } from "../Stack";
import Text from "./Text";
import { Meta, StoryFn, StoryObj } from "@storybook/react";

const meta = {
  title: "General/Text",
  component: Text,
  args: {},
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryFn<typeof meta>;

export const Basic: Story = () => (
  <Stack>
    <Text size="xs">Text xs</Text>
    <Text size="sm">Text sm</Text>
    <Text size="md">Text md</Text>
    <Text size="lg">Text lg</Text>
    <Text size="xl">Text xl</Text>
    <Text size="2xl">Text 2xl</Text>
    <Text size="3xl">Text 3xl</Text>
    <Text size="4xl">Text 4xl</Text>
    <Text size="5xl">Text 5xl</Text>
    <Text size="6xl">Text 6xl</Text>
    <Text size="7xl">Text 7xl</Text>
    <Text size="8xl">Text 8xl</Text>
    <Text size="9xl">Text 9xl</Text>
    <Text fw={100}>Bold 100</Text>
    <Text fw={200}>Bold 200</Text>
    <Text fw={300}>Bold 300</Text>
    <Text fw={400}>Bold 400</Text>
    <Text fw={500}>Bold 500</Text>
    <Text fw={600}>Bold 600</Text>
    <Text fw={700}>Bold 700</Text>
    <Text fw={800}>Bold 800</Text>
    <Text fw={900}>Bold 900</Text>
    <Text fs="italic">Italic</Text>
    <Text tdl="underline">Underline</Text>
    <Text tdl="line-through">Line Through</Text>
    <Text color="secondary">Color Secondary</Text>
    <Text color="red">Color Red</Text>
    <Text color="primary">Color Primary</Text>
    <Text tt="uppercase">uppercase text</Text>
    <Text tt="capitalize">capitalized text</Text>
    <Text ta="center">Align Center</Text>
    <Text ta="right">Align Right</Text>
  </Stack>
);
