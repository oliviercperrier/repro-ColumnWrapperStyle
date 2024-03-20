import React, { forwardRef, memo } from "react";
import Svg, { Path } from "react-native-svg";
import IconSvg, { TIconSvgProps } from "./IconSvg/IconSvg";

const ChevronRight = forwardRef<Svg, TIconSvgProps>((props, ref) => (
  <IconSvg ref={ref} {...props} viewBox="0 0 24 24">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.83343 6.16637C8.54055 6.45926 8.54055 6.93414 8.83343 7.22703L13.6064 12L8.83343 16.773C8.54055 17.0659 8.54055 17.5408 8.83343 17.8336L9.89408 18.8943C10.187 19.1872 10.6619 19.1872 10.9547 18.8943L16.2574 13.5916C16.2576 13.5914 16.2578 13.5912 16.2581 13.591L17.3187 12.5303C17.6116 12.2374 17.6116 11.7625 17.3187 11.4697L16.2581 10.409L10.9547 5.10571C10.6619 4.81282 10.187 4.81282 9.89408 5.10571L8.83343 6.16637Z"
    />
  </IconSvg>
));

export default memo(ChevronRight);