import React, { forwardRef, memo } from "react";
import Svg, { Path } from "react-native-svg";
import { SvgIcon, TSvgIconProps } from "../SvgIcon";

const BudgeIcon = forwardRef<Svg, TSvgIconProps>((props, ref) => (
  <SvgIcon ref={ref} {...props} viewBox="0 0 24 24">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.554 9.74884C4.29051 9.74884 4.0769 9.95697 4.0769 10.2138V20.1467C4.0769 20.4035 4.29051 20.6117 4.554 20.6117H18.3301C19.2524 20.6117 20 19.8831 20 18.9843V11.3762C20 10.4774 19.2524 9.74884 18.3301 9.74884H4.554ZM6.46552 12.6199H8.45596C8.45602 14.5482 10.06 16.1114 12.0386 16.1114C14.0173 16.1114 15.6213 14.5482 15.6214 12.6199H17.6117C17.6117 15.6197 15.1166 18.0514 12.0386 18.0514C8.96067 18.0514 6.46552 15.6197 6.46552 12.6199Z"
    />
    <Path
      d="M15.6823 8.04301V3.39731C15.6823 2.27479 14.3911 1.61204 13.4414 2.24705L4.71141 8.08378C4.51813 8.21301 4.61197 8.50798 4.84635 8.50798H15.2052C15.4687 8.50798 15.6823 8.29981 15.6823 8.04301Z"
    />
  </SvgIcon>
));

export default memo(BudgeIcon);
