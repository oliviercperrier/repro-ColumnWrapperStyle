import React, { forwardRef, memo } from "react";
import Svg, { Path } from "react-native-svg";
import {SvgIcon, TSvgIconProps } from "../SvgIcon";

const CloseIcon = forwardRef<Svg, TSvgIconProps>((props, ref) => (
  <SvgIcon ref={ref} {...props} viewBox="0 0 24 24">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.8337 16.773C18.1266 16.48 18.1266 16.0052 17.8337 15.7123L14.1215 12L17.8337 8.28772C18.1266 7.99477 18.1266 7.51995 17.8337 7.22704L16.7731 6.16637C16.4802 5.87348 16.0053 5.87348 15.7124 6.16637L12.0001 9.8787L8.2878 6.16637C7.99485 5.87348 7.52003 5.87348 7.22711 6.16637L6.16645 7.22704C5.87355 7.51995 5.87355 7.99477 6.16645 8.28772L9.87878 12L6.16648 15.7123C5.87359 16.0052 5.87359 16.48 6.16648 16.773L7.22715 17.8336C7.52003 18.1265 7.99493 18.1265 8.2878 17.8336L12.0001 14.1214L15.7124 17.8336C16.0053 18.1265 16.4801 18.1265 16.7731 17.8336L17.8337 16.773Z"
    />
  </SvgIcon>
));

export default memo(CloseIcon);
