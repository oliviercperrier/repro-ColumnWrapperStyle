import "../global.css";

import React from "react";
import type { Preview } from "@storybook/react";
import StorybookWrapper from "../StorybookWrapper";

const withContext = (StoryFn: any) => {
  return (
    <StorybookWrapper>
      <StoryFn />
    </StorybookWrapper>
  );
};

export const decorators = [withContext];

export const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};
