import React, { PropsWithChildren } from "react";
import { Platform, StyleProp, ViewStyle } from "react-native";
import { Box, TBoxProps } from "../Box";
import { Text } from "../Text";
import { Tooltip as RNPTooltip } from "./react-native-popper";
import { TPlacements } from "./react-native-popper/types";

export type TTooltipProps = TBoxProps & {
  placement?: TPlacements;
  offset?: number;
  title: string;
  style?: StyleProp<ViewStyle>;
  hidden?: boolean;
  containerProps?: TBoxProps;
};

const Tooltip = ({
  title,
  children,
  offset = 5,
  placement,
  hidden,
  containerProps,
  ...props
}: PropsWithChildren<TTooltipProps>) =>
  Platform.OS === "web" && !!title && !hidden ? (
    <Box maw="100%" {...containerProps}>
      <RNPTooltip placement={placement} offset={offset} trigger={children as any}>
        <RNPTooltip.Content>
          <Box py={3} px={8} bg="gray.7" alignItems="center" sx={{ borderRadius: 4 }} {...props}>
            <Text variant="bodySmall" maw="100%" sx={theme => ({ color: theme.white })} ff="system-ui">
              {title}
            </Text>
          </Box>
        </RNPTooltip.Content>
      </RNPTooltip>
    </Box>
  ) : (
    <>{children}</>
  );

export default Tooltip;
