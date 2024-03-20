import React, { forwardRef, memo } from "react";
import Svg, { Path } from "react-native-svg";
import IconSvg, { TIconSvgProps } from "./IconSvg/IconSvg";

const WalletIcon = forwardRef<Svg, TIconSvgProps>((props, ref) => (
  <IconSvg ref={ref} {...props} viewBox="0 0 24 24">
  <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 5.25C3 4.83579 3.33579 4.5 3.75 4.5H18.75C19.9927 4.5 21 5.50736 21 6.75V9H18C16.3432 9 15 10.3432 15 12C15 13.6568 16.3432 15 18 15H21V17.25C21 18.4927 19.9927 19.5 18.75 19.5H3.75C3.33579 19.5 3 19.1642 3 18.75V5.25ZM18 13.5C18.8285 13.5 19.5 12.8285 19.5 12C19.5 11.1715 18.8285 10.5 18 10.5C17.1715 10.5 16.5 11.1715 16.5 12C16.5 12.8285 17.1715 13.5 18 13.5Z"
    />
  </IconSvg>
));

export default memo(WalletIcon);
