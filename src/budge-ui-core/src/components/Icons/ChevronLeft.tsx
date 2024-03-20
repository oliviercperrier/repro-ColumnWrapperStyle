import React, { forwardRef, memo } from "react";
import Svg, { Path } from "react-native-svg";
import IconSvg, { TIconSvgProps } from "./IconSvg/IconSvg";

const ChevronLeftIcon = forwardRef<Svg, TIconSvgProps>((props, ref) => (
  <IconSvg ref={ref} {...props} viewBox="0 0 24 24">
     <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.7655 6.16637C16.0584 6.45926 16.0584 6.93414 15.7655 7.22703L10.9925 12L15.7655 16.773C16.0584 17.0659 16.0584 17.5408 15.7655 17.8336L14.7048 18.8943C14.4119 19.1872 13.937 19.1872 13.6442 18.8943L8.34152 13.5916C8.3413 13.5914 8.34107 13.5912 8.34085 13.591L7.28022 12.5303C6.98732 12.2374 6.98732 11.7625 7.28022 11.4697L8.34085 10.409L13.6442 5.10571C13.937 4.81282 14.4119 4.81282 14.7048 5.10571L15.7655 6.16637Z"
    />
  </IconSvg>
));

export default memo(ChevronLeftIcon);
