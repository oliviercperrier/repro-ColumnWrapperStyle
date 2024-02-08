import React, { forwardRef, memo } from "react";
import Svg, { Path } from "react-native-svg";
import { SvgIcon, TSvgIconProps } from "../SvgIcon";

const SuccessIcon = forwardRef<Svg, TSvgIconProps>((props, ref) => (
  <SvgIcon ref={ref} {...props} viewBox="0 0 24 24">
   <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 21C16.9705 21 21 16.9705 21 12C21 7.02944 16.9705 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9705 7.02944 21 12 21ZM16.7651 9.79553C16.9116 9.64905 16.9116 9.4116 16.7651 9.2652L16.2348 8.73487C16.0883 8.5884 15.851 8.5884 15.7045 8.73487L11.25 13.1894L8.67045 10.6099C8.52405 10.4634 8.2866 10.4634 8.14013 10.6099L7.6098 11.1402C7.46336 11.2866 7.46336 11.5241 7.6098 11.6705L10.9848 15.0455C11.1313 15.1919 11.3687 15.1919 11.5151 15.0455L16.7651 9.79553Z"
    />
  </SvgIcon>
));

export default memo(SuccessIcon);
