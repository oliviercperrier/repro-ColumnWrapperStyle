import React, { useCallback } from "react";
import { useTheme } from "@budgeinc/budge-ui-styling";
import { Box } from "../Box";
import { ScrollView } from "../ScrollView";
import { Stack } from "../Stack";
import { Text } from "../Text";
import { Pressable } from "../Pressable";
import { TTabsBarProps, TTabsPaneChildElementType } from "./Tabs.types";
import { ConditionalWrapper } from "../ConditionalWrapper";

const TabsBar = ({
  paneRefs,
  parsedChildren,
  activeKey,
  size = "default",
  onChange,
  activeColor = "primary",
  borderWidth = 1,
  activeBorderWidth = 2,
  tabBarItemProps,
  scrollEnabled = true,
  extra,
}: TTabsBarProps) => {
  const theme = useTheme();

  const getChildrenTabs = useCallback(
    () =>
      (parsedChildren as TTabsPaneChildElementType[]).map(pane => {
        const isActive = activeKey === pane.props.tabKey;

        return (
          <Pressable
            key={pane.props.tabKey}
            onPress={
              isActive
                ? undefined
                : async () => {
                    const navigateToNextTab = () => onChange(pane.props.tabKey);

                    /**
                     * Allow to validate the state of a tab content and
                     * prevent or not navigation to another tab
                     */
                    const previousTabRef = paneRefs[activeKey]?.current;
                    const isPreviousTabStateValid =
                      previousTabRef && previousTabRef.canNavigate
                        ? await previousTabRef.canNavigate(navigateToNextTab)
                        : true;

                    if (isPreviousTabStateValid) {
                      navigateToNextTab();
                    }
                  }
            }
            px="md"
            justifyContent="center"
            sx={t =>
              isActive
                ? {
                    borderBottomColor: t.fn.variant({ variant: "filled", color: activeColor }).background,
                    borderBottomWidth: activeBorderWidth,
                    paddingVertical: 8,
                  }
                : {
                    borderBottomColor: "transparent",
                    borderBottomWidth: activeBorderWidth,
                    paddingVertical: 8,
                  }
            }
            {...tabBarItemProps}
          >
            <Text
              variant={
                typeof size !== "number"
                  ? size === "default"
                    ? "bodyDefault"
                    : size === "sm"
                    ? "bodySmall"
                    : size === "md"
                    ? "bodyMedium"
                    : "bodyLarge"
                  : undefined
              }
              fz={typeof size === "number" ? size : undefined}
              color={isActive ? activeColor : theme.palette.textColor.primary}
              selectable={false}
            >
              {pane.props.title}
            </Text>
          </Pressable>
        );
      }),
    [size, borderWidth, activeKey]
  );

  return (
    <Stack.Horizontal spacing={0}>
      <Box f={1}>
        <ConditionalWrapper
          condition={scrollEnabled}
          wrapper={children => <ScrollView horizontal>{children}</ScrollView>}
        >
          <Stack.Horizontal spacing={0}>{getChildrenTabs()}</Stack.Horizontal>
        </ConditionalWrapper>
        <Box
          w="100%"
          sx={t => ({
            marginTop: -borderWidth,
            zIndex: -1,
            borderBottomColor: t.palette.border.default,
            borderBottomWidth: borderWidth,
          })}
        />
      </Box>
      <Box justifyContent="center">{extra}</Box>
    </Stack.Horizontal>
  );
};

export default TabsBar;
