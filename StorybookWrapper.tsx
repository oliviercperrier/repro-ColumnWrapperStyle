import React from "react";
import { PropsWithChildren } from "react";
import { StyleProp, ViewStyle } from "react-native";
import { Box, BudgeUIProvider, ModalManager, Toaster } from "@budgeinc/budge-ui-core";
import { SafeAreaProvider } from "react-native-safe-area-context";

const StorybookWrapper = ({ children, style }: PropsWithChildren<{ style?: StyleProp<ViewStyle> }>) => (
  <SafeAreaProvider style={{flex: 1}}>
    <BudgeUIProvider>
      <Box style={style} mx="xl" py="xl" f={1}>
        {children}
      </Box>
      <Toaster />
      <ModalManager />
    </BudgeUIProvider>
  </SafeAreaProvider>
);

export default StorybookWrapper;
