import React, { ReactNode, useCallback, useId, useMemo, useState } from "react";
import { TColor, useTheme } from "@budgeinc/budge-ui-styling";
import { Circle, Path, Svg } from "react-native-svg";
import * as shape from "d3-shape";
import { PanResponder, Platform } from "react-native";
import { CursorSize, findClosestPoint, getCurveFunc, getScalingFunc } from "./utils";
import { ChartCoordinates, ChartCurveType } from "../Chart.type";
import { Box, TBoxProps } from "../../Box";
import Gradient from "../SavingChart/SavingChart.Gradient";
import ChartTooltip from "../ChartTooltip";
import { BPortal } from "../../Portal";

export type TLineChartProps = Omit<TBoxProps, "onLayout"> & {
  height?: number;
  data: ChartCoordinates[];
  color?: TColor;
  showDataPoint?: boolean;
  curveType?: ChartCurveType;
  gradientShade?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
} & (
    | {
        showCursor: true;
        renderTooltip(coord: ChartCoordinates): ReactNode;
      }
    | {
        showCursor: false;
        renderTooltip?: undefined;
      }
  );

const LineChart = ({
  data,
  height = 150,
  color = "primary",
  gradientShade = 2,
  showCursor = false,
  showDataPoint = false,
  curveType,
  renderTooltip,
  ...rest
}: TLineChartProps) => {
  const gradientId = useId();
  const theme = useTheme();
  const [width, setWidth] = useState(0);
  const [cursorPosition, setCursorPosition] = useState<ChartCoordinates | null>();
  const [svgContainer, setSvgContainer] = useState<{ top: number; left: number }>();

  const { scaleX, scaleY } = useMemo(
    () =>
      getScalingFunc({
        data,
        chartHeight: height,
        chartWidth: width,
      }),
    [data, height, width]
  );

  const dataSortedByX = data.sort((a, b) => a.x - b.x);

  const borderColor = theme.fn.themeColor({
    color,
    shade: theme.palette.primaryShade.light,
  });

  const gradientColors: [string, string] = [
    theme.fn.themeColor({
      color,
      shade: gradientShade,
    }),
    "#FFF",
  ];

  const linePath = shape
    .line<ChartCoordinates>()
    .x((d: ChartCoordinates) => scaleX(d.x))
    .y((d: ChartCoordinates) => scaleY(d.y))
    .curve(getCurveFunc(curveType))(dataSortedByX);

  const getChartWrapperProps = useCallback((): Partial<TBoxProps> => {
    if (!showCursor) return {};

    if (Platform.OS === "web") {
      const handleMouseEnter = (event: any) => {
        const { clientX, clientY } = event.nativeEvent;
        const svgBox = event.currentTarget.getBoundingClientRect();
        const x = clientX - svgBox.left;
        const y = clientY - svgBox.top;
        const closestPoint = findClosestPoint(dataSortedByX, { x, y }, scaleX, scaleY);

        setCursorPosition(closestPoint);
        setSvgContainer(svgBox);
      };

      const handleMouseLeave = () => {
        setCursorPosition(null);
      };

      return {
        // @ts-ignore
        onMouseMove: handleMouseEnter,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
      };
    }

    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: event => {
        const { locationX, locationY } = event.nativeEvent;
        const x = Math.round(locationX);
        const y = Math.round(locationY);
        const closestPoint = findClosestPoint(dataSortedByX, { x, y }, scaleX, scaleY);
        setCursorPosition(closestPoint);
      },
      onPanResponderEnd: () => {
        setCursorPosition(null);
      },
    });

    return {
      ...panResponder.panHandlers,
    };
  }, [dataSortedByX, scaleX, Platform.OS, showCursor]);

  return (
    <Box onLayout={({ nativeEvent }) => setWidth(nativeEvent.layout.width)} {...rest}>
      {width ? (
        <Box {...getChartWrapperProps()}>
          <Svg
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            style={{ maxWidth: "100%", overflow: "visible" }}
            preserveAspectRatio="none"
          >
            {linePath && dataSortedByX.length > 0 && (
              <>
                <Gradient id={gradientId} colors={gradientColors} />
                <Path
                  d={`${linePath} L ${width - CursorSize} ${height} L ${CursorSize} ${height}`}
                  fill={`url(#${gradientId})`}
                  strokeLinecap="round"
                />
                <Path d={linePath} fill="none" stroke={borderColor} strokeWidth="3" strokeLinecap="round" />
              </>
            )}
            {showCursor && cursorPosition && (
              <Circle cx={scaleX(cursorPosition.x)} cy={scaleY(cursorPosition.y)} r={CursorSize} fill={borderColor} />
            )}
            {showDataPoint && (
              <>
                {dataSortedByX.map(({ x, y }) => (
                  <Circle key={`marker-${x}-${y}`} cx={scaleX(x)} cy={scaleY(y)} r={3} fill={borderColor} />
                ))}
              </>
            )}
          </Svg>
          {showCursor && renderTooltip && (
            <BPortal>
              <ChartTooltip
                chartWidth={width}
                svgContainer={svgContainer}
                cursorPosition={cursorPosition}
                renderContent={renderTooltip}
                scaleX={scaleX}
                scaleY={scaleY}
              />
            </BPortal>
          )}
        </Box>
      ) : null}
    </Box>
  );
};

export default LineChart;
