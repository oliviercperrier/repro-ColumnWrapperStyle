
import React from "react";

import { ArrowLeftIcon, CarIcon } from "../Icons";
import { Stack } from "../Stack";
import Tag, { TTagProps } from "./Tag";

type TTagPropsKeys = (keyof TTagProps)[];

const DefaultFields: TTagPropsKeys = ["color", "value", "variant", "color", "withIcon", "size", "radius"];

const TagMeta: ComponentMeta<typeof Tag> = {
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
  parameters: {
    controls: {
      include: DefaultFields,
    },
  },
};

export default TagMeta;

type TagStory = ComponentStory<typeof Tag>;

export const All: TagStory = args => (
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
