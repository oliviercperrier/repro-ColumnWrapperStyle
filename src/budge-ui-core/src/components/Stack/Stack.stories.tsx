
import React from "react";
import { Box } from "../Box";
import Stack from "./Stack";
import { TStackProps } from "./Stack.types";

type TStackPropsKeys = (keyof TStackProps)[];

const DefaultFields: TStackPropsKeys = ["spacing", "alignItems"];

const StackMeta: ComponentMeta<typeof Stack> = {
  title: "Layout/Stack/Vertical",
  component: Stack,
  args: {
    spacing: "sm",
    alignItems: "flex-start",
  },
  parameters: {
    controls: {
      include: DefaultFields,
    },
  },
};

export default StackMeta;

type StackStory = ComponentStory<typeof Stack>;

export const Default: StackStory = args => (
  <Stack {...args}>
    <Box h={50} w={100} bg="dark" />
    <Box h={50} w={100} bg="dark" />
    <Box h={50} w={100} bg="dark" />
    <Box h={50} w={100} bg="dark" />
    <Box h={50} w={100} bg="dark" />
    <Box h={50} w={100} bg="dark" />
  </Stack>
);
