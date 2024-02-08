import React, { forwardRef, memo } from "react";
import Svg, { Path } from "react-native-svg";
import { SvgIcon, TSvgIconProps } from "../SvgIcon";

const AdvancedSettings = forwardRef<Svg, TSvgIconProps>((props, ref) => (
  <SvgIcon ref={ref} {...props} viewBox="0 0 24 24">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.792 6C17.4062 6.88295 16.5252 7.5 15.5 7.5C14.4748 7.5 13.5938 6.88295 13.208 6H3.5C3.22386 6 3 5.77614 3 5.5V4.5C3 4.22386 3.22386 4 3.5 4H13.208C13.5938 3.11705 14.4748 2.5 15.5 2.5C16.5252 2.5 17.4062 3.11705 17.792 4H20.5C20.7761 4 21 4.22386 21 4.5V5.5C21 5.77614 20.7761 6 20.5 6H17.792ZM14.3819 6C14.6566 6.30687 15.0557 6.5 15.5 6.5C15.9443 6.5 16.3434 6.30688 16.6181 6C16.8556 5.73462 17 5.38418 17 5C17 4.63756 16.8715 4.30515 16.6575 4.04586C16.6446 4.03031 16.6315 4.01502 16.6181 4C16.3434 3.69313 15.9443 3.5 15.5 3.5C15.0557 3.5 14.6566 3.69313 14.3819 4C14.1444 4.26538 14 4.61582 14 5C14 5.36244 14.1285 5.69485 14.3425 5.95414C14.3554 5.96969 14.3685 5.98498 14.3819 6ZM7.35354 12.967H7.38195C7.15017 12.7081 7.00704 12.3681 7.00025 11.9949C7.00302 11.1688 7.67353 10.5 8.50024 10.5C9.31938 10.5 9.98516 11.1566 9.99999 11.9722C9.99871 12.3543 9.85451 12.7028 9.61805 12.967H9.64695C9.37179 13.293 8.96019 13.5 8.50024 13.5C8.04029 13.5 7.62869 13.293 7.35354 12.967ZM6.22295 10.967H3.5C3.22386 10.967 3 11.1909 3 11.467V12.467C3 12.7432 3.22386 12.967 3.5 12.967H6.19415C6.57222 13.8676 7.46238 14.5 8.50024 14.5C9.53811 14.5 10.4283 13.8676 10.8063 12.967H20.5C20.7761 12.967 21 12.7432 21 12.467V11.467C21 11.1909 20.7761 10.967 20.5 10.967H10.7775C10.3844 10.1017 9.5126 9.5 8.50024 9.5C7.48789 9.5 6.61608 10.1017 6.22295 10.967ZM16.6181 20C16.8556 19.7346 17 19.3842 17 19C17 18.6158 16.8556 18.2654 16.6181 18C16.3434 17.6931 15.9443 17.5 15.5 17.5C15.0557 17.5 14.6566 17.6931 14.3819 18C14.1444 18.2654 14 18.6158 14 19C14 19.3842 14.1444 19.7346 14.3819 20C14.6566 20.3069 15.0557 20.5 15.5 20.5C15.9443 20.5 16.3434 20.3069 16.6181 20ZM17.792 20C17.4062 20.883 16.5252 21.5 15.5 21.5C14.4748 21.5 13.5938 20.883 13.208 20H3.5C3.22386 20 3 19.7761 3 19.5V18.5C3 18.2239 3.22386 18 3.5 18H13.208C13.5938 17.117 14.4748 16.5 15.5 16.5C16.5252 16.5 17.4062 17.117 17.792 18H20.5C20.7761 18 21 18.2239 21 18.5V19.5C21 19.7761 20.7761 20 20.5 20H17.792Z"
    />
  </SvgIcon>
));

export default memo(AdvancedSettings);
