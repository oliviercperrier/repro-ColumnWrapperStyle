import React from "react";
import { View } from "react-native";
import { useDisclosure } from "@budgeinc/budge-ui-hooks";
import LineChart, { TLineChartProps } from "./LineChart";
import { ChartCurveType } from "../Chart.type";
import { Stack } from "../../Stack";
import { Text } from "../../Text";
import { Button } from "../../Button";
import { Modal } from "../../Modal";
import { Meta, StoryFn } from "@storybook/react";

const meta = {
  title: "Data Display/Charts/Line Chart",
  component: LineChart,
  args: {
    curveType: "monotone",
    showCursor: false,
    data: [
      { x: 0, y: 0 },
      { x: 1, y: 1500 },
      { x: 2, y: 1250 },
      { x: 3, y: 1858 },
      { x: 4, y: 23402 },
      { x: 5, y: 2500 },
      { x: 6, y: 2400 },
      { x: 7, y: 2867 },
    ],
  } as TLineChartProps,
} satisfies Meta<typeof LineChart>;

export default meta;

type Story = StoryFn<typeof LineChart>;

export const Default: Story = (args) => {
  console.log(args)


  return  <View
  style={{
    width: "100%",
    maxWidth: 500,
    paddingHorizontal: 12,
  }}
>
  <LineChart height={150} {...args} />
</View>
}

export const InModal: Story = () => {
  const [open, handlers] = useDisclosure();

  return (
    <>
      <Button title="Open" onPress={handlers.open} />
      <Modal opened={open} onClose={handlers.close}>
        <LineChart
          height={150}
          showCursor
          data={[
            { x: 0, y: 0 },
            { x: 1, y: 1500 },
            { x: 2, y: 1250 },
            { x: 3, y: 1858 },
            { x: 4, y: 23402 },
            { x: 5, y: 2500 },
            { x: 6, y: 2400 },
            { x: 7, y: 2867 },
          ]}
          renderTooltip={({ x, y }) => (
            <Stack bg="dark.7" p="sm">
              <Text color="white">Y: {y}</Text>
              <Text color="white">X: {x}</Text>
            </Stack>
          )}
        />
      </Modal>
    </>
  );
};
