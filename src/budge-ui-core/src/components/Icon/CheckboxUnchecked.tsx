import React, { forwardRef, memo } from "react";
import Svg, { Path } from "react-native-svg";
import { SvgIcon, TSvgIconProps } from "../SvgIcon";

const CheckboxUncheckedIcon = forwardRef<Svg, TSvgIconProps>((props, ref) => (
  <SvgIcon ref={ref} {...props} viewBox="0 0 24 24">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.25 3C3.55964 3 3 3.55964 3 4.25C3 4.25002 3 4.25005 3 4.25008V19.9424C3 20.6327 3.55964 21.1924 4.25 21.1924H19.9423H19.9423C20.0286 21.1924 20.1129 21.1836 20.1942 21.167C20.7638 21.0504 21.1923 20.5464 21.1923 19.9424L21.1923 19.9313V4.26103L21.1923 4.25C21.1923 3.55964 20.6327 3 19.9423 3H4.25ZM5.5 18.6924H18.6923V5.5H5.5V18.6924Z"
    />
  </SvgIcon>
));

export default memo(CheckboxUncheckedIcon);
