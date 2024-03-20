
import React, { useState } from "react";
import { Box } from "../Box";
import { Button } from "../Button";
import { Dropdown } from "../Dropdown";
import { EditIcon } from "../Icons";
import MoreDotsCircled from "../Icons/MoreDotsCircled";
import { Stack } from "../Stack";
import { Text } from "../Text";
import Collapse, { TCollapseProps } from "./Collapse";
import { Meta, StoryFn } from "@storybook/react";

const meta = {
  title: "Misc/Collapse",
  component: Collapse,
  args: {
    header: "Collapse header",
    children: <Text>Collapse Content</Text>,
  },
} satisfies Meta<typeof Collapse>;

export default meta;

type Story = StoryFn<typeof Collapse>;

export const Default: Story = (args) => (
  <Stack sx={theme => ({ backgroundColor: theme.palette.background.default, padding: 24 })}>
    <Collapse {...args}>
      <Text>Content</Text>
    </Collapse>
    <Collapse {...args} />
    <Collapse {...args} />
  </Stack>
);

export const Dark: Story = (args) => (
  <Stack sx={theme => ({ backgroundColor: theme.white, padding: 24 })}>
    <Collapse variant="dark" {...args} />
    <Collapse variant="dark" {...args} />
    <Collapse variant="dark" {...args} />
  </Stack>
);

export const CustomHeader: Story = () => (
  <Stack sx={theme => ({ backgroundColor: theme.palette.background.default, padding: 24 })}>
    <Collapse
      header={
        <Stack.Horizontal f={1} justifyContent="space-between" alignItems="center">
          <Text variant="bodyMedium">Collapse header</Text>
          <Button title="Edit" variant="filled" size="xs" color="primary" rightIcon={EditIcon} />
        </Stack.Horizontal>
      }
    >
      <Text>Collapse Content</Text>
    </Collapse>
    <Collapse
      header={
        <Stack.Horizontal f={1} justifyContent="space-between" alignItems="center">
          <Text variant="bodyMedium">Collapse header</Text>
          <Button title="Edit" variant="filled" size="xs" color="primary" rightIcon={EditIcon} />
        </Stack.Horizontal>
      }
    >
      <Text>Collapse Content</Text>
    </Collapse>
    <Collapse
      header={
        <Stack.Horizontal f={1} justifyContent="space-between" alignItems="center">
          <Text variant="bodyMedium">Collapse header</Text>
          <Button title="Edit" variant="filled" size="xs" color="primary" rightIcon={EditIcon} />
        </Stack.Horizontal>
      }
    >
      <Text>Collapse Content</Text>
    </Collapse>
  </Stack>
);

const Extra = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dropdown
      visible={open}
      onVisibleChange={setOpen}
      anchor={
        <Box>
          <MoreDotsCircled color="gray.4" />
        </Box>
      }
      placement="bottom right"
      overlay={
        <Box p="lg">
          <Text>Hi, from dropdown</Text>
        </Box>
      }
    />
  );
};

export const WithExtra: Story = (args) => (
  <Stack sx={theme => ({ backgroundColor: theme.white, padding: 24 })}>
    <Collapse variant="dark" extra={<Extra />} {...args} />
    <Collapse variant="dark" extra={<Extra />} {...args} />
    <Collapse variant="dark" extra={<Extra />} {...args} />
  </Stack>
);
