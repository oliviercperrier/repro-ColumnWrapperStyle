import React, { forwardRef, memo, PropsWithChildren } from "react";
import { DefaultProps, TColor, useComponentDefaultProps } from "@budgeinc/budge-ui-styling";
import { View, ViewStyle } from "react-native";
import { useStyles } from "./Badge.styles";
import { Box, MotifiedBox } from "../Box";
import { Text } from "../Text";

export type TBadgeProps = DefaultProps<ViewStyle> & {
  count: number;
  color?: TColor;
};

const Badge = forwardRef<View, PropsWithChildren<TBadgeProps>>((props, ref) => {
  const { color = "red", children, count, ...rest } = useComponentDefaultProps("Badge", {}, props);
  const { rootStyle, textColor } = useStyles({ color });

  const exceedMax = count > 99;
  const countDisplay = exceedMax ? "99+" : count || "";

  return (
    <Box ref={ref} alignSelf="flex-start" {...rest}>
      <MotifiedBox
        from={{
          scale: 0,
        }}
        animate={{
          scale: count > 0 ? 1 : 0,
        }}
        transition={{
          type: "timing",
        }}
        style={rootStyle}
        right={exceedMax ? -14 : -8}
        top={-8}
      >
        <Text color={textColor} variant="bodySmall">
          {countDisplay}
        </Text>
      </MotifiedBox>
      {children}
    </Box>
  );
});

export default memo(Badge);
