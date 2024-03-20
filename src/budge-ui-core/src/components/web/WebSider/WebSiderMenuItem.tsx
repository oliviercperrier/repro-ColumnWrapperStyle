import React from "react";
import { Platform } from "react-native";

const WebSiderMenuItem = Platform.select({
  native: () => null,
  default: () => require("./WebSiderMenuItem.web"),
})();

export default WebSiderMenuItem;