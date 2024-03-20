import { PressableProps, View } from "react-native";
import React, { forwardRef } from "react";
import { NotificationOutput, NotificationOutputStatusEnum } from "@budgeinc/budge-api";
import { TColor } from "@budgeinc/budge-ui-styling";
import { i18n } from "@budgeinc/budge-ui-utils";
import { Badge } from "../Badge";
import { Tooltip } from "../Tooltip";
import { NotificationIcon } from "../Icons";
import { Box } from "../Box";
import { ActionIcon, TActionIconProps } from "../ActionIcon";

export type TNotificationBadgeIconProps = Omit<TActionIconProps, "icon"> & {
  notifications: NotificationOutput[];
  onPress: PressableProps["onPress"];
  unreadColor?: TColor;
  color?: TColor;
};

const NotificationBadgeIcon = forwardRef<View, TNotificationBadgeIconProps>(
  ({ notifications, onPress, unreadColor, color, ...rest }, ref) => {
    const unreadCount = notifications.filter(({ status }) => status === NotificationOutputStatusEnum.Sent).length;

    return (
      <Box ref={ref}>
        <Badge count={unreadCount} color="red">
          <Tooltip title={i18n.t("ui-core.notification.iconTooltip")}>
            <ActionIcon
              onPress={onPress}
              icon={NotificationIcon}
              color={unreadCount ? unreadColor || "primary" : color || undefined}
              radius="xxl"
              {...rest}
            />
          </Tooltip>
        </Badge>
      </Box>
    );
  }
);

export default NotificationBadgeIcon;
