/* eslint-disable react/no-array-index-key */
import React, { useEffect, useMemo, useState } from "react";
import { View } from "react-native";
import { useScreenSize } from "@budgeinc/budge-ui-hooks";
import { useTheme } from "@budgeinc/budge-ui-styling";
import { Stack } from "../../Stack";
import { ChevronLeftIcon, ChevronRightIcon } from "../../Icons";
import { LogoSquare } from "../../Logo";
import BudgeLogo from "../../Logo/Logo";
import { Pressable } from "../../Pressable";
import {
  WEB_SIDER_COLLAPSED_HORIZONTAL_PADDING,
  WEB_SIDER_COLLAPSED_WIDTH,
  WEB_SIDER_HORIZONTAL_PADDING,
  WEB_SIDER_WIDTH,
} from "./constant";
import { WebSiderContextProvider } from "./context";
import { TWebSiderProps } from "./types";
import MenuItem from "./WebSiderMenuItem";
import { ScrollView } from "../../ScrollView";
import { Box } from "../../Box";

const WebSider = ({ extra, menuItems, bottomMenuItems = [], isCollapsible }: TWebSiderProps) => {
  const theme = useTheme();
  const [isCollapsed, setCollapsed] = useState(false);
  const { isSmallerThanOrEqual } = useScreenSize();
  const memoedContextValue = useMemo(() => ({ isCollapsed }), [isCollapsed]);
  const isLgOrSmaller = isSmallerThanOrEqual("lg");

  useEffect(() => {
    if (isLgOrSmaller && isCollapsible) {
      setCollapsed(true);
    } else {
      setCollapsed(false);
    }
  }, [isLgOrSmaller]);

  return (
    <div
      style={{
        ...styles.sider,
        ...(isCollapsed ? styles.siderCollapsed : {}),
        backgroundColor: theme.white,
      }}
    >
      {isCollapsible && (
        <Pressable
          // @ts-ignore
          style={{ position: "absolute", top: "calc(50% - 12px)", right: 0 }}
          onPress={() => setCollapsed(!isCollapsed)}
        >
          {isCollapsed ? <ChevronRightIcon size={20} color="gray.4" /> : <ChevronLeftIcon size={20} color="gray.4" />}
        </Pressable>
      )}
      <WebSiderContextProvider value={memoedContextValue}>
        <div style={styles.header}>
          {isCollapsed ? (
            <LogoSquare height={37.8} width={WEB_SIDER_COLLAPSED_WIDTH} />
          ) : (
            <Box ml="md">
              <BudgeLogo width={134} />
            </Box>
          )}
        </div>
        <ScrollView>
          <Stack spacing={28} mb={40}>
            {menuItems.map((menuItem, index) => (
              <MenuItem key={index} {...menuItem} />
            ))}
          </Stack>
        </ScrollView>
        <Stack spacing={40}>
          {extra && <View style={{ display: isCollapsed ? "none" : "flex" }}>{extra}</View>}
          {bottomMenuItems.length > 0 && (
            <Stack spacing={28}>
              {bottomMenuItems.map((menuItem, index) => (
                <MenuItem key={index} {...menuItem} />
              ))}
            </Stack>
          )}
        </Stack>
      </WebSiderContextProvider>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  siderCollapsed: {
    width: WEB_SIDER_COLLAPSED_WIDTH + WEB_SIDER_COLLAPSED_HORIZONTAL_PADDING * 2,
    paddingRight: WEB_SIDER_COLLAPSED_HORIZONTAL_PADDING,
    paddingLeft: WEB_SIDER_COLLAPSED_HORIZONTAL_PADDING,
  },
  sider: {
    width: WEB_SIDER_WIDTH,
    transition: "all 0.2s",
    height: "100%",
    paddingBottom: 40,
    paddingRight: WEB_SIDER_HORIZONTAL_PADDING,
    paddingLeft: WEB_SIDER_HORIZONTAL_PADDING,
    paddingTop: 55,
    display: "flex",
    flexDirection: "column",
    position: "relative",
    boxSizing: "border-box",
  },
  header: {
    marginBottom: 50,
  },
  content: {
    flexGrow: 1,
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "column",
  },
};

export default WebSider;
