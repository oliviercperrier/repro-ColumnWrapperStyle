import { useTheme } from "@budgeinc/budge-ui-styling";
import React from "react";
import { Stack, Text } from "@budgeinc/budge-ui-core";

const ColorsMeta = {
  title: "Theme",
  args: {},
  parameters: {},
  decorators: [(Story: any) => <>{Story()}</>],
};

export default ColorsMeta;

export const Default: any = () => {
  const theme = useTheme();

  return (
    <Stack>
      <Text fw="500" variant="titleH2">Default Theme</Text>
      <Text
        p={24}
        color="white"
        style={{
          backgroundColor: "#2c2d26",
          fontWeight: "400",
          padding: 12,
          borderRadius: 8,
        }}
      >
        {JSON.stringify(theme, null, 4)}
      </Text>
    </Stack>
  );
};
