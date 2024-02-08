import React, { forwardRef, memo } from "react";
import Svg, { Path } from "react-native-svg";
import { SvgIcon, TSvgIconProps } from "../SvgIcon";

const RadioBox = forwardRef<Svg, TSvgIconProps>((props, ref) => (
  <SvgIcon ref={ref} {...props} viewBox="0 0 24 24">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 21C16.9705 21 21 16.9705 21 12C21 7.02944 16.9705 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9705 7.02944 21 12 21ZM12 18C15.3137 18 18 15.3137 18 12C18 8.68628 15.3137 6 12 6C8.68628 6 6 8.68628 6 12C6 15.3137 8.68628 18 12 18Z"
    />
  </SvgIcon>
));

export default memo(RadioBox);