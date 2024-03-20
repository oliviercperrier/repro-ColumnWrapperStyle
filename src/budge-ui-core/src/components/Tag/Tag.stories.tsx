import React from "react";

import { ArrowLeftIcon, CarIcon } from "../Icons";
import { Stack } from "../Stack";
import Tag, { TTagProps } from "./Tag";
import { Meta, StoryFn } from "@storybook/react";

const meta = {
  title: "Data Display/Tag",
  component: Tag,
  args: {
    variant: "light",
    value: "fast car",
    icon: CarIcon,
    color: "water",
    size: "sm",
    radius: "sm",
  },
} satisfies Meta<typeof Tag>;

export default meta;

type Story = StoryFn<typeof Tag>;

export const All: Story = (args) => (
  <Stack alignItems="flex-start">
    <Tag {...args} />
    <Tag variant={args.variant} value="ACTIVE" />
    <Tag variant={args.variant} value="ENABLED" />
    <Tag variant={args.variant} value="COMPLETED" />
    <Tag variant={args.variant} value="PROCESSED" />
    <Tag variant={args.variant} value="PARTIAL_COMPLETED" />
    <Tag variant={args.variant} value="DRAFT" />
    <Tag variant={args.variant} value="PENDING" />
    <Tag variant={args.variant} value="SUBMITTED" />
    <Tag variant={args.variant} value="DISABLED" />
    <Tag variant={args.variant} value="INCOMPLETE" />
    <Tag variant={args.variant} value="Coming soon" radius="lg" color="default" />
    <Tag variant={args.variant} value="Icon Left" iconPosition="left" icon={ArrowLeftIcon} />
  </Stack>
);
