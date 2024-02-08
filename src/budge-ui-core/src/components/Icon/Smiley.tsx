import React, { forwardRef, memo } from "react";
import Svg, { Path } from "react-native-svg";
import { SvgIcon, TSvgIconProps } from "../SvgIcon";

const SmileyIcon = forwardRef<Svg, TSvgIconProps>((props, ref) => (
  <SvgIcon ref={ref} {...props} viewBox="0 0 32 32">
    <Path d="M16 3C13.4288 3 10.9154 3.76244 8.77759 5.1909C6.63975 6.61935 4.97351 8.64968 3.98957 11.0251C3.00563 13.4006 2.74819 16.0144 3.2498 18.5362C3.75141 21.0579 4.98953 23.3743 6.80762 25.1924C8.6257 27.0105 10.9421 28.2486 13.4638 28.7502C15.9856 29.2518 18.5995 28.9944 20.9749 28.0104C23.3503 27.0265 25.3807 25.3603 26.8091 23.2224C28.2376 21.0846 29 18.5712 29 16C28.9964 12.5533 27.6256 9.24882 25.1884 6.81163C22.7512 4.37445 19.4467 3.00364 16 3ZM11.5 12C11.7967 12 12.0867 12.088 12.3334 12.2528C12.58 12.4176 12.7723 12.6519 12.8858 12.926C12.9994 13.2001 13.0291 13.5017 12.9712 13.7926C12.9133 14.0836 12.7704 14.3509 12.5607 14.5607C12.3509 14.7704 12.0836 14.9133 11.7926 14.9712C11.5017 15.0291 11.2001 14.9994 10.926 14.8858C10.6519 14.7723 10.4176 14.58 10.2528 14.3334C10.088 14.0867 10 13.7967 10 13.5C10 13.1022 10.158 12.7206 10.4393 12.4393C10.7206 12.158 11.1022 12 11.5 12ZM21.865 19.5C20.5788 21.7238 18.4413 23 16 23C13.5588 23 11.4213 21.725 10.135 19.5C10.0627 19.3862 10.0141 19.2589 9.99218 19.1258C9.97029 18.9927 9.97555 18.8566 10.0076 18.7256C10.0397 18.5946 10.098 18.4715 10.1789 18.3636C10.2598 18.2557 10.3617 18.1652 10.4785 18.0978C10.5952 18.0303 10.7245 17.9871 10.8583 17.9708C10.9922 17.9546 11.128 17.9655 11.2575 18.0031C11.3871 18.0407 11.5077 18.1041 11.6121 18.1895C11.7164 18.2749 11.8025 18.3805 11.865 18.5C12.7988 20.1138 14.2663 21 16 21C17.7338 21 19.2013 20.1125 20.135 18.5C20.1975 18.3805 20.2836 18.2749 20.388 18.1895C20.4924 18.1041 20.6129 18.0407 20.7425 18.0031C20.872 17.9655 21.0078 17.9546 21.1417 17.9708C21.2756 17.9871 21.4048 18.0303 21.5215 18.0978C21.6383 18.1652 21.7402 18.2557 21.8211 18.3636C21.902 18.4715 21.9603 18.5946 21.9924 18.7256C22.0245 18.8566 22.0297 18.9927 22.0078 19.1258C21.9859 19.2589 21.9374 19.3862 21.865 19.5ZM20.5 15C20.2033 15 19.9133 14.912 19.6667 14.7472C19.42 14.5824 19.2277 14.3481 19.1142 14.074C19.0007 13.7999 18.971 13.4983 19.0288 13.2074C19.0867 12.9164 19.2296 12.6491 19.4393 12.4393C19.6491 12.2296 19.9164 12.0867 20.2074 12.0288C20.4983 11.9709 20.7999 12.0006 21.074 12.1142C21.3481 12.2277 21.5824 12.42 21.7472 12.6666C21.912 12.9133 22 13.2033 22 13.5C22 13.8978 21.842 14.2794 21.5607 14.5607C21.2794 14.842 20.8978 15 20.5 15Z" />
  </SvgIcon>
));

export default memo(SmileyIcon);
