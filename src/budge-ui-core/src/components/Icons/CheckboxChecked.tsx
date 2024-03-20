import React, { forwardRef, memo } from "react";
import Svg, { Path } from "react-native-svg";
import IconSvg, { TIconSvgProps } from "./IconSvg/IconSvg";

const CheckboxCheckedIcon = forwardRef<Svg, TIconSvgProps>((props, ref) => (
  <IconSvg ref={ref} {...props} viewBox="0 0 24 24">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 12V19C3 20.1046 3.89543 21 5 21H12H19C20.1046 21 21 20.1046 21 19V12V5C21 3.89543 20.1046 3 19 3H12H5C3.89543 3 3 3.89543 3 5V12ZM16.7651 9.2652C16.9116 9.4116 16.9116 9.64905 16.7651 9.79553L11.5151 15.0455C11.3687 15.1919 11.1313 15.1919 10.9848 15.0455L7.6098 11.6705C7.46336 11.5241 7.46336 11.2866 7.6098 11.1402L8.14013 10.6099C8.2866 10.4634 8.52405 10.4634 8.67045 10.6099L11.25 13.1894L15.7045 8.73487C15.851 8.5884 16.0883 8.5884 16.2348 8.73487L16.7651 9.2652Z"
    />
  </IconSvg>
));

export default memo(CheckboxCheckedIcon);
