import React, { forwardRef, memo } from "react";
import Svg, { Path } from "react-native-svg";
import { SvgIcon, TSvgIconProps } from "../SvgIcon";

const LockIcon = forwardRef<Svg, TSvgIconProps>((props, ref) => (
  <SvgIcon ref={ref} {...props} viewBox="0 0 24 24">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.5 3C8.01472 3 6 5.01472 6 7.5V12H4C3.44772 12 3 12.4477 3 13V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V13C21 12.4477 20.5523 12 20 12H18V7.5C18 5.01472 15.9853 3 13.5 3H10.5ZM15 12V7.5C15 6.67157 14.3284 6 13.5 6H10.5C9.67157 6 9 6.67157 9 7.5V12H15ZM11.25 15.5C11.25 15.2239 11.4739 15 11.75 15H12.25C12.5261 15 12.75 15.2239 12.75 15.5V17.5C12.75 17.7761 12.5261 18 12.25 18H11.75C11.4739 18 11.25 17.7761 11.25 17.5V15.5Z"
    />
  </SvgIcon>
));

export default memo(LockIcon);
