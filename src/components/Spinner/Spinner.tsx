import React from "react";
import SvgIcon, { TSvgIconProps } from "../SvgIcon";
import { Circle, Path } from "react-native-svg";
import { twMerge } from "tailwind-merge";

const Spinner = ({ className, ...props }: TSvgIconProps) => (
  <SvgIcon
    size="md"
    color="primary"
    {...props}
    viewBox="0 0 24 24"
    className={twMerge(className, "animate-spin")}
  >
    <Circle
      cx="12"
      cy="12"
      r="10"
      fill="transparent"
      stroke="currentColor"
      strokeWidth="4"
      opacity={0.25}
    />
    <Path
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      opacity={0.75}
    />
  </SvgIcon>
);

export default Spinner;
