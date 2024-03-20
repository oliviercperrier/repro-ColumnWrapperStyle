import { useTheme } from "@budgeinc/budge-ui-styling";
import { formatMoney } from "@budgeinc/budge-ui-utils";
import React from "react";
import { Platform } from "react-native";
import { Line, Polygon, Text as SvgText } from "react-native-svg";
import { SavingChartDataItem } from "./SavingChart.types";
import { titleFontSize, getAreaCoords, yScale } from "./utils";
import Gradient from "./SavingChart.Gradient";

const SavingChartSerie = ({
  id,
  data,
  yRange,
  height,
  layoutWidth,
  textColor,
  fillColor,
  gradientColors,
}: {
  id: string;
  data: SavingChartDataItem[];
  yRange: [number, number];
  height: number;
  layoutWidth: number;
  textColor: string;
  fillColor: string;
  gradientColors?: [string, string];
}) => {
  const theme = useTheme();
  const maxY = Math.max(...data.map(({ y }) => y));
  const coords = getAreaCoords(height, layoutWidth, yRange, data);

  return (
    <>
      <SvgText
        x="0"
        y={yScale(maxY, height, yRange) - 8}
        textAnchor="start"
        fill={textColor}
        fontSize={titleFontSize}
        fontFamily={
          Platform.OS === "web"
            ? `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`
            : undefined
        }
      >
        {formatMoney({
          amountCents: maxY,
          minFractionDigits: 0,
          maxFractionDigits: 0,
        })}
      </SvgText>
      <Line
        x1="0"
        y1={yScale(maxY, height, yRange)}
        x2={layoutWidth}
        y2={yScale(maxY, height, yRange)}
        stroke={theme.palette.colors.gray[4]}
        strokeDasharray="4 4"
        strokeWidth="1"
      />
      {gradientColors ? (
        <>
          <Gradient id={id} colors={gradientColors} />
          <Polygon points={coords.areaCoords} fill={`url(#${id})`} />
        </>
      ) : (
        <Polygon opacity={0.6} points={coords.areaCoords} fill={fillColor} />
      )}
    </>
  );
};

export default SavingChartSerie;
