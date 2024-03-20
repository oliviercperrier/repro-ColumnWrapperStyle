import React, { useState } from "react";
import { i18n } from "@budgeinc/budge-ui-utils";
import { WebDrawer } from "../web";
import NotificationList from "./NotificationList";
import { TNotificationDrawerProps } from "./types";
import NotificationBadgeIcon from "./NotificationBadgeIcon";

const NotificationDrawerButton = ({ notifications, onNotificationClick, ...rest }: TNotificationDrawerProps) => {
  const [notificationDrawerVisible, setDrawerVisible] = useState(false);

  return (
    <>
      <NotificationBadgeIcon notifications={notifications} onPress={() => setDrawerVisible(true)} {...rest} />
      <WebDrawer
        title={i18n.t("ui-core.notification.iconTooltip")}
        isOpen={notificationDrawerVisible}
        onClose={() => setDrawerVisible(false)}
      >
        <NotificationList
          notifications={notifications}
          onNotificationClick={notification => onNotificationClick(notification, setDrawerVisible)}
        />
      </WebDrawer>
    </>
  );
};

export default NotificationDrawerButton;
