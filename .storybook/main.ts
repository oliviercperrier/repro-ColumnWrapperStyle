import path from "path";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";

/** @type{import("@storybook/react-webpack5").StorybookConfig} */
module.exports = {
  stories: ["../src/budge-ui-core/src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-react-native-web"],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  webpackFinal: async config => {
    config.resolve = {
      ...config.resolve,
      plugins: [
        ...(config.resolve.plugins || []),
        new TsconfigPathsPlugin({
          extensions: [".ts", ".tsx", ".js"],
          configFile: path.join(__dirname, "../tsconfig.json"),
        }),
      ],
    };

    return config;
  },
};
