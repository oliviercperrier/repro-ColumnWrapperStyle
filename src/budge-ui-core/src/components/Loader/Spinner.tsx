import React, { memo } from "react";
import { TColor, TNumberSize, TSize, useTheme } from "@budgeinc/budge-ui-styling";
import { Easing } from "react-native-reanimated";
import { MotifiedBox } from "../Box";

export type TSpinnerProps = {
  size?: TNumberSize;
  color?: TColor;
};

const sizes: Record<TSize, number> = {
  xs: 16,
  sm: 18,
  md: 24,
  lg: 32,
  xl: 36,
  xxl: 48,
};

const Spinner = ({ size = "sm", color = "primary" }: TSpinnerProps) => {
  const theme = useTheme();
  const finalSize = typeof size === "number" ? size : sizes[size];
  const borderWidth = finalSize * 0.13;
  const indicatorColor = theme.fn.variant({ variant: "filled", color });

  return (
    <MotifiedBox
      from={{
        rotateZ: "0deg",
      }}
      animate={{
        rotateZ: "360deg",
      }}
      transition={{
        loop: true,
        type: "timing",
        duration: 750,
        easing: Easing.linear,
        repeatReverse: false,
      }}
      radius={finalSize}
      w={finalSize}
      h={finalSize}
      style={[
        {
          borderWidth,
          borderTopColor: theme.fn.alpha(indicatorColor.background, 0.2),
          borderRightColor: theme.fn.alpha(indicatorColor.background, 0.2),
          borderBottomColor: theme.fn.alpha(indicatorColor.background, 0.2),
          borderLeftColor: indicatorColor.background,
        },
      ]}
    />
  );
};

export default memo(Spinner);
