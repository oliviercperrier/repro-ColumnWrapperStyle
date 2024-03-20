import React, { forwardRef, memo } from "react";
import Svg, { Path } from "react-native-svg";
import IconSvg, { TIconSvgProps } from "./IconSvg/IconSvg";

const TrashIcon = forwardRef<Svg, TIconSvgProps>((props, ref) => (
  <IconSvg ref={ref} {...props} viewBox="0 0 24 24">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.5427 3.91459C9.66975 3.6605 9.92947 3.5 10.2135 3.5H13.7865C14.0705 3.5 14.3302 3.6605 14.4573 3.91459L15 5H18.75C19.1642 5 19.5 5.33579 19.5 5.75C19.5 6.16421 19.1642 6.5 18.75 6.5H5.25C4.83579 6.5 4.5 6.16421 4.5 5.75C4.5 5.33579 4.83579 5 5.25 5H9L9.5427 3.91459ZM6.83794 8C6.39094 8 6.04317 8.38858 6.09253 8.8328L7.2592 19.3328C7.30141 19.7127 7.62248 20 8.0046 20H15.9954C16.3775 20 16.6986 19.7127 16.7408 19.3328L17.9074 8.8328C17.9568 8.38858 17.609 8 17.162 8H6.83794Z"
    />
  </IconSvg>
));

export default memo(TrashIcon);
