import React, { forwardRef, memo } from "react";
import Svg, { Path } from "react-native-svg";
import { SvgIcon, TSvgIconProps } from "../SvgIcon";

const SunIcon = forwardRef<Svg, TSvgIconProps>((props, ref) => (
  <SvgIcon ref={ref} {...props} viewBox="0 0 24 24">
  <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.25 5.625C11.25 5.83211 11.4179 6 11.625 6H12.375C12.5821 6 12.75 5.83211 12.75 5.625V1.875C12.75 1.66789 12.5821 1.5 12.375 1.5H11.625C11.4179 1.5 11.25 1.66789 11.25 1.875V5.625ZM16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12ZM18 11.625C18 11.4179 18.1679 11.25 18.375 11.25H22.125C22.3321 11.25 22.5 11.4179 22.5 11.625V12.375C22.5 12.5821 22.3321 12.75 22.125 12.75H18.375C18.1679 12.75 18 12.5821 18 12.375V11.625ZM11.625 22.5C11.4179 22.5 11.25 22.3321 11.25 22.125V18.375C11.25 18.1679 11.4179 18 11.625 18H12.375C12.5821 18 12.75 18.1679 12.75 18.375V22.125C12.75 22.3321 12.5821 22.5 12.375 22.5H11.625ZM6.96182 8.02252C7.10827 8.169 7.34571 8.169 7.49216 8.02252L8.02245 7.4922C8.16892 7.34576 8.16892 7.10832 8.02245 6.96187L5.37083 4.31022C5.22439 4.16378 4.98695 4.16378 4.84051 4.31022L4.31017 4.84055C4.16373 4.987 4.16373 5.22443 4.31017 5.37088L6.96182 8.02252ZM19.1594 19.6898C19.013 19.8362 18.7756 19.8362 18.6291 19.6898L15.9775 17.0381C15.831 16.8917 15.831 16.6543 15.9775 16.5078L16.5078 15.9775C16.6543 15.831 16.8917 15.831 17.0381 15.9775L19.6898 18.6291C19.8362 18.7756 19.8362 19.013 19.6898 19.1594L19.1594 19.6898ZM8.02245 17.0381C8.16892 16.8917 8.16892 16.6543 8.02245 16.5078L7.49213 15.9775C7.34569 15.831 7.10825 15.831 6.9618 15.9775L4.31015 18.6291C4.16371 18.7756 4.16371 19.013 4.31015 19.1594L4.84049 19.6898C4.98693 19.8362 5.22436 19.8362 5.37081 19.6898L8.02245 17.0381ZM19.6898 4.8405C19.8362 4.98694 19.8362 5.22439 19.6898 5.37083L17.0381 8.02245C16.8917 8.16892 16.6542 8.16892 16.5078 8.02245L15.9775 7.49216C15.831 7.34571 15.831 7.10827 15.9775 6.96182L18.6291 4.31017C18.7756 4.16372 19.013 4.16372 19.1594 4.31017L19.6898 4.8405ZM1.875 11.25C1.66789 11.25 1.5 11.4179 1.5 11.625V12.375C1.5 12.5821 1.66789 12.75 1.875 12.75H5.625C5.83211 12.75 6 12.5821 6 12.375V11.625C6 11.4179 5.83211 11.25 5.625 11.25H1.875Z"
    />
  </SvgIcon>
));

export default memo(SunIcon);
