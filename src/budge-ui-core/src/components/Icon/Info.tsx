import React, { forwardRef, memo } from "react";
import Svg, { Path } from "react-native-svg";
import { SvgIcon, TSvgIconProps } from "../SvgIcon";

const InfoIcon = forwardRef<Svg, TSvgIconProps>((props, ref) => (
  <SvgIcon ref={ref} {...props} viewBox="0 0 24 24">
  <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 21C16.9705 21 21 16.9705 21 12C21 7.02944 16.9705 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9705 7.02944 21 12 21ZM11.25 7.875C11.25 7.66792 11.4179 7.5 11.625 7.5H12.375C12.5821 7.5 12.75 7.66792 12.75 7.875V8.625C12.75 8.83208 12.5821 9 12.375 9H11.625C11.4179 9 11.25 8.83208 11.25 8.625V7.875ZM11.25 10.875C11.25 10.6679 11.4179 10.5 11.625 10.5H12.375C12.5821 10.5 12.75 10.6679 12.75 10.875V16.125C12.75 16.3321 12.5821 16.5 12.375 16.5H11.625C11.4179 16.5 11.25 16.3321 11.25 16.125V10.875Z"
    />
  </SvgIcon>
));

export default memo(InfoIcon);
