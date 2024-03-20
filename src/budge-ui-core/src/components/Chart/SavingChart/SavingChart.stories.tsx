import React, { useState } from "react";
import { View } from "react-native";
import SavingChart, { TSavingChartProps } from "./SavingChart";
import { SavingChartDataItem } from "./SavingChart.types";
import { Button } from "../../Button";
import { Meta, StoryFn } from "@storybook/react";

const meta = {
  title: "Data Display/Charts/Saving Chart",
  component: SavingChart,
  args: {
    axisLeftTitle: "Today",
    axisRightTitle: "12 months",
    currentData: [
      { x: 0, y: 1000 },
      { x: 1, y: 1500 },
      { x: 2, y: 2000 },
      { x: 3, y: 2500 },
      { x: 4, y: 3000 },
      { x: 5, y: 3500 },
    ],
    newData: [
      { x: 0, y: 2000 },
      { x: 1, y: 2500 },
      { x: 2, y: 3500 },
      { x: 3, y: 4500 },
      { x: 4, y: 5500 },
      { x: 5, y: 6500 },
    ],
  },
} satisfies Meta<typeof SavingChart>;

export default meta;

type Story = StoryFn<typeof SavingChart>;

export const Default: Story = (args) => {
  return (
    <View
      style={{
        width: "100%",
        maxWidth: 500,
        paddingHorizontal: 12,
      }}
    >
      <SavingChart height={200} {...args} />
    </View>
  );
};

export const WithScaling: Story = (args) => {
  const [amount, setAmount] = useState(0);

  return (
    <View
      style={{
        width: "100%",
        maxWidth: 500,
        paddingHorizontal: 12,
      }}
    >
      <SavingChart
        height={200}
        newData={getGraphData(amount)}
        axisLeftTitle="Today"
        axisRightTitle="12 months"
        scalingMax={5000}
      />
      <Button mt="xl" color="primary" title="increase" onPress={() => setAmount(prev => prev + 5)} />
    </View>
  );
};

const getGraphData = (amount: number) => {
  const data: SavingChartDataItem[] = [];

  if (!amount) return data;

  data.push({ x: 0, y: 0 });

  for (let i = 0; i < 12; i++) {
    data.push({ x: i + 1, y: (i * 4 + 4) * amount });
  }

  return data;
};
