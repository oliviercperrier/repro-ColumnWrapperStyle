import { View, Text } from "react-native";
import React from "react";
import { TColorOpacity, TColorShade, TColorToken, TColor } from "../../types";

export type TSplitColorTokenPayload = {
  color: TColor;
  shade?: TColorShade;
  opacity?: TColorOpacity;
};

const splitColorToken = (color: TColorToken): TSplitColorTokenPayload => {
  const items = color.split("-");
  const otherItems = items.length > 1 ? items[1].split("/") : [];

  return {
    color: items[0] as TColor,
    shade: otherItems.length ? (parseInt(items[0]) as TColorShade) : undefined,
    opacity: otherItems.length > 1 ? (parseInt(otherItems[1]) as TColorOpacity) : undefined,
  };
};

export default splitColorToken;
