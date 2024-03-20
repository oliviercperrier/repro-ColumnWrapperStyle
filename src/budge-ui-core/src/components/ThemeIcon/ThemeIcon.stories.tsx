import React from "react";

import ThemeIcon, { TThemeIconProps } from "./ThemeIcon";
import { StudentIcon } from "../Icons";

type TThemeIconPropsKeys = (keyof TThemeIconProps)[];

const DefaultFields: TThemeIconPropsKeys = ["color", "iconColor", "iconOpacity", "variant", "radius", "size"];

const ThemeIconMeta: ComponentMeta<typeof ThemeIcon> = {
  title: "General/ThemeIcon",
  component: ThemeIcon,
  args: {},
  parameters: {
    controls: {
      include: DefaultFields,
    },
  },
  decorators: [(Story: any) => Story()],
};

export default ThemeIconMeta;

type ThemeIconStory = ComponentStory<typeof ThemeIcon>;

export const Default: ThemeIconStory = args => <ThemeIcon {...args} />;
Default.args = {
  icon: StudentIcon,
  color: "primary",
  radius: "default",
  size: "md",
  variant: "light",
  iconColor: "",
};
