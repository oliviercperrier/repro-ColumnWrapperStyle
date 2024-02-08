import React, { forwardRef, memo } from "react";
import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg";
import { SvgIcon, TSvgIconProps } from "../../SvgIcon";

const GoogleIcon = forwardRef<Svg, TSvgIconProps>((props, ref) => (
  <SvgIcon ref={ref} {...props} viewBox="0 0 24 24">
    <G clipPath="url(#clip0_1005_187)">
      <Path
        d="M20.8246 12.2074C20.8246 11.5956 20.775 10.9805 20.6691 10.3787H12.1801V13.8444H17.0414C16.8396 14.9622 16.1915 15.951 15.2423 16.5793V18.828H18.1426C19.8457 17.2605 20.8246 14.9456 20.8246 12.2074Z"
        fill="#4285F4"
      />
      <Path
        d="M12.18 21.0005C14.6073 21.0005 16.6543 20.2035 18.1458 18.8278L15.2455 16.579C14.4386 17.128 13.3969 17.4389 12.1833 17.4389C9.83529 17.4389 7.84448 15.8548 7.13016 13.7251H4.13733V16.0433C5.66516 19.0824 8.77705 21.0005 12.18 21.0005V21.0005Z"
        fill="#34A853"
      />
      <Path
        d="M7.12696 13.7253C6.74996 12.6075 6.74996 11.3972 7.12696 10.2794V7.96118H4.13743C2.86093 10.5043 2.86093 13.5004 4.13743 16.0435L7.12696 13.7253V13.7253Z"
        fill="#FBBC04"
      />
      <Path
        d="M12.18 6.56225C13.4631 6.5424 14.7032 7.02523 15.6325 7.9115L18.202 5.34196C16.575 3.81413 14.4155 2.97415 12.18 3.00061C8.77705 3.00061 5.66516 4.91867 4.13733 7.96111L7.12686 10.2793C7.83786 8.1463 9.83198 6.56225 12.18 6.56225V6.56225Z"
        fill="#EA4335"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_1005_187">
        <Rect width="18" height="18" fill="white" transform="translate(3 3)" />
      </ClipPath>
    </Defs>
  </SvgIcon>
));

export default memo(GoogleIcon);
