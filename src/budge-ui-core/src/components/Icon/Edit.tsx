import React, { forwardRef, memo } from "react";
import Svg, { Path } from "react-native-svg";
import { SvgIcon, TSvgIconProps } from "../SvgIcon";

const EditIcon = forwardRef<Svg, TSvgIconProps>((props, ref) => (
  <SvgIcon ref={ref} {...props} viewBox="0 0 24 24">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 4.5C5.17157 4.5 4.5 5.17157 4.5 6V18C4.5 18.8285 5.17157 19.5 6 19.5H18C18.8285 19.5 19.5 18.8285 19.5 18V6C19.5 5.17157 18.8285 4.5 18 4.5H6ZM7.93928 14.6894L14.4242 8.20447L16.0151 9.79545L9.53025 16.2803C9.47003 16.3405 9.39997 16.39 9.32317 16.4268L7.35086 17.3687C7.03183 17.5211 6.6985 17.1877 6.85087 16.8687L7.7928 14.8964C7.82947 14.8196 7.87905 14.7496 7.93928 14.6894ZM17.6411 8.16945L17.0758 8.7348L15.4848 7.1438L16.0501 6.57848C16.4894 6.13914 17.2018 6.13914 17.6411 6.57848C18.0805 7.01782 18.0805 7.7301 17.6411 8.16945Z"
    />
  </SvgIcon>
));

export default memo(EditIcon);
