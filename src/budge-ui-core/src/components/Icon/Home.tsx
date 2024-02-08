import React, { forwardRef, memo } from "react";
import Svg, { Path } from "react-native-svg";
import { SvgIcon, TSvgIconProps } from "../SvgIcon";

const HomeIcon = forwardRef<Svg, TSvgIconProps>((props, ref) => (
  <SvgIcon ref={ref} {...props} viewBox="0 0 24 24">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.06296 8.29959C4.70713 8.58429 4.5 9.01524 4.5 9.47086V18.5C4.5 18.9142 4.83579 19.25 5.25 19.25H9.75C10.1642 19.25 10.5 18.9142 10.5 18.5V14C10.5 13.5857 10.8358 13.25 11.25 13.25H12.75C13.1642 13.25 13.5 13.5857 13.5 14V18.5C13.5 18.9142 13.8358 19.25 14.25 19.25H18.75C19.1642 19.25 19.5 18.9142 19.5 18.5V9.47086C19.5 9.01524 19.2928 8.58429 18.937 8.29959L12.937 3.4996C12.3892 3.06133 11.6107 3.06133 11.063 3.4996L5.06296 8.29959Z"
    />
  </SvgIcon>
));

export default memo(HomeIcon);
