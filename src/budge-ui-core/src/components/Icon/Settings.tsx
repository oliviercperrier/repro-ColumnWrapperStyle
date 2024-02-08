import React, { forwardRef, memo } from "react";
import Svg, { Path } from "react-native-svg";
import { SvgIcon, TSvgIconProps } from "../SvgIcon";

const SettingsIcon = forwardRef<Svg, TSvgIconProps>((props, ref) => (
  <SvgIcon ref={ref} {...props} viewBox="0 0 24 24">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.7498 3.433C12.2857 3.16505 11.7139 3.16505 11.2498 3.433L4.95557 7.06698C4.49146 7.33492 4.20557 7.83015 4.20557 8.36602V15.634C4.20557 16.1699 4.49146 16.6651 4.95557 16.933L11.2498 20.5669C11.7139 20.8349 12.2857 20.8349 12.7498 20.5669L19.044 16.933C19.5081 16.6651 19.794 16.1699 19.794 15.634V8.36602C19.794 7.83015 19.5081 7.33492 19.044 7.06698L12.7498 3.433ZM11.9998 15C13.6566 15 14.9998 13.6568 14.9998 12C14.9998 10.3431 13.6566 9 11.9998 9C10.3429 9 8.99981 10.3431 8.99981 12C8.99981 13.6568 10.3429 15 11.9998 15Z"
    />
  </SvgIcon>
));

export default memo(SettingsIcon);
