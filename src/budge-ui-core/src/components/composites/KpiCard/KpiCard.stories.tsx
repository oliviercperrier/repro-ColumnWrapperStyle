import React from "react";
import { formatMoney, formatNumber } from "@budgeinc/budge-ui-utils";
import { Pressable } from "react-native";
import KpiCard, { TKpiCardProps } from "./KpiCard";
import { Box } from "../../Box";
import { Grid } from "../../Grid";
import { Tooltip } from "../../Tooltip";
import { Text } from "../../Text";
import { Meta, StoryFn } from "@storybook/react";

const meta = {
  title: "Misc/Kpi Card",
  component: KpiCard,
  args: {
    title: "Total Users",
    value: () =>
      formatNumber({
        value: 95404,
      }),
    variationPercent: 4,
    data: [
      { x: 0, y: 0 },
      { x: 1, y: 1500 },
      { x: 2, y: 1250 },
      { x: 3, y: 1858 },
      { x: 4, y: 1970 },
    ],
  } as TKpiCardProps,
} satisfies Meta<typeof KpiCard>;

export default meta;

type Story = StoryFn<typeof meta>;

export const Default: Story = ({ args }) => (
  <Box p={24} sx={theme => ({ backgroundColor: theme.palette.background.default })}>
    <Grid
      column={3}
      responsive={{
        xxs: 1,
        xs: 1,
        sm: 1,
        md: 1,
      }}
      gutter="lg"
    >
      <KpiCard {...args} />
      <KpiCard
        title={
          <Tooltip title="Total Logins">
            <Pressable>
              <Text fw="500" variant="bodyLarge">
                Total Logins
              </Text>
            </Pressable>
          </Tooltip>
        }
        value={() =>
          formatNumber({
            value: 7465,
          })
        }
        variationPercent={-37}
        data={[
          { x: 0, y: 1970 },
          { x: 1, y: 1858 },
          { x: 2, y: 1500 },
          { x: 3, y: 1250 },
        ]}
        color="blue"
      />
      <KpiCard
        title="MRR Amount"
        value={() =>
          formatMoney({
            amountCents: 56704,
            minFractionDigits: 0,
          })
        }
        variationPercent={+56}
        data={[
          { x: 0, y: 24000 },
          { x: 1, y: 28000 },
          { x: 2, y: 34000 },
          { x: 3, y: 50000 },
        ]}
        color="green"
      />
    </Grid>
  </Box>
);
