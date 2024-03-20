import React, { ReactNode, forwardRef, memo } from "react";
import { TColor } from "@budgeinc/budge-ui-styling";
import { View } from "react-native";
import { ChartCoordinates, ChartCurveType } from "../../Chart/Chart.type";
import { LineChart } from "../../Chart/LineChart";
import { Card, TCardProps } from "../../Card";
import { Box } from "../../Box";
import { Text } from "../../Text";
import { Stack } from "../../Stack";
import KpiVariationTag from "./KpiVariationTag";
import { ReactChild } from "../../../utils/types";

export type TKpiCardProps = TCardProps & {
  title: ReactChild;
  curveType?: ChartCurveType;
  value: number | string | (() => string);
  variationPercent: number;
  data: ChartCoordinates[];
  color?: TColor;
  loading?: boolean;
  extra?: ReactNode;
};

const KpiCard = forwardRef<View, TKpiCardProps>(
  ({ title, value, variationPercent = 0, curveType = "monotone", data, color, extra, ...props }, ref) => (
    <Card ref={ref} mih={265} p={0} sx={{ overflow: "hidden" }} contentProps={{ h: "100%" }} {...props}>
      <Stack justifyContent="space-between" spacing={0} h="100%">
        <Stack.Horizontal p={20} pb={0} justifyContent="space-between">
          <Stack spacing="xs" alignItems="flex-start" f={1}>
            {typeof title === "string" ? (
              <Text fw="500" variant="bodyLarge" numberOfLines={2}>
                {title}
              </Text>
            ) : (
              title
            )}
            <Text fw="700" fz={36} lh={40} numberOfLines={1}>
              {typeof value === "number" || typeof value === "string" ? value : value ? value() : 0}
            </Text>
            <KpiVariationTag mt="xs" variation={variationPercent} />
          </Stack>
          {extra}
        </Stack.Horizontal>
        <Box w="105%" ml={-5}>
          <LineChart color={color} curveType={curveType} height={75} data={data} showCursor={false} />
        </Box>
      </Stack>
    </Card>
  )
);

export default memo(KpiCard);
