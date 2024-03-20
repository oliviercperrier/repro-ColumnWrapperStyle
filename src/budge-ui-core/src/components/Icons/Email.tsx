import React, { forwardRef, memo } from "react";
import Svg, { Path } from "react-native-svg";
import IconSvg, { TIconSvgProps } from "./IconSvg/IconSvg";

const EmailIcon = forwardRef<Svg, TIconSvgProps>((props, ref) => (
  <IconSvg ref={ref} {...props} viewBox="0 0 24 24">
   <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.75 5.25C3.33579 5.25 3 5.58579 3 6V18C3 18.4142 3.33579 18.75 3.75 18.75H20.25C20.6642 18.75 21 18.4142 21 18V6C21 5.58579 20.6642 5.25 20.25 5.25H3.75ZM4.73533 9.75C4.90212 9.75 5.06414 9.80557 5.1958 9.90795L11.5396 14.8421C11.8104 15.0527 12.1896 15.0527 12.4604 14.8421L18.8042 9.90795C18.9359 9.80557 19.0978 9.75 19.2646 9.75H19.5V8.25H19.0073C18.6738 8.25 18.3497 8.36115 18.0864 8.56597L12 13.2998L5.91358 8.56597C5.65028 8.36115 5.32623 8.25 4.99267 8.25H4.5V9.75H4.73533Z"
    />
  </IconSvg>
));

export default memo(EmailIcon);
