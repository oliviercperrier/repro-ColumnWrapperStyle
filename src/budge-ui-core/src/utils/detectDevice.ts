import * as Device from "expo-device";
import { Platform } from "react-native";

interface GetDeviceInfoPayload {
  browserName: string;
  browserVersion: string;
  osName: string;
}

export const getDeviceInfo = (): GetDeviceInfoPayload => {
  let browserName = "Unknown browser";
  let browserVersion = "Unknown version";
  let match: any;

  if (Platform.OS === "web") {
    const userAgent = navigator.userAgent;

    // Detect browser name and version
    if (userAgent.indexOf("Firefox") > -1) {
      browserName = "Mozilla Firefox";
      match = userAgent.match(/Firefox\/([0-9]+)\./);
    } else if (userAgent.indexOf("Chrome") > -1) {
      browserName = "Google Chrome";
      match = userAgent.match(/Chrome\/([0-9]+)\./);
    } else if (userAgent.indexOf("Safari") > -1) {
      browserName = "Apple Safari";
      match = userAgent.match(/Version\/([0-9]+)\./);
    } else if (userAgent.indexOf("MSIE") > -1 || userAgent.indexOf("Trident/") > -1) {
      browserName = "Microsoft Internet Explorer";
      match = userAgent.match(/(?:MSIE |Trident\/.*; rv:|Edge\/)(\d+)/);
    }

    browserVersion = match ? match[1] : browserVersion;
  }

  return {
    browserName,
    browserVersion,
    osName: Device.osName || "not available",
  };
};
