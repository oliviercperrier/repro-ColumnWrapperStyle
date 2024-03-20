import React, { forwardRef, memo } from "react";
import Svg, { Path } from "react-native-svg";
import IconSvg, { TIconSvgProps } from "./IconSvg/IconSvg";

const ArrowUpIcon = forwardRef<Svg, TIconSvgProps>((props, ref) => (
  <IconSvg ref={ref} {...props} viewBox="0 0 24 24">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.8904 11.898C17.1833 12.1908 17.6582 12.1908 17.9511 11.898L19.0118 10.8373C19.3047 10.5444 19.3047 10.0695 19.0118 9.77666L13.7085 4.47333L12.6478 3.41267C12.3549 3.11978 11.88 3.11978 11.5872 3.41267L10.5265 4.47333L10.5258 4.47401L5.22319 9.77666C4.93031 10.0695 4.93031 10.5444 5.22319 10.8373L6.28384 11.898C6.57671 12.1908 7.05161 12.1908 7.34449 11.898L10.6175 8.62496L10.6175 20.057C10.6175 20.4711 10.9533 20.807 11.3675 20.807L12.8675 20.807C13.2817 20.807 13.6175 20.4711 13.6175 20.057L13.6175 8.62496L16.8904 11.898Z"
    />
  </IconSvg>
));

export default memo(ArrowUpIcon);
