import React from "react";
import { i18n } from "@budgeinc/budge-ui-utils";
import { Empty } from "../Empty";
import NotificationListItem from "./NotificationListItem";
import { TNotificationListProps } from "./types";
import { NotificationIcon } from "../Icons";
import { List, TListProps } from "../List";
import { Box } from "../Box";

const NotificationList = ({
  notifications,
  onNotificationClick,
  ...props
}: TNotificationListProps & Omit<TListProps, "data" | "renderItem">) => (
  <List
    data={notifications}
    ItemSeparatorComponent={props.ItemSeparatorComponent || (() => <Box h={8} />)}
    ListEmptyComponent={
      props.ListEmptyComponent ||
      (() => (
        <Empty
          title=""
          icon={<NotificationIcon color="gray.4" size={24} />}
          description={i18n.t("ui-core.notification.emptyDescription")}
        />
      ))
    }
    renderItem={({ item }) => <NotificationListItem onPress={() => onNotificationClick(item)} data={item} />}
    {...props}
  />
);

export default NotificationList;
