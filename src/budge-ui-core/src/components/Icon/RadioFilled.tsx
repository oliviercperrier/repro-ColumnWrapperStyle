import React, { forwardRef, memo } from "react";
import Svg, { Path } from "react-native-svg";
import { SvgIcon, TSvgIconProps } from "../SvgIcon";

const RadioFilled = forwardRef<Svg, TSvgIconProps>((props, ref) => (
  <SvgIcon ref={ref} {...props} viewBox="0 0 24 24">
     <Path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21 12C21 16.9705 16.9705 21 12 21C7.02943 21 3 16.9705 3 12C3 7.02943 7.02943 3 12 3C16.9705 3 21 7.02943 21 12ZM18 12C18 15.3137 15.3137 18 12 18C8.68627 18 6 15.3137 6 12C6 8.68627 8.68627 6 12 6C15.3137 6 18 8.68627 18 12Z"
    />
  </SvgIcon>
));

export default memo(RadioFilled);
