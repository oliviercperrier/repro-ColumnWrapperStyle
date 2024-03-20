import React, { forwardRef, memo } from "react";
import Svg, { Path } from "react-native-svg";
import IconSvg, { TIconSvgProps } from "./IconSvg/IconSvg";

const CardIcon = forwardRef<Svg, TIconSvgProps>((props, ref) => (
  <IconSvg ref={ref} {...props} viewBox="0 0 24 24">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.75 4.5C3.33579 4.5 3 4.83579 3 5.25V7.5H21V5.25C21 4.83579 20.6642 4.5 20.25 4.5H3.75ZM21 10.5H3V18.75C3 19.1642 3.33579 19.5 3.75 19.5H20.25C20.6642 19.5 21 19.1642 21 18.75V10.5ZM6.375 16.5C6.1679 16.5 6 16.3321 6 16.125V15.375C6 15.1679 6.1679 15 6.375 15H10.125C10.3321 15 10.5 15.1679 10.5 15.375V16.125C10.5 16.3321 10.3321 16.5 10.125 16.5H6.375Z"
    />
  </IconSvg>
));

export default memo(CardIcon);
