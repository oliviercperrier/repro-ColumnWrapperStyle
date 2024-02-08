import React, { forwardRef, memo } from "react";
import Svg, { Path } from "react-native-svg";
import { SvgIcon, TSvgIconProps } from "../SvgIcon";

const ChevronDownFilledIcon = forwardRef<Svg, TSvgIconProps>((props, ref) => (
  <SvgIcon ref={ref} {...props} viewBox="0 0 24 24">
    <Path d="M12.3842 16.073C12.0253 16.4789 11.394 16.4789 11.0351 16.073L5.2294 9.50799C4.7125 8.92348 5.12562 7.99991 5.90399 7.99991L17.5153 7.99991C18.2936 7.99991 18.7068 8.92348 18.1899 9.50799L12.3842 16.073Z" />
  </SvgIcon>
));

export default memo(ChevronDownFilledIcon);
