import React, { forwardRef, memo } from "react";
import Svg, { Path } from "react-native-svg";
import IconSvg, { TIconSvgProps } from "./IconSvg/IconSvg";

const ArrowRightIcon = forwardRef<Svg, TIconSvgProps>((props, ref) => (
  <IconSvg ref={ref} {...props} viewBox="0 0 24 24">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.909 7.22698C11.6161 6.93408 11.6161 6.45921 11.909 6.16632L12.9697 5.10566C13.2626 4.81276 13.7374 4.81276 14.0303 5.10566L19.3337 10.409L20.3943 11.4696C20.6872 11.7625 20.6872 12.2374 20.3943 12.5303L19.3337 13.5909L19.333 13.5916L14.0303 18.8942C13.7374 19.1871 13.2626 19.1871 12.9697 18.8942L11.909 17.8336C11.6161 17.5407 11.6161 17.0658 11.909 16.7729L15.1819 13.4999H3.75C3.33579 13.4999 3 13.1642 3 12.7499V11.2499C3 10.8357 3.33579 10.4999 3.75 10.4999H15.1819L11.909 7.22698Z"
    />
  </IconSvg>
));

export default memo(ArrowRightIcon);
