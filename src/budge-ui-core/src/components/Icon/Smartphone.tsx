import React, { forwardRef, memo } from "react";
import Svg, { Path } from "react-native-svg";
import { SvgIcon, TSvgIconProps } from "../SvgIcon";

const SmartphoneIcon = forwardRef<Svg, TSvgIconProps>((props, ref) => (
  <SvgIcon ref={ref} {...props} viewBox="0 0 24 24">
   <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.25 21H6.75C6.33579 21 6 20.6642 6 20.25V3.75C6 3.33579 6.33579 3 6.75 3H17.25C17.6642 3 18 3.33579 18 3.75V20.25C18 20.6642 17.6642 21 17.25 21ZM11.25 19.125C11.25 19.3321 11.4179 19.5 11.625 19.5H12.375C12.5821 19.5 12.75 19.3321 12.75 19.125V18.375C12.75 18.1679 12.5821 18 12.375 18H11.625C11.4179 18 11.25 18.1679 11.25 18.375V19.125Z"
    />
  </SvgIcon>
));

export default memo(SmartphoneIcon);
