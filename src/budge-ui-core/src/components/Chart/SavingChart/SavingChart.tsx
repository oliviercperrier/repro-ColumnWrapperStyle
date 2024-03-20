import { TColor, useTheme } from "@budgeinc/budge-ui-styling";
import React, { useState } from "react";
import { Line, Svg } from "react-native-svg";
import { Stack } from "../../Stack";
import { Text } from "../../Text";
import { SavingChartDataItem } from "./SavingChart.types";
import { getYRange } from "./utils";
import SavingChartSerie from "./SavingChart.Series";
import SavingChartLegend from "./SavingChart.Legend";
import { Box } from "../../Box";

export type TSavingChartProps = {
  axisLeftTitle: string;
  axisRightTitle: string;
  height?: number;
  currentData?: SavingChartDataItem[];
  currentDataColor?: TColor;
  newData?: SavingChartDataItem[];
  newDataColor?: TColor;
  showLegend?: boolean;
  currentDataTitle?: string;
  newDataTitle?: string;
  scalingMax?: number;
};

const SavingChart = ({
  axisLeftTitle,
  axisRightTitle,
  height = 150,
  currentData = [],
  currentDataColor = "orange",
  scalingMax,
  newData = [],
  newDataColor = "primary",
  currentDataTitle = "Current Balance",
  newDataTitle = "Recurring Transfers",
  showLegend = true,
  ...rest
}: TSavingChartProps) => {
  const theme = useTheme();
  const [layoutWidth, setLayoutWidth] = useState(0);
  const yRange = getYRange({
    allData: [...currentData, ...newData],
    height,
    scalingMax,
  });
  const newDataThemeGradientColor: [string, string] = [
    theme.fn.themeColor({
      color: newDataColor,
      shade: 4,
    }),
    "#FFF",
  ];
  const currentDataThemeColor = theme.fn.themeColor({
    color: currentDataColor,
    shade: 6,
  });

  if (height < 150) {
    throw Error("Height must be equal or higher than 150px");
  }

  return (
    <Box onLayout={({ nativeEvent }) => setLayoutWidth(nativeEvent.layout.width)} {...rest}>
      <Box h={height}>
        {layoutWidth ? (
          <Svg width={layoutWidth} height={height}>
            {newData.length > 0 && (
              <SavingChartSerie
                id="newDataSerie"
                data={newData}
                yRange={yRange}
                height={height}
                layoutWidth={layoutWidth}
                textColor={theme.fn.themeColor({
                  color: newDataColor,
                  shade: 5,
                })}
                fillColor={theme.fn.themeColor({
                  color: newDataColor,
                  shade: 4,
                })}
                gradientColors={newDataThemeGradientColor}
              />
            )}
            {currentData.length > 0 && (
              <SavingChartSerie
                id="currentDataSerie"
                data={currentData}
                yRange={yRange}
                height={height}
                layoutWidth={layoutWidth}
                textColor={theme.palette.textColor.secondary}
                fillColor={currentDataThemeColor}
              />
            )}
            <Line
              x1="0"
              y1={height}
              x2={layoutWidth}
              y2={height}
              stroke={theme.palette.colors.gray[4]}
              strokeWidth="2"
            />
          </Svg>
        ) : null}
      </Box>
      <Stack.Horizontal mt="xs" justifyContent="space-between">
        <Text color="textSecondary">{axisLeftTitle}</Text>
        <Text color="textSecondary">{axisRightTitle}</Text>
      </Stack.Horizontal>
      {showLegend && (
        <SavingChartLegend
          mt="md"
          newDataTitle={newDataTitle}
          newDataGradientColor={newDataThemeGradientColor}
          hasNewData={newData.length > 0}
          currentDataTitle={currentDataTitle}
          currentDataColor={currentDataThemeColor}
          hasCurrentData={currentData.length > 0}
        />
      )}
    </Box>
  );
};

export default SavingChart;
