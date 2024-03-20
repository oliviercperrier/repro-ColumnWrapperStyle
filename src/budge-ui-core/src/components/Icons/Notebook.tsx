import React, { forwardRef, memo } from "react";
import Svg, { Path } from "react-native-svg";
import IconSvg, { TIconSvgProps } from "./IconSvg/IconSvg";

const NotebookIcon = forwardRef<Svg, TIconSvgProps>((props, ref) => (
  <IconSvg ref={ref} {...props} viewBox="0 0 24 24">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.25 3H6C5.58579 3 5.25 3.33579 5.25 3.75V20.25C5.25 20.6642 5.58579 21 6 21H14.25V3ZM15.75 21H16.5C17.7427 21 18.75 19.9927 18.75 18.75V5.25C18.75 4.00736 17.7427 3 16.5 3H15.75V21Z"
    />
  </IconSvg>
));

export default memo(NotebookIcon);
