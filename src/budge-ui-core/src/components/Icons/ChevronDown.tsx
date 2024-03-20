import React, { forwardRef, memo } from "react";
import Svg, { Path } from "react-native-svg";
import IconSvg, { TIconSvgProps } from "./IconSvg/IconSvg";

const ChevronDownIcon = forwardRef<Svg, TIconSvgProps>((props, ref) => (
  <IconSvg ref={ref} {...props} viewBox="0 0 24 24">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.16608 8.90903C6.45897 8.61615 6.93384 8.61615 7.22673 8.90903L11.9997 13.682L16.7727 8.90903C17.0656 8.61615 17.5404 8.61615 17.8333 8.90903L18.894 9.96968C19.1869 10.2626 19.1869 10.7375 18.894 11.0303L13.5914 16.333C13.5912 16.3332 13.5909 16.3334 13.5907 16.3337L12.5301 17.3943C12.2372 17.6872 11.7623 17.6872 11.4694 17.3943L10.4087 16.3337L5.10541 11.0303C4.81252 10.7375 4.81252 10.2626 5.10541 9.96968L6.16608 8.90903Z"
    />
  </IconSvg>
));

export default memo(ChevronDownIcon);
