import React, { forwardRef, memo } from "react";
import Svg, { Path } from "react-native-svg";
import { SvgIcon, TSvgIconProps } from "../SvgIcon";

const MoreDotsCircledIcon = forwardRef<Svg, TSvgIconProps>((props, ref) => (
  <SvgIcon ref={ref} {...props} viewBox="0 0 24 24">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 21C16.9705 21 21 16.9705 21 12C21 7.02944 16.9705 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9705 7.02944 21 12 21ZM7.5 13.5C8.32845 13.5 9 12.8285 9 12C9 11.1715 8.32845 10.5 7.5 10.5C6.67157 10.5 6 11.1715 6 12C6 12.8285 6.67157 13.5 7.5 13.5ZM12 13.5C12.8285 13.5 13.5 12.8285 13.5 12C13.5 11.1715 12.8285 10.5 12 10.5C11.1715 10.5 10.5 11.1715 10.5 12C10.5 12.8285 11.1715 13.5 12 13.5ZM18 12C18 12.8285 17.3285 13.5 16.5 13.5C15.6715 13.5 15 12.8285 15 12C15 11.1715 15.6715 10.5 16.5 10.5C17.3285 10.5 18 11.1715 18 12Z"
    />
  </SvgIcon>
));

export default memo(MoreDotsCircledIcon);