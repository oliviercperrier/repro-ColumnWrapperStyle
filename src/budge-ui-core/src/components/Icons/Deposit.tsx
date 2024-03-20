import React, { forwardRef, memo } from "react";
import Svg, { Path } from "react-native-svg";
import IconSvg, { TIconSvgProps } from "./IconSvg/IconSvg";

const DepositIcon = forwardRef<Svg, TIconSvgProps>((props, ref) => (
  <IconSvg ref={ref} {...props} viewBox="0 0 20 20">
    <Path d="M3.24322 9.08606H0.506754C0.226873 9.08606 0 9.3484 0 9.67199V19.086C0 19.4096 0.226873 19.6719 0.506754 19.6719H3.24322C3.5231 19.6719 3.74997 19.4096 3.74997 19.086V9.67199C3.74997 9.3484 3.5231 9.08606 3.24322 9.08606Z" />
    <Path d="M19.3194 14.8446L11.3128 18.7145C10.8656 18.9305 10.3617 18.9993 9.8734 18.9102L4.92188 18.0098V10.9708L6.86366 10.5986C7.86326 10.4072 8.89724 10.6579 9.69762 11.2868L12.7136 13.6567C12.7697 13.7003 12.7799 13.7802 12.7394 13.8368C12.2335 14.545 11.3011 14.7767 10.523 14.3872L9.81403 14.0329C9.52458 13.8884 9.17263 14.0056 9.0281 14.295C8.88318 14.5845 9.00075 14.9364 9.29021 15.0809L9.99879 15.4356C11.2847 16.0786 12.8539 15.6931 13.6929 14.5181L14.3416 13.5921C14.4279 13.4688 14.5584 13.3835 14.7059 13.3538L18.5331 12.5841C19.2284 12.4442 19.8999 12.9013 19.9901 13.6048C20.0569 14.1255 19.7815 14.6212 19.3194 14.8446Z" />
    <Path d="M11.875 1C9.37644 1 7.34375 3.03269 7.34375 5.53126C7.34375 8.02984 9.37644 10.0625 11.875 10.0625C14.3736 10.0625 16.4063 8.02984 16.4063 5.53126C16.4063 3.03269 14.3736 1 11.875 1ZM13.3515 6.54586C13.2599 7.09062 12.8825 7.52371 12.3874 7.70278V7.82872C12.3874 8.11486 12.1487 8.34521 11.8596 8.33162C11.5888 8.31886 11.3804 8.08559 11.3804 7.81452V7.75977C11.1535 7.71996 10.9457 7.63602 10.686 7.4684C10.4546 7.319 10.3707 7.01248 10.5127 6.77649C10.6607 6.53056 10.9818 6.45873 11.2199 6.61444C11.4653 6.77498 11.5445 6.78743 11.8804 6.78518C12.2043 6.78303 12.3333 6.52881 12.3585 6.37895C12.3811 6.24438 12.3557 6.06548 12.1062 5.97727C11.6882 5.82952 11.2595 5.65995 10.9559 5.42174C10.2644 4.8794 10.4731 3.64062 11.3804 3.31105V3.25889C11.3804 2.97274 11.6191 2.74235 11.9082 2.75598C12.1651 2.76807 12.3874 2.98419 12.3874 3.28218C12.617 3.33823 12.7942 3.42204 12.9732 3.53177C13.217 3.6814 13.2886 4.00534 13.1258 4.24465C12.983 4.4547 12.6858 4.5368 12.4193 4.37331C12.282 4.28906 12.0379 4.20186 11.8091 4.24579C11.6879 4.26906 11.5815 4.34857 11.5579 4.47414C11.5415 4.56107 11.5691 4.61588 11.5773 4.62948C11.6521 4.75326 12.1209 4.91451 12.4418 5.02796C13.0995 5.26036 13.4651 5.8704 13.3515 6.54586Z" />
  </IconSvg>
));

export default memo(DepositIcon);
