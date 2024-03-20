import React, { forwardRef, memo, useMemo } from "react";
import { View } from "react-native";
import { TTabsPaneProps } from "./Tabs.types";
import { TabsPaneContext } from "./TabsPane.context";
import { Box } from "../Box";

const TabsPane = forwardRef<View, TTabsPaneProps>(({ tabRef, children, style }, ref) => {
  const memoedContextValue = useMemo(() => ({ tabRef }), [tabRef]);

  return (
    <TabsPaneContext.Provider value={memoedContextValue}>
      <Box ref={ref} style={style}>
        {children}
      </Box>
    </TabsPaneContext.Provider>
  );
});

export default memo(TabsPane);
