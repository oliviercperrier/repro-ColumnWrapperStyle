import React, { forwardRef, memo } from "react";
import Svg, { Path } from "react-native-svg";
import { SvgIcon, TSvgIconProps } from "../SvgIcon";

const GraphIcon = forwardRef<Svg, TSvgIconProps>((props, ref) => (
  <SvgIcon ref={ref} {...props} viewBox="0 0 24 24">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 5.5C4 5.22388 4.22388 5 4.5 5H5.5C5.77612 5 6 5.22388 6 5.5V17.0005L20.4891 17.0039C20.7653 17.0039 20.9891 17.2278 20.989 17.5039L20.9888 18.5039C20.9886 18.78 20.7648 19.0039 20.4886 19.0039L5.5 19H4.5C4.22388 19 4 18.7761 4 18.5V5.5ZM7.5 9.5C7.5 9.22388 7.72388 9 8 9H10C10.2761 9 10.5 9.22388 10.5 9.5V15.5C10.5 15.7761 10.2761 16 10 16H8C7.72388 16 7.5 15.7761 7.5 15.5V9.5ZM12 5C11.7239 5 11.5 5.22388 11.5 5.5V15.5C11.5 15.7761 11.7239 16 12 16H14C14.2761 16 14.5 15.7761 14.5 15.5V5.5C14.5 5.22388 14.2761 5 14 5H12ZM15.5 8.5C15.5 8.22388 15.7239 8 16 8H18C18.2761 8 18.5 8.22388 18.5 8.5V15.5C18.5 15.7761 18.2761 16 18 16H16C15.7239 16 15.5 15.7761 15.5 15.5V8.5Z"
    />
  </SvgIcon>
));

export default memo(GraphIcon);
