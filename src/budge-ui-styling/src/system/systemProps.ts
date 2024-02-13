import { TStyleSystemProp, TTypographyStyleSystemProp } from "../types/StyleSystem";
import { SystemValueType } from "./getter";

export interface SystemPropData {
  type: SystemValueType;
  property: string;
}

export const BASE_SYSTEM_PROPS: Record<TStyleSystemProp, SystemPropData> = {
  f: { type: "default", property: "flex" },
  fgrow: { type: "default", property: "flexGrow" },
  fshrink: { type: "default", property: "flexShrink" },
  fwrap: { type: "default", property: "flexWrap" },
  fdirection: { type: "default", property: "flexDirection" },
  fbasis: { type: "default", property: "flexBasis" },
  justifyContent: { type: "default", property: "justifyContent" },
  alignContent: { type: "default", property: "alignContent" },
  alignItems: { type: "default", property: "alignItems" },
  alignSelf: { type: "default", property: "alignSelf" },

  gap: { type: "spacing", property: "gap" },
  rGap: { type: "spacing", property: "rowGap" },
  cGap: { type: "spacing", property: "columnGap" },

  m: { type: "spacing", property: "margin" },
  mt: { type: "spacing", property: "marginTop" },
  mb: { type: "spacing", property: "marginBottom" },
  ml: { type: "spacing", property: "marginLeft" },
  mr: { type: "spacing", property: "marginRight" },
  mx: { type: "spacing", property: "marginHorizontal" },
  my: { type: "spacing", property: "marginVertical" },

  p: { type: "spacing", property: "padding" },
  pt: { type: "spacing", property: "paddingTop" },
  pb: { type: "spacing", property: "paddingBottom" },
  pl: { type: "spacing", property: "paddingLeft" },
  pr: { type: "spacing", property: "paddingRight" },
  px: { type: "spacing", property: "paddingHorizontal" },
  py: { type: "spacing", property: "paddingVertical" },

  bg: { type: "color", property: "backgroundColor" },
  opacity: { type: "default", property: "opacity" },

  w: { type: "spacing", property: "width" },
  miw: { type: "spacing", property: "minWidth" },
  maw: { type: "spacing", property: "maxWidth" },
  h: { type: "spacing", property: "height" },
  mih: { type: "spacing", property: "minHeight" },
  mah: { type: "spacing", property: "maxHeight" },

  pos: { type: "default", property: "position" },
  top: { type: "default", property: "top" },
  left: { type: "default", property: "left" },
  bottom: { type: "default", property: "bottom" },
  right: { type: "default", property: "right" },

  display: { type: "default", property: "display" },

  overflow: { type: "default", property: "overflow" },

  bw: { type: "default", property: "borderWidth" },
  blw: { type: "default", property: "borderLeftWidth" },
  brw: { type: "default", property: "borderRightWidth" },
  btw: { type: "default", property: "borderTopWidth" },
  bbw: { type: "default", property: "borderBottomWidth" },
  bc: { type: "color", property: "borderColor" },
};

export const TYPOGRAPHY_SYSTEM_PROPS: Record<TTypographyStyleSystemProp, SystemPropData> = {
  ...BASE_SYSTEM_PROPS,
  color: { type: "color", property: "color" },
  ff: { type: "default", property: "fontFamily" },
  fz: { type: "fontSize", property: "fontSize" },
  fw: { type: "default", property: "fontWeight" },
  lts: { type: "default", property: "letterSpacing" },
  ta: { type: "default", property: "textAlign" },
  lh: { type: "default", property: "lineHeight" },
  fs: { type: "default", property: "fontStyle" },
  tt: { type: "default", property: "textTransform" },
  tdl: { type: "default", property: "textDecorationLine" },
  tdc: { type: "color", property: "textDecorationColor" },
  tds: { type: "default", property: "textDecorationStyle" },
};
