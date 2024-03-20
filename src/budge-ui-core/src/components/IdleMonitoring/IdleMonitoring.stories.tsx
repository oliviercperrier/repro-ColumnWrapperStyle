import React, { useEffect, useRef, useState } from "react";
import { action } from "@storybook/addon-actions";

import { View } from "react-native";
import IdleMonitoring from "./IdleMonitoring";
import { Box } from "../Box";
import { Text } from "../Text";
import { Meta, StoryFn } from "@storybook/react";

const meta = {
  title: "Misc/Idle Monitoring",
  component: IdleMonitoring,
  decorators: [(Story: any) => <View style={{ margin: 0, height: 1000 }}>{Story()}</View>],
} satisfies Meta<typeof IdleMonitoring>;

export default meta;

type Story = StoryFn<typeof IdleMonitoring>;

export const Default: Story = () => {
  const rootViewRef = useRef<any>(null);
  const [rootRef, setRootRef] = useState<any>();
  const [idling, setIdling] = useState(true);

  useEffect(() => {
    setRootRef(rootViewRef);
  }, [rootViewRef.current]);

  return (
    <Box ref={rootViewRef}>
      <Text>Wait 5 secondes without touching the screen</Text>
      {rootRef && (
        <IdleMonitoring
          active={idling}
          storageKey="storybook-idle-monitoring"
          timeoutInSecondes={5}
          sessionExpiringTimerDurationInSeconds={15}
          rootViewRef={rootRef}
          onExpired={() => {
            setIdling(false);
            action("onExpired")();
          }}
          onLogoutOut={() => {
            setIdling(false);
            action("onLogout")();
          }}
        />
      )}
    </Box>
  );
};
