import React, { useState } from "react";
import { View } from "react-native";


import Stepper, { TStepperProps } from "./Stepper";
import { Text } from "../Text";
import { Stack } from "../Stack";
import { Button } from "../Button";

type TStepperPropsKeys = (keyof TStepperProps)[];

const DefaultFields: TStepperPropsKeys = ["size", "steps"];

const Content = ({ title }: { title: string }) => (
  <View
    style={{
      padding: 24,
      backgroundColor: "#f8f8f8",
      borderRadius: 5,
    }}
  >
    <Text>{title}</Text>
  </View>
);

const StepperMeta: ComponentMeta<typeof Stepper> = {
  title: "Navigation/Stepper",
  component: Stepper,
  args: {
    size: "md",
  },
  parameters: {
    controls: {
      include: DefaultFields,
    },
  },
  
};

export default StepperMeta;

type StepperStory = ComponentStory<typeof Stepper>;

export const Default: StepperStory = args => <Stepper {...args} current={1} />;
Default.args = {
  steps: [
    {
      content: <Content title="Content 1" />,
    },
    {
      content: <Content title="Content 2" />,
    },
    {
      content: <Content title="Content 3" />,
    },
  ],
};

export const WithTitle: StepperStory = args => <Stepper {...args} current={1} />;
WithTitle.parameters = {
  controls: {
    include: [...DefaultFields, "type"] as TStepperPropsKeys,
  },
};
WithTitle.args = {
  color: "primary",
  steps: [
    {
      title: "Step1",
      content: <Content title="Content 1" />,
    },
    {
      title: "Step 2",
      content: <Content title="Content 2" />,
    },
    {
      title: "Step 3",
      content: <Content title="Content 3" />,
    },
  ],
};

export const WithCompleteIcon: StepperStory = args => {
  const [current, setCurrent] = useState(1);

  return (
    <Stack>
      <Stepper {...args} current={current} onCurrentChange={setCurrent} />
      <Stack.Horizontal>
        <Button
          title="Previous"
          onPress={() => setCurrent(current => current - 1)}
          color="primary"
          disabled={current === 1}
        />
        <Button
          title="Next"
          onPress={() => setCurrent(current => current + 1)}
          color="primary"
          disabled={current === args.steps.length}
        />
      </Stack.Horizontal>
    </Stack>
  );
};
WithCompleteIcon.parameters = {
  controls: {
    include: [
      ...DefaultFields,
      "type",
      "enableNavigation",
      "showCompleteIcon",
      "showPreviousAsComplete",
      "titleProps",
      "titleActiveProps",
    ] as TStepperPropsKeys,
  },
};
WithCompleteIcon.args = {
  color: "primary",
  steps: [
    {
      title: "Step1",
      content: <Content title="Content 1" />,
    },
    {
      title: "Step 2",
      content: <Content title="Content 2" />,
    },
    {
      title: "Step 3",
      content: <Content title="Content 3" />,
    },
  ],
  showPreviousAsComplete: true,
  showCompleteIcon: true,
  enableNavigation: true,
  titleActiveProps: {
    fw: "600",
  },
  titleProps: {
    fw: "600",
    color: "textSecondary",
  },
};
