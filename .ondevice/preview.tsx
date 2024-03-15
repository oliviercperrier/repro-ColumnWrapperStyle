// Import your global CSS file
import "../global.css";

import React from "react";
import { withBackgrounds } from "@storybook/addon-ondevice-backgrounds";
import type { Preview } from "@storybook/react";
import StorybookWrapper from "../StorybookWrapper";
import { polyfillWebCrypto } from "expo-standard-web-crypto";

polyfillWebCrypto();

const preview: Preview = {
  decorators: [
    withBackgrounds,
    Story => (
      <StorybookWrapper>
        <Story />
      </StorybookWrapper>
    ),
  ],

  parameters: {
    backgrounds: {
      default: "plain",
      values: [
        { name: "plain", value: "white" },
        { name: "warm", value: "hotpink" },
        { name: "cool", value: "deepskyblue" },
      ],
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
