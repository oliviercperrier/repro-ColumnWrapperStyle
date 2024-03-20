import React, { forwardRef, memo } from "react";
import Svg, { Path } from "react-native-svg";
import IconSvg, { TIconSvgProps } from "./IconSvg/IconSvg";

const ClockIcon = forwardRef<Svg, TIconSvgProps>((props, ref) => (
  <IconSvg ref={ref} {...props} viewBox="0 0 24 24">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12ZM11.25 7.875C11.25 7.66793 11.4179 7.5 11.625 7.5H12.375C12.5821 7.5 12.75 7.66793 12.75 7.875V12H15.375C15.5821 12 15.75 12.1679 15.75 12.375V13.125C15.75 13.3321 15.5821 13.5 15.375 13.5H11.625C11.5991 13.5 11.5738 13.4974 11.5494 13.4924C11.413 13.4644 11.3035 13.3624 11.2649 13.2301C11.2552 13.1967 11.25 13.1615 11.25 13.125V7.875Z"
    />
  </IconSvg>
));

export default memo(ClockIcon);
