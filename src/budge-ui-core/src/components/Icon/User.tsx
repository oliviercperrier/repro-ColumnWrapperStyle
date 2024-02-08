import React, { forwardRef, memo } from "react";
import Svg, { Path } from "react-native-svg";
import { SvgIcon, TSvgIconProps } from "../SvgIcon";

const UserIcon = forwardRef<Svg, TSvgIconProps>((props, ref) => (
  <SvgIcon ref={ref} {...props} viewBox="0 0 24 24">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 12.75C14.4853 12.75 16.5 10.7353 16.5 8.25C16.5 5.76472 14.4853 3.75 12 3.75C9.51473 3.75 7.5 5.76472 7.5 8.25C7.5 10.7353 9.51473 12.75 12 12.75ZM4.05887 17.5254C3.86481 17.6665 3.75 17.892 3.75 18.1319V18.75C3.75 19.1642 4.08579 19.5 4.5 19.5H19.5C19.9142 19.5 20.25 19.1642 20.25 18.75V18.1319C20.25 17.892 20.1352 17.6665 19.9412 17.5254L18.2175 16.2719C16.4108 14.9578 14.2341 14.25 12 14.25C9.7659 14.25 7.58925 14.9579 5.78247 16.2719L4.05887 17.5254Z"
    />
  </SvgIcon>
));

export default memo(UserIcon);
