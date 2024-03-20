/* eslint-disable global-require */
import { Platform } from "react-native";
import { TWebDrawerProps } from "./types";

const WebDrawer = Platform.select<() => (props: TWebDrawerProps) => JSX.Element>({
  // @ts-ignore
  native: () => null,
  default: () => require("./WebDrawer.web"),
})();

export default WebDrawer;
