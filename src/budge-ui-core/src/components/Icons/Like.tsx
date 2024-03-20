import React, { forwardRef, memo } from "react";
import Svg, { Path } from "react-native-svg";
import IconSvg, { TIconSvgProps } from "./IconSvg/IconSvg";

const LikeIcon = forwardRef<Svg, TIconSvgProps>((props, ref) => (
  <IconSvg ref={ref} {...props} viewBox="0 0 24 24">
    <Path d="M9.42863 8.97846C9.16408 9.45466 8.66215 9.75 8.1174 9.75H7.875C7.66789 9.75 7.5 9.91789 7.5 10.125V17.625C7.5 17.8321 7.66789 18 7.875 18H16.8921C17.5506 18 18.1321 17.5705 18.3258 16.9411L20.4027 10.1911C20.6995 9.22655 19.9783 8.25 18.9691 8.25H14.25L15.3403 4.43406C15.5456 3.71539 15.006 3 14.2586 3H13.1913C12.9189 3 12.668 3.14767 12.5357 3.38577L9.42863 8.97846Z" />
    <Path d="M3.375 9C3.16789 9 3 9.16789 3 9.375V19.125C3 19.3321 3.16789 19.5 3.375 19.5H5.625C5.83211 19.5 6 19.3321 6 19.125V9.375C6 9.16789 5.83211 9 5.625 9H3.375Z" />
  </IconSvg>
));

export default memo(LikeIcon);
