import { scaleLinear } from "d3-scale";
import { curveLinear, curveMonotoneX } from "d3-shape";
import { ChartCoordinates, ChartCurveType } from "../Chart.type";

interface IGetScalingFuncParams {
  data: ChartCoordinates[];
  chartWidth: number;
  chartHeight: number;
}

type TScaleFunc = (value: number) => number;

export const CursorSize = 4;

export const getScalingFunc = ({
  data,
  chartHeight,
  chartWidth,
}: IGetScalingFuncParams): {
  scaleX: TScaleFunc;
  scaleY: TScaleFunc;
} => {
  const yValues = data.map(item => item.y);
  const xValues = data.map(item => item.x);

  const scaleX = scaleLinear()
    .domain([Math.min(...xValues), Math.max(...xValues)])
    .range([CursorSize, chartWidth - CursorSize]);

  const scaleY = scaleLinear()
    .domain([Math.min(...yValues), Math.max(...yValues)])
    .range([chartHeight - CursorSize, CursorSize]);

  return {
    scaleX,
    scaleY,
  };
};

export const getCurveFunc = (curveType: ChartCurveType | undefined) => {
  switch (curveType) {
    case "linear":
      return curveLinear;
    case "monotone":
      return curveMonotoneX;
    default:
      return curveLinear;
  }
};

export const findClosestPoint = (
  data: ChartCoordinates[],
  coord: ChartCoordinates,
  scaleX: TScaleFunc,
  scaleY: TScaleFunc
): ChartCoordinates | null => {
  let closestPoint: ChartCoordinates | null = null;
  let minDistance = 10;

  data.forEach(point => {
    const distanceX = Math.abs(scaleX(point.x) - coord.x);
    const distanceY = Math.abs(scaleY(point.y) - coord.y);

    if (distanceX < minDistance && distanceY < minDistance) {
      closestPoint = point;
    }
  });

  return closestPoint;
};
