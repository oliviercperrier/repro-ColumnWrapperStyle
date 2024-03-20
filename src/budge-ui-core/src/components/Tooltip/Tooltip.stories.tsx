
import React from "react";
import { View } from "react-native";

import { Button } from "../Button";
import Tooltip, { TTooltipProps } from "./Tooltip";

type TTooltipPropsKeys = (keyof TTooltipProps)[];

const DefaultFields: TTooltipPropsKeys = ["title", "placement", "offset"];

const TooltipMeta: ComponentMeta<typeof Tooltip> = {
  title: "Overlays/Tooltip",
  component: Tooltip,
  args: {
    title:
      "Hello from tooltip Hello from tooltipHello from tooltipHello from tooltip Hello from tooltip Hello from tooltip Hello from tooltip Hello from tooltip Hello from tooltip",
    placement: "bottom",
    offset: 8,
  },
  parameters: {
    controls: {
      include: DefaultFields,
    },
  },
};

export default TooltipMeta;

type TooltipStory = ComponentStory<typeof Tooltip>;

export const Default: TooltipStory = args => (
  <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", margin: 50 }}>
    <Tooltip maw={250} {...args}>
      <Button title="Hover me" alignSelf="flex-start" />
    </Tooltip>
  </View>
);
