import React, { forwardRef, memo } from "react";
import Svg, { Path } from "react-native-svg";
import { SvgIcon, TSvgIconProps } from "../SvgIcon";

const CoachIcon = forwardRef<Svg, TSvgIconProps>((props, ref) => (
  <SvgIcon ref={ref} {...props} viewBox="0 0 24 24">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.25 8.25C17.25 11.1495 14.8995 13.5 12 13.5C9.1005 13.5 6.75 11.1495 6.75 8.25C6.75 5.35051 9.1005 3 12 3C14.8995 3 17.25 5.35051 17.25 8.25ZM10.5 15L11.0427 16.0854C11.1697 16.3395 11.4294 16.5 11.7135 16.5H12.2865C12.5706 16.5 12.8303 16.3395 12.9573 16.0854L13.5 15C15.4384 15 17.3155 15.6796 18.8047 16.9206L20.4845 18.3204C20.8112 18.5926 21 18.9958 21 19.421V20.25C21 20.6642 20.6642 21 20.25 21H14.25L12.9573 18.4146C12.8303 18.1605 12.5706 18 12.2865 18H11.7135C11.4294 18 11.1698 18.1605 11.0427 18.4146L9.75 21H3.75C3.33579 21 3 20.6642 3 20.25V19.421C3 18.9958 3.18885 18.5926 3.51547 18.3204L5.19534 16.9206C6.68448 15.6796 8.56157 15 10.5 15Z"
    />
  </SvgIcon>
));

export default memo(CoachIcon);
