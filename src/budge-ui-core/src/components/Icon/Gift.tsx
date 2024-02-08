import React, { forwardRef, memo } from "react";
import Svg, { Path } from "react-native-svg";
import { SvgIcon, TSvgIconProps } from "../SvgIcon";

const GiftIcon = forwardRef<Svg, TSvgIconProps>((props, ref) => (
  <SvgIcon ref={ref} {...props} viewBox="0 0 24 24">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.3621 4.0908C13.9218 3.75978 14.4902 3.68952 14.888 3.96221C15.4976 4.38011 15.5005 5.46231 14.9396 6.49958L20.5002 6.50091C20.7764 6.50098 21.0002 6.72489 21.0001 7.00103L20.9999 7.98696L21 7.99688V12.4968C21 12.6505 20.9307 12.7879 20.8216 12.8797C20.734 12.9553 20.6198 13.0011 20.4949 13.0011L19 13.0007V20.9969C19 21.273 18.7761 21.4969 18.5 21.4969H18.1636C18.1452 21.4989 18.1265 21.5 18.1076 21.5L5.49996 21.4969C5.22381 21.4969 5.00001 21.273 5.00008 20.9968L5.00032 20.0148C5.00011 20.0089 5 20.0029 5 19.9969V12.9973L4.00018 12.9971L3.98589 12.9969H3.5C3.22386 12.9969 3 12.773 3 12.4969V6.99688C3 6.72074 3.22386 6.49688 3.5 6.49688H4.5L4.51439 6.49708L8.94172 6.49814C8.37752 5.53812 8.33167 4.52608 8.88666 4.08445C9.30505 3.75151 9.96263 3.82411 10.6075 4.20793C10.8291 3.2884 11.3691 2.63913 12 2.63913C12.6038 2.63913 13.1243 3.23374 13.3621 4.0908ZM17 13.0002V19.4997L13 19.4987V12.9993L17 13.0002ZM11 12.9988V19.4982L7 19.4972V12.9978L11 12.9988ZM19 8.50055L13 8.49911V10.9993L19 11.0007V8.50055ZM11 8.49863L5 8.4972V10.9974L11 10.9988V8.49863Z"
    />
  </SvgIcon>
));

export default memo(GiftIcon);
