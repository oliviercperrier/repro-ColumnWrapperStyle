import React, { forwardRef, memo } from "react";
import Svg, { Path } from "react-native-svg";
import IconSvg, { TIconSvgProps } from "./IconSvg/IconSvg";

const EyeIcon = forwardRef<Svg, TIconSvgProps>((props, ref) => (
  <IconSvg ref={ref} {...props} viewBox="0 0 24 24">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 18C8.33781 18 5.13576 15.7746 3.65734 12.5C5.13576 9.22542 8.33781 7 12 7C15.6622 7 18.8642 9.22543 20.3427 12.5C18.8642 15.7746 15.6622 18 12 18ZM12 5C16.8089 5 20.9102 8.11924 22.5 12.5C20.9102 16.8808 16.8089 20 12 20C7.19113 20 3.08976 16.8808 1.5 12.5C3.08976 8.11923 7.19113 5 12 5ZM13 12.5C13 13.0523 12.5523 13.5 12 13.5C11.4477 13.5 11 13.0523 11 12.5C11 11.9477 11.4477 11.5 12 11.5C12.5523 11.5 13 11.9477 13 12.5ZM15 12.5C15 14.1569 13.6569 15.5 12 15.5C10.3432 15.5 9.00001 14.1569 9.00001 12.5C9.00001 10.8431 10.3432 9.5 12 9.5C13.6569 9.5 15 10.8431 15 12.5Z"
    />
  </IconSvg>
));

export default memo(EyeIcon);
