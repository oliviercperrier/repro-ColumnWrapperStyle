import React, { forwardRef, memo } from "react";
import Svg, { Path } from "react-native-svg";
import IconSvg, { TIconSvgProps } from "./IconSvg/IconSvg";

const MountainIcon = forwardRef<Svg, TIconSvgProps>((props, ref) => (
  <IconSvg ref={ref} {...props} viewBox="0 0 24 24">
    <Path d="M1.5 14.7931C1.5 14.4422 1.62302 14.1024 1.84767 13.8328L5.02512 10.0199C5.16761 9.84887 5.3787 9.75 5.60128 9.75H5.68934C5.88825 9.75 6.07902 9.82902 6.21967 9.96967L8.25 12L14.7749 4.02507C14.9174 3.85097 15.1305 3.75 15.3554 3.75H16.1395C16.3674 3.75 16.5829 3.85357 16.7252 4.03148L22.1713 10.8391C22.3841 11.1051 22.5 11.4356 22.5 11.7762V17.25C22.5 18.0784 21.8284 18.75 21 18.75H3C2.17157 18.75 1.5 18.0784 1.5 17.25V14.7931Z" />
  </IconSvg>
));

export default memo(MountainIcon);

