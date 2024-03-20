import { action } from "@storybook/addon-actions";

import React from "react";
import { View } from "react-native";
import { BookmarkIcon, HearthIcon, HomeIcon, RadioBoxIcon, SecurityIcon, SettingsIcon } from "../../Icons";
import { Text } from "../../Text";
import { TWebSiderMenuItemProps, TWebSiderProps } from "./types";
import WebSider from "./WebSider";

type TWebSiderPropsKeys = (keyof TWebSiderProps)[];

const DefaultFields: TWebSiderPropsKeys = ["isCollapsible"];

const WebSiderMeta: ComponentMeta<typeof WebSider> = {
  title: "Navigation/Web/Sider",
  component: WebSider,
  args: {
    isCollapsible: false,
  },
  parameters: {
    controls: {
      include: DefaultFields,
    },
  },
  decorators: [
    (Story: any) => <View style={{ height: 1000, margin: 0, padding: 24, backgroundColor: "#f8f8f8" }}>{Story()}</View>,
  ],
};

export default WebSiderMeta;

type WebSiderStory = ComponentStory<typeof WebSider>;

const menuItems: TWebSiderMenuItemProps[] = [
  {
    title: "Menu item 1",
    Icon: HomeIcon,
    onPress: action("onPress"),
    subItems: [
      {
        title: "Sub Item 1",
        onPress: action("onPress"),
      },
      {
        title: "Sub Item 2",
        onPress: action("onPress"),
      },
      {
        title: "Sub Item 3",
        onPress: action("onPress"),
      },
    ],
  },
  {
    title: "Menu item 2",
    Icon: BookmarkIcon,
    onPress: action("onPress"),
  },
  {
    title: "Menu item 3",
    Icon: HearthIcon,
    onPress: action("onPress"),
  },
  {
    title: "Menu item 4",
    Icon: SecurityIcon,
    onPress: action("onPress"),
  },
];

const bottomMenuItems = [
  {
    title: "Settings",
    Icon: SettingsIcon,
    onPress: action("onPress"),
  },
  {
    title: "Logout",
    Icon: RadioBoxIcon,
    onPress: action("onPress"),
  },
];

export const Default: WebSiderStory = args => (
  <WebSider
    {...args}
    extra={
      <View
        style={{
          borderColor: "#f8f8f8",
          borderWidth: 1,
          borderRadius: 8,
          height: 100,
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text color="textSecondary">Extra</Text>
      </View>
    }
    menuItems={menuItems}
    bottomMenuItems={bottomMenuItems}
  />
);

export const IsCollapsible: WebSiderStory = args => (
  <WebSider
    {...args}
    extra={
      <View
        style={{
          borderColor: "#f8f8f8",
          borderWidth: 1,
          borderRadius: 8,
          height: 100,
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text color="textSecondary">Extra</Text>
      </View>
    }
    menuItems={menuItems}
    bottomMenuItems={bottomMenuItems}
  />
);
IsCollapsible.args = { isCollapsible: true };
