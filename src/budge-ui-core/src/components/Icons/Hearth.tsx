import React, { forwardRef, memo } from "react";
import Svg, { Path } from "react-native-svg";
import IconSvg, { TIconSvgProps } from "./IconSvg/IconSvg";

const HearthIcon = forwardRef<Svg, TIconSvgProps>((props, ref) => (
  <IconSvg ref={ref} {...props} viewBox="0 0 24 24">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.41941 5.97729C6.31195 4.00757 9.38033 4.00757 11.2729 5.97729L12 6.73404L12.7271 5.97729C14.6197 4.00757 17.6881 4.00757 19.5806 5.97729C21.4731 7.947 21.4731 11.1406 19.5806 13.1103L13.0817 19.8742C12.4914 20.4886 11.5086 20.4886 10.9184 19.8742L4.41941 13.1103C2.52686 11.1406 2.52686 7.947 4.41941 5.97729Z"
    />
  </IconSvg>
));

export default memo(HearthIcon);
