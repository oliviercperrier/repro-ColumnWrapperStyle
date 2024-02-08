import React, { forwardRef, memo } from "react";
import Svg, { Path } from "react-native-svg";
import { SvgIcon, TSvgIconProps } from "../SvgIcon";

const SearchIcon = forwardRef<Svg, TSvgIconProps>((props, ref) => (
  <SvgIcon ref={ref} {...props} viewBox="0 0 24 24">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.25 10.5C17.25 11.8208 16.8706 13.053 16.2149 14.0936L20.4476 18.3263C20.7405 18.6192 20.7405 19.094 20.4476 19.387L19.387 20.4476C19.094 20.7405 18.6192 20.7405 18.3263 20.4476L14.0936 16.2149C13.053 16.8706 11.8208 17.25 10.5 17.25C6.77208 17.25 3.75 14.228 3.75 10.5C3.75 6.77208 6.77208 3.75 10.5 3.75C14.228 3.75 17.25 6.77208 17.25 10.5ZM10.5 14.25C12.571 14.25 14.25 12.571 14.25 10.5C14.25 8.42895 12.571 6.75 10.5 6.75C8.42895 6.75 6.75 8.42895 6.75 10.5C6.75 12.571 8.42895 14.25 10.5 14.25Z"
    />
  </SvgIcon>
));

export default memo(SearchIcon);
