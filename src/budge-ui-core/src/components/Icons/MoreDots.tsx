import React, { forwardRef, memo } from "react";
import Svg, { Circle } from "react-native-svg";
import IconSvg, { TIconSvgProps } from "./IconSvg/IconSvg";

const MoreDotsIcon = forwardRef<Svg, TIconSvgProps>((props, ref) => (
  <IconSvg ref={ref} {...props} viewBox="0 0 24 24">
    <Circle cx="4.5" cy="12" r="2.5" />
    <Circle cx="12" cy="12" r="2.5" />
    <Circle cx="19.5" cy="12" r="2.5" />
  </IconSvg>
));

export default memo(MoreDotsIcon);
