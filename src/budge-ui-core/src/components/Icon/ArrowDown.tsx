import React, { forwardRef, memo } from "react";
import Svg, { Path } from "react-native-svg";
import { SvgIcon, TSvgIconProps } from "../SvgIcon";

const ArrowDownIcon = forwardRef<Svg, TSvgIconProps>((props, ref) => (
  <SvgIcon ref={ref} {...props} viewBox="0 0 24 24">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.34441 12.102C7.05152 11.8092 6.57665 11.8092 6.28375 12.102L5.22309 13.1627C4.93019 13.4556 4.93019 13.9305 5.22309 14.2233L10.5264 19.5267L11.5871 20.5873C11.8799 20.8802 12.3548 20.8802 12.6477 20.5873L13.7084 19.5267L13.709 19.526L19.0117 14.2233C19.3046 13.9305 19.3046 13.4556 19.0117 13.1627L17.951 12.102C17.6582 11.8092 17.1833 11.8092 16.8904 12.102L13.6174 15.375L13.6174 3.943C13.6174 3.52885 13.2816 3.193 12.8674 3.193L11.3674 3.193C10.9532 3.193 10.6174 3.52885 10.6174 3.943L10.6174 15.375L7.34441 12.102Z"
    />
  </SvgIcon>
));

export default memo(ArrowDownIcon);
