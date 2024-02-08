import React, { forwardRef, memo } from "react";
import Svg, { Path } from "react-native-svg";
import { SvgIcon, TSvgIconProps } from "../../SvgIcon";

const FacebookIcon = forwardRef<Svg, TSvgIconProps>((props, ref) => (
  <SvgIcon ref={ref} {...props} viewBox="0 0 24 24">
    <Path d="M21 12C21 7.02943 16.9706 3 12 3C7.02943 3 3 7.02943 3 12C3 16.4921 6.29115 20.2155 10.5938 20.8907V14.6016H8.30859V12H10.5938V10.0172C10.5938 7.76156 11.9374 6.51562 13.9932 6.51562C14.9776 6.51562 16.0078 6.69141 16.0078 6.69141V8.90625H14.873C13.755 8.90625 13.4062 9.60006 13.4062 10.3125V12H15.9023L15.5033 14.6016H13.4062V20.8907C17.7088 20.2155 21 16.4921 21 12Z" />
  </SvgIcon>
));

export default memo(FacebookIcon);
