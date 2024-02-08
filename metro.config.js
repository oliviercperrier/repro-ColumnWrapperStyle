const path = require("path");
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');
const { generate } = require("@storybook/react-native/scripts/generate");

generate({
  configPath: path.resolve(__dirname, "./.ondevice"),
});

const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.transformer.unstable_allowRequireContext = true;

defaultConfig.transformer.getTransformOptions = async () => ({
  transform: {
    experimentalImportSupport: false,
    inlineRequires: false,
  },
});

defaultConfig.watchFolders = [
  ...defaultConfig.watchFolders,
  "./.ondevice",
  path.resolve(__dirname, "./src/budge-ui-styling/src"),
  path.resolve(__dirname, "./src/budge-ui-hooks/src"),
  path.resolve(__dirname, "./src/budge-ui-core/src"),
];

defaultConfig.resolver.resolveRequest = (context, moduleName, platform) => {
  const defaultResolveResult = context.resolveRequest(
    context,
    moduleName,
    platform
  );

  if (
    process.env.STORYBOOK_ENABLED !== "true" &&
    defaultResolveResult?.filePath?.includes?.(".ondevice/")
  ) {
    return {
      type: "empty",
    };
  }

  return defaultResolveResult;
};

module.exports = withNativeWind(defaultConfig, { input: './global.css' });
