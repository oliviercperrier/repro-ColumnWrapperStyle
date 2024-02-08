import React, { forwardRef, memo } from "react";
import Svg, { Path } from "react-native-svg";
import { SvgIcon, TSvgIconProps } from "../SvgIcon";

const ArrowLeftIcon = forwardRef<Svg, TSvgIconProps>((props, ref) => (
  <SvgIcon ref={ref} {...props} viewBox="0 0 24 24">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.0156 7.22704C12.3085 6.93415 12.3085 6.45928 12.0156 6.16638L10.955 5.10572C10.662 4.81282 10.1872 4.81282 9.89433 5.10572L4.591 10.409L3.53034 11.4697C3.23744 11.7626 3.23744 12.2375 3.53034 12.5303L4.591 13.591L4.59167 13.5917L9.89433 18.8943C10.1872 19.1872 10.662 19.1872 10.955 18.8943L12.0156 17.8337C12.3085 17.5408 12.3085 17.0659 12.0156 16.773L8.74263 13.5H20.1747C20.5888 13.5 20.9247 13.1642 20.9247 12.75V11.25C20.9247 10.8358 20.5888 10.5 20.1747 10.5H8.74263L12.0156 7.22704Z"
    />
  </SvgIcon>
));

export default memo(ArrowLeftIcon);
