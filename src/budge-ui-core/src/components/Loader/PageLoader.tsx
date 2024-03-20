import { TSize, useExtractSx, TColor } from "@budgeinc/budge-ui-styling";
import React, { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";
import { Box, TBoxProps } from "../Box";
import { Text } from "../Text";
import { Stack } from "../Stack";
import Spinner from "./Spinner";
import { BudgeIcon } from "../Icons";

export interface TPageLoaderProps extends TBoxProps {
  style?: StyleProp<ViewStyle>;
  title?: ReactNode;
  spinnerSize?: TSize;
  spinnerColor?: TColor;
  iconColor?: TColor;
}

const SIZE_MAP: Record<TSize, number> = {
  xs: 32,
  sm: 40,
  md: 48,
  lg: 64,
  xl: 75,
  xxl: 84,
};

const PageLoader = ({
  title,
  spinnerSize = "lg",
  spinnerColor = "primary",
  iconColor,
  sx,
  ...rest
}: TPageLoaderProps) => (
  <Stack
    top={0}
    bottom={0}
    right={0}
    left={0}
    pos="absolute"
    alignItems="center"
    justifyContent="center"
    spacing="md"
    sx={[
      theme => ({
        backgroundColor: theme.white,
      }),
      ...useExtractSx(sx),
    ]}
    {...rest}
  >
    <Box alignItems="center" justifyContent="center">
      <Spinner size={SIZE_MAP[spinnerSize]} color={spinnerColor} />
      <Box pos="absolute">
        <BudgeIcon size={spinnerSize} useBudgeColorGradient={!iconColor} color={iconColor} />
      </Box>
    </Box>
    {typeof title === "string" ? (
      <Text ta="center" px="xl" color="primary" fw="600" variant="bodyMedium">
        {title}
      </Text>
    ) : (
      title
    )}
  </Stack>
);

export default PageLoader;
