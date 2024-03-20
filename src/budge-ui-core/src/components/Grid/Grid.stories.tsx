import React from "react";
import { Box } from "../Box";

import { Card } from "../Card";
import { Stack } from "../Stack";
import { Text } from "../Text";
import Grid, { TGridProps } from "./Grid";
import Row from "./v2/Row";
import Col from "./v2/Col";
import { Meta, StoryFn } from "@storybook/react";

const meta = {
  title: "Layout/Grid",
  component: Grid,
  args: {
    column: 4,
    gutter: "md",
    grow: false,
    responsive: {
      xxs: 1,
      xs: 1,
      sm: 1,
      md: 2,
      lg: 2,
      xl: 2,
      xxl: 3,
    },
  },
} satisfies Meta<typeof Grid>;

export default meta;

type Story = StoryFn<typeof meta>;

export const Default: Story = ({ args }) => (
  <Box p={24} sx={({ palette }) => ({ backgroundColor: palette.background.default })}>
    <Grid {...args}>
      <Card>
        <Text>Cell 1</Text>
      </Card>
      <Card>
        <Text>Cell 2</Text>
      </Card>
      <Card>
        <Text>
          <Stack>
            <Text>Cell 2.1</Text>
            <Text>Content</Text>
          </Stack>
        </Text>
      </Card>
      <Card>
        <Text>Cell 3</Text>
      </Card>
      <Card>
        <Text>Cell 4</Text>
      </Card>
      <Card>
        <Text>Cell 5</Text>
      </Card>
      <Card>
        <Text>Cell 6</Text>
      </Card>
      <Card>
        <Text>Cell 7</Text>
      </Card>
      <Card>
        <Text>Cell 8</Text>
      </Card>
    </Grid>
  </Box>
);

export const Responsive: Story = ({ args }) => (
  <Box p={24} sx={({ palette }) => ({ backgroundColor: palette.background.default })}>
    <Grid {...args}>
      <Card>
        <Text>Cell 1</Text>
      </Card>
      <Card>
        <Text>Cell 2</Text>
      </Card>
      <Card>
        <Text>
          <Stack>
            <Text>Cell 2.1</Text>
            <Text>Content</Text>
          </Stack>
        </Text>
      </Card>
      <Card>
        <Text>Cell 3</Text>
      </Card>
      <Card>
        <Text>Cell 4</Text>
      </Card>
      <Card>
        <Text>Cell 5</Text>
      </Card>
      <Card>
        <Text>Cell 6</Text>
      </Card>
      <Card>
        <Text>Cell 7</Text>
      </Card>
      <Card>
        <Text>Cell 8</Text>
      </Card>
    </Grid>
  </Box>
);

export const GridV2: Story = () => (
  <>
    <Row>
      <Col f={0.5} bg="blue">
        <Text>growCol 1</Text>
      </Col>
      <Col f={1} bg="red">
        <Text>Col 2</Text>
      </Col>
      <Col f={1} bg="green">
        <Text>Col 3</Text>
      </Col>
    </Row>
    <Row>
      <Col f={0.5} bg="red">
        <Text>Col 1</Text>
      </Col>
      <Col f={1} bg="green">
        <Text>Col 2</Text>
      </Col>
      <Col f={1} bg="blue">
        <Text>Col 3</Text>
      </Col>
    </Row>
  </>
);
