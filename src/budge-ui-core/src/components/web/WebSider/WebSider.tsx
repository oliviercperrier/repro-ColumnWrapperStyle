import { Platform } from "react-native";

const WebSider = Platform.select({
  native: () => null,
  default: () => require("./WebSider.web.tsx"),
})();

export default WebSider;