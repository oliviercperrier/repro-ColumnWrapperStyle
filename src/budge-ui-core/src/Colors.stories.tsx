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
      .filter(([_, values]) => typeof values === "object")
      .map(([colorName, values]) => (
        <Stack.Horizontal>
          {Object.entries(values).map(([key, color], index) => {
            const isDefault = key === "DEFAULT";

            return (
              <Stack
                r="lg"
                bw="sm"
                bc={isDefault ? "dark" : "transparent"}
                py="sm"
                alignItems="center"
                spacing="xs"
                w={85}
              >
                <Box
                  style={{
                    backgroundColor: color,
                  }}
                  h={40}
                  w={40}
                  r="full"
                />
                <Text size="sm">{isDefault ? "DEFAULT" : `${colorName} ${index}`}</Text>
                <Text size="sm" lh="normal" color="secondary">
                  {color.toUpperCase()}
                </Text>
              </Stack>
            );
          })}
        </Stack.Horizontal>
      ))}
  </Stack>
);
