import { NotificationOutput } from "@budgeinc/budge-api";
import { TColor, TNumberSize } from "@budgeinc/budge-ui-styling";
import { TActionIconProps } from "../ActionIcon";

export type TNotificationListProps = {
  notifications: NotificationOutput[];
  onNotificationClick: (notification: NotificationOutput) => void;
};

export type TOnDrawerVisibleChange = (visible: boolean) => void;

export type TNotificationDrawerProps = Omit<TActionIconProps, "icon"> & {
  notifications: NotificationOutput[];
  onNotificationClick: (notification: NotificationOutput, setDrawerVisible: TOnDrawerVisibleChange) => void;
  size?: TNumberSize;
  unreadColor?: TColor;
};
