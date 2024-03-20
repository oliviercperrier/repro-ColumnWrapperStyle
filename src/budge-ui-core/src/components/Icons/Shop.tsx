import React, { forwardRef, memo } from "react";
import Svg, { Path } from "react-native-svg";
import IconSvg, { TIconSvgProps } from "./IconSvg/IconSvg";

const ShopIcon = forwardRef<Svg, TIconSvgProps>((props, ref) => (
  <IconSvg ref={ref} {...props} viewBox="0 0 24 24">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.25017 6.75C8.25017 4.67894 9.92904 3 12.0002 3C14.0712 3 15.7502 4.67894 15.7502 6.75V9H18.6506C19.1017 9 19.4507 9.3954 19.3948 9.843L18.0823 20.343C18.0353 20.7184 17.7163 21 17.3381 21H6.66222C6.28397 21 5.96492 20.7184 5.91801 20.343L4.60551 9.843C4.54955 9.3954 4.8986 9 5.34972 9H8.25017V6.75ZM9.75017 9H14.2502V6.75C14.2502 5.50736 13.2428 4.5 12.0002 4.5C10.7575 4.5 9.75017 5.50736 9.75017 6.75V9Z"
    />
  </IconSvg>
));

export default memo(ShopIcon);