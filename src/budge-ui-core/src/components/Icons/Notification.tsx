import React, { forwardRef, memo } from "react";
import Svg, { Path } from "react-native-svg";
import IconSvg, { TIconSvgProps } from "./IconSvg/IconSvg";

const NotificationIcon = forwardRef<Svg, TIconSvgProps>((props, ref) => (
  <IconSvg ref={ref} {...props} viewBox="0 0 24 24">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.27724 7.72762C6.54562 5.0438 8.80402 3 11.5012 3H12.4988C15.196 3 17.4544 5.0438 17.7227 7.72762L18.3599 14.0991C18.38 14.2999 18.4802 14.4841 18.6377 14.6101L20.7185 16.2749C20.8964 16.4171 21 16.6326 21 16.8605V17.25C21 17.6642 20.6642 18 20.25 18H18.75H5.25H3.75C3.33579 18 3 17.6642 3 17.25V16.8605C3 16.6326 3.10357 16.4171 3.28147 16.2749L5.36233 14.6101C5.51989 14.4841 5.62001 14.2999 5.64009 14.0991L6.27724 7.72762ZM15 19.5H9C9 20.3284 9.67155 21 10.5 21H13.5C14.3285 21 15 20.3284 15 19.5Z"
    />
  </IconSvg>
));

export default memo(NotificationIcon);
