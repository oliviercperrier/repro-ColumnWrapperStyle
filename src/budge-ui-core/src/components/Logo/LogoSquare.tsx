/* eslint-disable max-len */
import React, { forwardRef, memo, useId } from "react";
import { StyleProp, ViewStyle } from "react-native";
import Svg, { Defs, LinearGradient, Path, Stop } from "react-native-svg";

export type TLogoSquareProps = {
  height?: number | string;
  width?: number | string;
  style?: StyleProp<ViewStyle>;
};

const LogoSquare = ({ width = 42, height = 42, style }: TLogoSquareProps, ref: React.Ref<Svg>) => {
  const id = useId();
  const svgGradientId0 = `budgeSquareLogoGradient0${id}`;
  const svgGradientId1 = `budgeSquareLogoGradient1${id}`;

  return (
    <Svg ref={ref} width={width} height={height} style={style} viewBox="0 0 1024 1024" fill="none">
      <Path
        d="M0 418.6C0 270.532 0 196.499 29.2725 140.147C53.9401 92.6594 92.6594 53.9401 140.147 29.2725C196.499 0 270.532 0 418.6 0H605.4C753.468 0 827.501 0 883.853 29.2725C931.341 53.9401 970.06 92.6594 994.727 140.147C1024 196.499 1024 270.532 1024 418.6V605.4C1024 753.468 1024 827.501 994.727 883.853C970.06 931.341 931.341 970.06 883.853 994.727C827.501 1024 753.468 1024 605.4 1024H418.6C270.532 1024 196.499 1024 140.147 994.727C92.6594 970.06 53.9401 931.341 29.2725 883.853C0 827.501 0 753.468 0 605.4V418.6Z"
        fill={`url(#${svgGradientId0})`}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M649.101 289.5V345.952H259.429C262.345 337.557 267.141 330.053 273.398 324.097C279.655 318.141 287.181 313.915 295.32 311.788L585.865 235.422C593.355 233.536 601.146 233.476 608.661 235.247C616.176 237.018 623.222 240.575 629.275 245.653C635.518 250.834 640.555 257.487 643.994 265.093C647.433 272.699 649.181 281.052 649.101 289.5ZM257 382H707C740.137 382 767 408.863 767 442V685C767 718.137 740.137 745 707 745H317C283.863 745 257 718.137 257 685V382ZM408.5 495C408.5 552.261 454.714 598.5 511.5 598.5C568.286 598.5 614.5 552.261 614.5 495H669.5C669.5 582.438 598.86 653.5 511.5 653.5C424.14 653.5 353.5 582.438 353.5 495H408.5Z"
        fill={`url(#${svgGradientId1})`}
      />
      <Defs>
        <LinearGradient id={svgGradientId0} x1="512" y1="0" x2="512" y2="1024" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#972DDD" />
          <Stop offset="1" stopColor="#4D0077" />
        </LinearGradient>
        <LinearGradient
          id={svgGradientId1}
          x1="454.491"
          y1="232.962"
          x2="452.202"
          y2="745.412"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FF7D5C" />
          <Stop offset="1" stopColor="#FF004D" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default memo(forwardRef(LogoSquare));
