import React from "react";
import { Circle, Svg } from "react-native-svg";
import { Stack } from "../../Stack";
import { Text } from "../../Text";
import Gradient from "./SavingChart.Gradient";
import { Grid } from "../../Grid";
import { DefaultProps } from "@budgeinc/budge-ui-styling";
import { ViewStyle } from "react-native";

export type SavingChartLegendProps = DefaultProps<ViewStyle> & {
  currentDataColor: string;
  currentDataTitle: string;
  hasCurrentData: boolean;
  newDataGradientColor: [string, string];
  newDataTitle: string;
  hasNewData: boolean;
};

const LegendDotWidth = 16;

const SavingChartLegend = ({
  hasCurrentData,
  currentDataColor,
  currentDataTitle,
  hasNewData,
  newDataGradientColor,
  newDataTitle,
  ...rest
}: SavingChartLegendProps) => (
  <Grid column={2} {...rest}>
    {hasCurrentData && (
      <Stack.Horizontal alignItems="center" f={1}>
        <Svg height={LegendDotWidth} width={LegendDotWidth}>
          <Circle cx={LegendDotWidth / 2} cy={LegendDotWidth / 2} r={LegendDotWidth / 2} fill={currentDataColor} />
        </Svg>
        <Text numberOfLines={2} f={1}>
          {currentDataTitle}
        </Text>
      </Stack.Horizontal>
    )}
    {hasNewData && (
      <Stack.Horizontal alignItems="center" f={1}>
        <Svg height={LegendDotWidth} width={LegendDotWidth}>
          <Gradient id="legendDot" colors={newDataGradientColor} />
          <Circle cx={LegendDotWidth / 2} cy={LegendDotWidth / 2} r={LegendDotWidth / 2} fill="url(#legendDot)" />
        </Svg>
        <Text numberOfLines={2} f={1}>
          {newDataTitle}
        </Text>
      </Stack.Horizontal>
    )}
  </Grid>
);

export default SavingChartLegend;
