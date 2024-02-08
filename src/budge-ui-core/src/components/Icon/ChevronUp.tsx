import React, { forwardRef, memo } from "react";
import Svg, { Path } from "react-native-svg";
import { SvgIcon, TSvgIconProps } from "../SvgIcon";

const ChevronUp = forwardRef<Svg, TSvgIconProps>((props, ref) => (
  <SvgIcon ref={ref} {...props} viewBox="0 0 24 24">
   <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.16595 15.8409C6.45884 16.1338 6.93372 16.1338 7.22661 15.8409L11.9996 11.068L16.7725 15.8409C17.0655 16.1338 17.5403 16.1338 17.8332 15.8409L18.8939 14.7803C19.1868 14.4874 19.1868 14.0125 18.8939 13.7196L13.5913 8.41697C13.591 8.41675 13.5908 8.41652 13.5906 8.4163L12.5299 7.35565C12.2371 7.06276 11.7622 7.06276 11.4693 7.35565L10.4086 8.4163L5.10529 13.7196C4.8124 14.0125 4.8124 14.4874 5.10529 14.7803L6.16595 15.8409Z"
    />
  </SvgIcon>
));

export default memo(ChevronUp);
