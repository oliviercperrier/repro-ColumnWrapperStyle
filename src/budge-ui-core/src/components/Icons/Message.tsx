import React, { forwardRef, memo } from "react";
import Svg, { Path } from "react-native-svg";
import IconSvg, { TIconSvgProps } from "./IconSvg/IconSvg";

const MessageIcon = forwardRef<Svg, TIconSvgProps>((props, ref) => (
  <IconSvg ref={ref} {...props} viewBox="0 0 24 24">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 20.25C16.5564 20.25 20.25 16.5563 20.25 12C20.25 7.44365 16.5564 3.75 12 3.75C7.44368 3.75 3.75002 7.44365 3.75002 12C3.75002 13.5535 4.1794 15.0067 4.92595 16.2474C4.92538 16.2491 4.9248 16.2506 4.92424 16.2522L3.59374 20.0536C3.37364 20.6825 4.0216 21.2647 4.62343 20.9788L8.15531 19.3013C9.30341 19.907 10.6116 20.25 12 20.25Z"
    />
  </IconSvg>
));

export default memo(MessageIcon);
