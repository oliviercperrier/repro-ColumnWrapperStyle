import React, { forwardRef, memo } from "react";
import Svg, { Path } from "react-native-svg";
import { SvgIcon, TSvgIconProps } from "../SvgIcon";

const BookmarkIcon = forwardRef<Svg, TSvgIconProps>((props, ref) => (
  <SvgIcon ref={ref} {...props} viewBox="0 0 24 24">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 4.48048V19.518C6 20.1688 6.80786 20.4948 7.28033 20.0346L11.4697 15.9542C11.7625 15.669 12.2375 15.669 12.5303 15.9542L16.7197 20.0346C17.1922 20.4948 18 20.1688 18 19.518V4.48048C18 4.07705 17.6642 3.75 17.25 3.75H6.75C6.33579 3.75 6 4.07705 6 4.48048Z"
    />
  </SvgIcon>
));

export default memo(BookmarkIcon);
