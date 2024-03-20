import React, { useEffect, useState } from "react";
import { action } from "@storybook/addon-actions";

import { View } from "react-native";
import ErrorBoundary, { TErrorBoundaryProps } from "./ErrorBoundary";
import { Button } from "../../components/Button";
import { getDeviceInfo } from "../detectDevice";

type TBudgeErrorBoundaryPropsKeys = (keyof TErrorBoundaryProps)[];

const DefaultFields: TBudgeErrorBoundaryPropsKeys = [];

const BudgeErrorBoundaryMeta: ComponentMeta<typeof ErrorBoundary> = {
  title: "Misc/Error Utils/Error Boundary",
  component: ErrorBoundary,
  args: {},
  parameters: {
    controls: {
      include: DefaultFields,
    },
  },
  decorators: [(Story: any) => <View style={{ margin: 0, height: 1000 }}>{Story()}</View>],
};

export default BudgeErrorBoundaryMeta;

type BudgeErrorBoundaryStory = ComponentStory<typeof ErrorBoundary>;

export const Default: BudgeErrorBoundaryStory = () => (
  <ErrorBoundary onReset={action("onReset")}>
    <BombTrigger />
  </ErrorBoundary>
);

const BombTrigger = () => {
  const [explode, setExplode] = useState(false);
  return (
    <View>
      <Button
        title="Crash everything"
        alignSelf="flex-start"
        onPress={() => setExplode(e => !e)}
        style={{ margin: 16 }}
      />
      {explode ? <Bomb /> : null}
    </View>
  );
};

const Bomb = () => {
  useEffect(() => {
    const deviceInfo = getDeviceInfo();

    action("errorLog")(deviceInfo);

    throw new Error("💥 CABOOM 💥");
  }, []);

  return null;
};
