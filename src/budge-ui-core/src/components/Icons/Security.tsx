import React, { forwardRef, memo } from "react";
import Svg, { Path } from "react-native-svg";
import IconSvg, { TIconSvgProps } from "./IconSvg/IconSvg";

const SecurityIcon = forwardRef<Svg, TIconSvgProps>((props, ref) => (
  <IconSvg ref={ref} {...props} viewBox="0 0 24 24">
     <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.5 13.1029V3.75C4.5 3.33579 4.83579 3 5.25 3H18.75C19.1642 3 19.5 3.33579 19.5 3.75V13.1029C19.5 15.2105 18.3942 17.1635 16.587 18.2478L12.7717 20.537C12.2967 20.822 11.7033 20.822 11.2282 20.537L7.41303 18.2478C5.60579 17.1635 4.5 15.2105 4.5 13.1029ZM16.7651 9.04553C16.9116 8.89905 16.9116 8.6616 16.7651 8.5152L16.2348 7.9848C16.0883 7.8384 15.851 7.8384 15.7045 7.9848L11.25 12.4394L8.67045 9.8598C8.52405 9.7134 8.2866 9.7134 8.14013 9.8598L7.6098 10.3902C7.46336 10.5366 7.46336 10.7741 7.6098 10.9205L10.9848 14.2955C11.1313 14.4419 11.3687 14.4419 11.5151 14.2955L16.7651 9.04553Z"
    />
  </IconSvg>
));

export default memo(SecurityIcon);
