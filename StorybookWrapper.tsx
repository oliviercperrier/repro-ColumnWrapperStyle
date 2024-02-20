import React from "react";
import { PropsWithChildren } from "react";
import { StyleProp, ViewStyle } from "react-native";
import { Box, BudgeUIProvider } from "@budgeinc/budge-ui-core";
import { SafeAreaProvider } from "react-native-safe-area-context";

const StorybookWrapper = ({ children, style }: PropsWithChildren<{ style?: StyleProp<ViewStyle> }>) => (
  <SafeAreaProvider style={{flex: 1}}>
    <BudgeUIProvider>
      <Box style={style} mx="xl" py="xl">
        {children}
      </Box>
    </BudgeUIProvider>
  </SafeAreaProvider>
);

export default StorybookWrapper;
