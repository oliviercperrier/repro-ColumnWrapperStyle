
import React from "react";
import { Stack } from "../Stack";

import Logo, { TLogoProps } from "./Logo";
import LogoSquare from "./LogoSquare";
import { Box } from "../Box";

type TLogoPropsKeys = (keyof TLogoProps)[];

const DefaultFields: TLogoPropsKeys = ["width"];

const LogoMeta: ComponentMeta<typeof Logo> = {
  title: "General/Logo",
  component: Logo,
  args: {
    width: 125,
  },
  parameters: {
    controls: {
      include: DefaultFields,
    },
  },
};

export default LogoMeta;

type LogoStory = ComponentStory<typeof Logo>;

export const Default: LogoStory = args => (
  <Stack>
    <Box p="md">
      <Logo {...args} />
    </Box>
    <Box bg="primary.4" p="md" radius="sm" alignSelf="flex-start">
      <Logo textColor="white" />
    </Box>
  </Stack>
);

export const Square: LogoStory = args => <LogoSquare />;
