import React, { forwardRef, memo } from "react";
import Svg, { Path } from "react-native-svg";
import { SvgIcon, TSvgIconProps } from "../SvgIcon";

const AddCircledIcon = forwardRef<Svg, TSvgIconProps>((props, ref) => (
  <SvgIcon ref={ref} {...props} viewBox="0 0 24 24">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 21C16.9705 21 21 16.9705 21 12C21 7.02944 16.9705 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9705 7.02944 21 12 21ZM11.25 8.625C11.25 8.41792 11.4179 8.25 11.625 8.25H12.375C12.5821 8.25 12.75 8.41792 12.75 8.625V11.25H15.375C15.5821 11.25 15.75 11.4179 15.75 11.625V12.375C15.75 12.5821 15.5821 12.75 15.375 12.75H12.75V15.375C12.75 15.5821 12.5821 15.75 12.375 15.75H11.625C11.4179 15.75 11.25 15.5821 11.25 15.375V12.75H8.625C8.41792 12.75 8.25 12.5821 8.25 12.375V11.625C8.25 11.4179 8.41792 11.25 8.625 11.25H11.25V8.625Z"
    />
  </SvgIcon>
));

export default memo(AddCircledIcon);
