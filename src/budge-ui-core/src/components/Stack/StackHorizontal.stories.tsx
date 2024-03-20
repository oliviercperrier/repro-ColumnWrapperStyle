
import React from "react";
import { Box } from "../Box";
import { TStackHorizontalProps } from "./Stack.types";
import { Stack } from ".";

type TStackPropsKeys = (keyof TStackHorizontalProps)[];

const DefaultFields: TStackPropsKeys = ["spacing", "justifyContent"];

const StackHorizontalMeta: ComponentMeta<typeof Stack.Horizontal> = {
  title: "Layout/Stack/Horizontal",
  component: Stack,
  args: {
    spacing: "sm",
    justifyContent: "flex-start",
  },
  parameters: {
    controls: {
      include: DefaultFields,
    },
  },
};

export default StackHorizontalMeta;

type StackStory = ComponentStory<typeof Stack.Horizontal>;

export const Default: StackStory = args => (
  <Stack.Horizontal {...args}>
    <Box h={50} w={100} bg="dark" />
    <Box h={50} w={100} bg="dark" />
    <Box h={50} w={100} bg="dark" />
    <Box h={50} w={100} bg="dark" />
    <Box h={50} w={100} bg="dark" />
  </Stack.Horizontal>
);
