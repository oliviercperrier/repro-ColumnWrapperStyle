import { SavingChartDataItem } from "./SavingChart.types";

export const titleFontSize = 14;

export const getYRange = ({
  allData,
  height,
  scalingMax = 0,
}: {
  allData: SavingChartDataItem[];
  height: number;
  scalingMax?: number;
}): [number, number] => {
  const max = Math.max(scalingMax, ...allData.map(({ y }) => y));

  return [0, max + max * ((titleFontSize + 7.5) / height)];
};

export const yScale = (value: number, height: number, yRange: number[]) => {
  const yRatio = height / (yRange[1] - yRange[0]);
  return height - value * yRatio;
};

export const getAreaCoords = (height: number, layoutWidth: number, yRange: number[], data: SavingChartDataItem[]) => {
  const dataCoords = data.map(value => dataToCoord(value, height, layoutWidth, yRange, data));

  const areaCoords = [
    `0,${height}`,
    ...dataCoords.map(coord => `${coord.x},${coord.y}`),
    `${layoutWidth},${height}`,
  ].join(" ");

  return {
    areaCoords,
    dataCoords,
  };
};

export const dataToCoord = (
  d: SavingChartDataItem,
  height: number,
  layoutWidth: number,
  yRange: number[],
  data: SavingChartDataItem[]
) => {
  const xRange = [0, data.length - 1];

  const x = ((d.x - xRange[0]) / (xRange[1] - xRange[0])) * layoutWidth;
  const y = height - ((d.y - yRange[0]) / (yRange[1] - yRange[0])) * height;

  return {
    x,
    y,
  };
};
