import React, { forwardRef, memo } from "react";
import Svg, { Circle, Path } from "react-native-svg";
import { SvgIcon, TSvgIconProps } from "../SvgIcon";

const MoreDotsIcon = forwardRef<Svg, TSvgIconProps>((props, ref) => (
  <SvgIcon ref={ref} {...props} viewBox="0 0 24 24">
    <Circle cx="7.5" cy="12" r="1.5" />
    <Circle cx="12" cy="12" r="1.5" />
    <Circle cx="16.5" cy="12" r="1.5" />
  </SvgIcon>
));

export default memo(MoreDotsIcon);