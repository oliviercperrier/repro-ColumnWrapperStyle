import { LayoutRectangle } from "react-native";
import React, { ReactNode, useState } from "react";
import { ChartCoordinates } from "./Chart.type";
import { Box } from "../Box";

interface OwnProps {
  scaleX(value: number): number;
  scaleY(value: number): number;
  chartWidth: number;
  svgContainer?: { left: number; top: number };
  cursorPosition: ChartCoordinates | null | undefined;
  renderContent(coordinates: ChartCoordinates): ReactNode;
}

const ChartTooltip = ({ svgContainer, chartWidth, cursorPosition, scaleX, scaleY, renderContent }: OwnProps) => {
  const [tooltipLayout, setTooltipLayout] = useState<LayoutRectangle>();

  if (!cursorPosition) return null;

  const rightPositioned = chartWidth - (scaleX(cursorPosition?.x) + (tooltipLayout?.width || 50)) < 50;

  return (
    <Box
      sx={theme => ({
        opacity: tooltipLayout ? 1 : 0,
        position: "absolute",
        overflow: "hidden",
        borderRadius: 5,
        shadowOpacity: 1,
        shadowRadius: 8,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        elevation: 5,
        shadowColor: theme.palette.colors.gray[2],
        top: scaleY(cursorPosition.y) + (svgContainer ? svgContainer.top : 0),
        left: rightPositioned
          ? scaleX(cursorPosition.x) + (svgContainer ? svgContainer.left : 0) - (tooltipLayout?.width || 50) - 12
          : scaleX(cursorPosition.x) + (svgContainer ? svgContainer.left : 0) + 12,
      })}
      onLayout={e => setTooltipLayout(e.nativeEvent.layout)}
    >
      {renderContent(cursorPosition)}
    </Box>
  );
};

export default ChartTooltip;
