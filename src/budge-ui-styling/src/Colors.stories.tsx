import { DEFAULT_COLORS } from "@budgeinc/budge-ui-styling";
import React from "react";
import { Box, Stack, Text } from "@budgeinc/budge-ui-core";

const ColorsMeta = {
  title: "Colors",
  args: {},
  parameters: {},
  decorators: [(Story: any) => <>{Story()}</>],
};

export default ColorsMeta;

export const Default: any = () => (
  <Stack spacing="xl">
    {Object.entries(DEFAULT_COLORS).map(([colorName, values]) => (
      <Stack.Horizontal>
        {values.map((color, index) => (
          <Stack spacing="xs" w={85}>
            <Box bg={color} h={40} w={40} sx={{ borderRadius: 5 }} />
            <Text variant="labelSmall">
              {colorName} {index}
            </Text>
            <Text fz={10} lh={12} color="textSecondary">
              {color}
            </Text>
          </Stack>
        ))}
      </Stack.Horizontal>
    ))}
  </Stack>
);
