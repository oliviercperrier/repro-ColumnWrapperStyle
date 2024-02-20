import { baseColors } from "@budgeinc/budge-ui-styling";
import React from "react";
import { Box, Stack, Text } from "@budgeinc/budge-ui-core";
import type { Meta, StoryFn, StoryObj } from "@storybook/react";

const meta = {
  title: "Colors",
  args: {},
} satisfies Meta;

export default meta;

type Story = StoryFn<typeof meta>;

export const Default: Story = () => (
  <Stack spacing="xl">
    {Object.entries(baseColors)
      .filter(([colorName, values]) => typeof values === "object")
      .map(([colorName, values]) => (
        <Stack.Horizontal>
          {Object.values(values).map((color, index) => (
            <Stack spacing="xs" w={85}>
              <Box
                style={{
                  backgroundColor: color,
                }}
                h={40}
                w={40}
                r="full"
              />
              <Text size="sm">
                {colorName} {index}
              </Text>
              <Text size="sm" lh="normal" color="secondary">
                {color}
              </Text>
            </Stack>
          ))}
        </Stack.Horizontal>
      ))}
  </Stack>
);
