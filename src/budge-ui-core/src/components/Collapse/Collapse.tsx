import { DefaultProps, TColor, TNumberSize, useComponentDefaultProps, useExtractSx } from "@budgeinc/budge-ui-styling";
import React, { forwardRef, PropsWithChildren, ReactNode, useEffect, useState } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import Collapsible from "react-native-collapsible";
import { Pressable } from "../Pressable";
import AnimatedChevronUpDownIcon from "../Animated/AnimatedChevronUpDownIcon";
import { Box, TBoxProps } from "../Box";
import { TCollapseVariant, useStyles } from "./Collapse.styles";
import { ConditionalWrapper } from "../ConditionalWrapper";
import { Stack } from "../Stack";
import { Text } from "../Text";
import { Lazy } from "../Lazy";

export type TCollapseProps = DefaultProps<ViewStyle> & {
  open?: boolean;
  header: ReactNode;
  expandable?: boolean;
  alwaysOpen?: boolean;
  initialOpen?: boolean;
  variant?: TCollapseVariant;
  headerProps?: TBoxProps;
  contentProps?: TBoxProps;
  showHeaderBorder?: boolean;
  fixHeaderHeight?: boolean;
  collapseIconSpacing?: TNumberSize;
  collapseIconColor?: TColor;
  extra?: ReactNode;
  bordered?: boolean;
  showExpandIcon?: boolean;
  onOpen?(): void;
};

const Collapse = forwardRef<View, PropsWithChildren<TCollapseProps>>((props, ref) => {
  const {
    open,
    initialOpen = false,
    alwaysOpen = false,
    expandable = true,
    bordered = false,
    variant = "default",
    header,
    children,
    style,
    sx,
    headerProps,
    contentProps,
    showHeaderBorder = true,
    fixHeaderHeight = true,
    collapseIconSpacing = "xl",
    collapseIconColor = "primary",
    showExpandIcon = true,
    onOpen,
    extra,
    ...rest
  } = useComponentDefaultProps("Collapse", {}, props);
  const [isOpen, setOpen] = useState(initialOpen);
  const [contentRendered, setContentRendered] = useState(initialOpen);

  const isCollapsed = alwaysOpen ? false : !isOpen;

  const { rootStyle, headerStyle, contentStyle } = useStyles({
    variant,
    isOpen: !isCollapsed,
    showHeaderBorder,
    bordered,
    fixHeaderHeight,
  });

  useEffect(() => {
    if (open !== undefined && open !== contentRendered) {
      setContentRendered(open);
      setOpen(open);
    }
  }, [open]);

  const getPressableWrapper = (currentChildren: any) => (
    <Pressable
      onPress={() => {
        setOpen(prev => !prev);
        onOpen?.();
      }}
      userSelect
    >
      {currentChildren}
    </Pressable>
  );

  return (
    <Box ref={ref} sx={[rootStyle, StyleSheet.flatten(style) as ViewStyle, ...useExtractSx(sx)]} {...rest}>
      <ConditionalWrapper condition={expandable} wrapper={getPressableWrapper}>
        <Box {...headerProps} sx={[headerStyle, ...useExtractSx(headerProps?.sx)]}>
          <Stack.Horizontal f={1} spacing={0}>
            {typeof header === "string" ? <Text variant="bodyMedium">{header}</Text> : header}
          </Stack.Horizontal>
          <Stack.Horizontal alignItems="center">
            {showExpandIcon && (
              <Box shouldRender={expandable} ml={collapseIconSpacing}>
                <AnimatedChevronUpDownIcon color={collapseIconColor} isDown={isOpen} />
              </Box>
            )}
            {extra}
          </Stack.Horizontal>
        </Box>
      </ConditionalWrapper>
      <Collapsible collapsed={isCollapsed}>
        <Lazy visible={!isCollapsed}>
          <Box {...contentProps} sx={[contentStyle, ...useExtractSx(contentProps?.sx)]}>
            {children}
          </Box>
        </Lazy>
      </Collapsible>
    </Box>
  );
});

export default Collapse;
