import React, { forwardRef, memo } from "react";
import Svg, { Circle, Path } from "react-native-svg";
import { SvgIcon, TSvgIconProps } from "../SvgIcon";

const PtoIcon = forwardRef<Svg, TSvgIconProps>((props, ref) => (
  <SvgIcon ref={ref} {...props} viewBox="0 0 24 24">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.875 3C7.66792 3 7.5 3.16789 7.5 3.375V4.5H5.25C4.83579 4.5 4.5 4.83579 4.5 5.25V20.25C4.5 20.6642 4.83579 21 5.25 21H18.75C19.1642 21 19.5 20.6642 19.5 20.25V5.25C19.5 4.83579 19.1642 4.5 18.75 4.5H16.5V3.375C16.5 3.16789 16.3321 3 16.125 3H15.375C15.1679 3 15 3.16789 15 3.375V4.5H9V3.375C9 3.16789 8.83208 3 8.625 3H7.875ZM6.375 10.5C6.16789 10.5 6 10.6679 6 10.875V19.125C6 19.3321 6.16789 19.5 6.375 19.5H17.625C17.8321 19.5 18 19.3321 18 19.125V10.875C18 10.6679 17.8321 10.5 17.625 10.5H6.375ZM9 15C9.82845 15 10.5 14.3285 10.5 13.5C10.5 12.6715 9.82845 12 9 12C8.17155 12 7.5 12.6715 7.5 13.5C7.5 14.3285 8.17155 15 9 15Z"
    />
    <Circle cx="12" cy="13.5" r="1.5" />
    <Circle cx="9" cy="16.5" r="1.5" />
    <Circle cx="15" cy="13.5" r="1.5" />
  </SvgIcon>
));

export default memo(PtoIcon);
