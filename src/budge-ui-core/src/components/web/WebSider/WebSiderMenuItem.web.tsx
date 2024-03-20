import React, { useContext } from "react";
import { useTheme } from "@budgeinc/budge-ui-styling";
import { ConditionalWrapper } from "../../ConditionalWrapper";
import { Pressable } from "../../Pressable";
import { Tooltip } from "../../Tooltip";
import { Text } from "../../Text";
import { WEB_SIDER_COLLAPSED_WIDTH, WEB_SIDER_ITEM_ICON_SIZE } from "./constant";
import { WebSiderContext } from "./context";
import { TWebSiderMenuItemProps } from "./types";
import { Stack } from "../../Stack";
import { Box } from "../../Box";

const WebSiderMenuItem = ({
  Icon,
  title,
  onPress,
  disabled = false,
  active = false,
  style,
  subItems,
}: TWebSiderMenuItemProps) => {
  const theme = useTheme();
  const { isCollapsed } = useContext(WebSiderContext);
  const getPressableWrapper = (children: any) => <Pressable onPress={onPress}>{children}</Pressable>;

  return (
    <Box style={style}>
      <ConditionalWrapper
        condition={!disabled}
        wrapper={children => {
          if (isCollapsed) {
            return (
              <Tooltip title={title} placement="right">
                {getPressableWrapper(children)}
              </Tooltip>
            );
          }

          return getPressableWrapper(children);
        }}
      >
        <Stack.Horizontal
          alignItems="flex-start"
          spacing="md"
          pl={(WEB_SIDER_COLLAPSED_WIDTH - WEB_SIDER_ITEM_ICON_SIZE) / 2}
        >
          <Icon
            style={{ height: 30 }}
            size={WEB_SIDER_ITEM_ICON_SIZE}
            color={active ? "primary" : disabled ? theme.palette.background.disabled : "gray.4"}
          />
          {!isCollapsed && (
            <Stack mt={1} spacing="md">
              <Text
                variant="bodyLarge"
                sx={({ palette }) => ({
                  color: active
                    ? palette.colors.purple[7]
                    : disabled
                    ? palette.colors.gray[2]
                    : palette.textColor.secondary,
                })}
              >
                {title}
              </Text>
              {subItems && subItems.length > 0 && (
                <Stack spacing={0}>
                  {subItems?.map(item => (
                    <WebSiderMenuSubItem {...item} />
                  ))}
                </Stack>
              )}
            </Stack>
          )}
        </Stack.Horizontal>
      </ConditionalWrapper>
    </Box>
  );
};

const WebSiderMenuSubItem = ({
  title,
  onPress,
  disabled = false,
  style,
}: Omit<TWebSiderMenuItemProps, "subItems" | "active" | "Icon">) => {
  const getPressableWrapper = (children: any) => <Pressable onPress={onPress}>{children}</Pressable>;

  return (
    <Box style={style}>
      <ConditionalWrapper condition={!disabled} wrapper={children => getPressableWrapper(children)}>
        <Stack.Horizontal alignItems="center" spacing="md">
          <Text
            variant="bodyMedium"
            sx={({ palette }) => ({
              color: palette.textColor.secondary,
            })}
          >
            {title}
          </Text>
        </Stack.Horizontal>
      </ConditionalWrapper>
    </Box>
  );
};

export default WebSiderMenuItem;
