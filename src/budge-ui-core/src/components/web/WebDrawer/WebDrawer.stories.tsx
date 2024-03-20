
import React, { useState } from "react";
import { Button } from "../../Button";
import { TWebDrawerProps } from "./types";
import WebDrawer from "./WebDrawer";

type TWebDrawerPropsKeys = (keyof TWebDrawerProps)[];

const DefaultFields: TWebDrawerPropsKeys = ["title", "showBackdrop"];

const WebDrawerMeta: ComponentMeta<typeof WebDrawer> = {
  title: "Navigation/Web/Drawer",
  component: WebDrawer,
  args: {
    title: "Basic Drawer",
    showBackdrop: true,
  },
  parameters: {
    controls: {
      include: DefaultFields,
    },
  },
};

export default WebDrawerMeta;

type WebDrawerStory = ComponentStory<typeof WebDrawer>;

export const Default: WebDrawerStory = args => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Button alignSelf="flex-start" title="Toggle Drawer" onPress={() => setOpen(true)} />
      <WebDrawer {...args} isOpen={isOpen} onClose={() => setOpen(false)} />
    </>
  );
};

export const NoBackdrop: WebDrawerStory = args => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Button alignSelf="flex-start" title="Toggle Drawer" onPress={() => setOpen(true)} />
      <WebDrawer {...args} isOpen={isOpen} onClose={() => setOpen(false)} />
    </>
  );
};
NoBackdrop.args = { showBackdrop: false };
