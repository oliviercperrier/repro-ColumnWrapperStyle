import React from "react";
import { TColor } from "@budgeinc/budge-ui-styling";
import { MotifiedBox } from "../Box";
import { ChevronDownIcon, TIconSvgProps } from "../Icons";

export type TRotatingIcon = TIconSvgProps & {
  isDown: boolean;
  color?: TColor;
};

const AnimatedChevronUpDownIcon = ({ isDown, ...props }: TRotatingIcon) => (
  <MotifiedBox
    animate={{
      transform: [
        {
          rotate: isDown ? "-180deg" : "0deg",
        },
      ],
    }}
    transition={{
      type: "timing",
    }}
  >
    <ChevronDownIcon {...props} />
  </MotifiedBox>
);

export default AnimatedChevronUpDownIcon;
