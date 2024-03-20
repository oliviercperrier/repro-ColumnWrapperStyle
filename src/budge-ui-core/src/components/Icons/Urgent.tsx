import React, { forwardRef, memo } from "react";
import Svg, { Path } from "react-native-svg";
import IconSvg, { TIconSvgProps } from "./IconSvg/IconSvg";

const UrgentIcon = forwardRef<Svg, TIconSvgProps>((props, ref) => (
  <IconSvg ref={ref} {...props} viewBox="0 0 24 24">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9705 7.02944 21 12 21C16.9705 21 21 16.9705 21 12C21 7.02944 16.9705 3 12 3ZM12.75 13.125C12.75 13.3321 12.5821 13.5 12.375 13.5H11.625C11.4179 13.5 11.25 13.3321 11.25 13.125V7.875C11.25 7.66792 11.4179 7.5 11.625 7.5H12.375C12.5821 7.5 12.75 7.66792 12.75 7.875V13.125ZM12.75 16.125C12.75 16.3321 12.5821 16.5 12.375 16.5H11.625C11.4179 16.5 11.25 16.3321 11.25 16.125V15.375C11.25 15.1679 11.4179 15 11.625 15H12.375C12.5821 15 12.75 15.1679 12.75 15.375V16.125Z"
    />
  </IconSvg>
));

export default memo(UrgentIcon);
