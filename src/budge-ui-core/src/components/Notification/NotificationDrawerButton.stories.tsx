import React, { useState } from "react";
import { action } from "@storybook/addon-actions";

import { TNotificationDrawerProps } from "./types";
import NotificationDrawerButton from "./NotificationDrawerButton";
import { Meta, StoryFn } from "@storybook/react";

const meta = {
  title: "Misc/Notification Drawer Button",
  component: NotificationDrawerButton,
  args: {},
} satisfies Meta<typeof NotificationDrawerButton>;

export default meta;

type Story = StoryFn<typeof NotificationDrawerButton>;

const notifications: any[] = [
  {
    id: "1",
    title: "Im a notification asd asd asd asd asds",
    body: "Hello from the notification content.",
    createdAt: "05-05-2022",
    updatedAt: "05-05-2022",
    target: "EMPLOYER_APP",
    status: "SENT",
    userId: "123",
    type: "CAMPAIGNS_CREATION_REMINDER",
  },
  {
    id: "2",
    title: "Im a notification",
    body: "Hello from the notification content.",
    createdAt: "05-05-2022",
    updatedAt: "05-05-2022",
    target: "EMPLOYER_APP",
    status: "SENT",
    userId: "123",
    type: "CAMPAIGNS_CREATION_REMINDER",
  },
  {
    id: "3",
    title: "Im a notification",
    body: "Hello from the notification content.",
    createdAt: "05-05-2022",
    updatedAt: "05-05-2022",
    target: "EMPLOYER_APP",
    status: "SENT",
    userId: "123",
    type: "CAMPAIGNS_CREATION_REMINDER",
  },
  {
    id: "4",
    title: "Im a notification",
    body: "Hello from the notification content.",
    createdAt: "05-05-2022",
    updatedAt: "05-05-2022",
    target: "EMPLOYER_APP",
    status: "SENT",
    userId: "123",
    type: "CAMPAIGNS_CREATION_REMINDER",
  },
  {
    id: "5",
    title: "Im a notification",
    body: "Hello from the notification content.",
    createdAt: "05-05-2022",
    updatedAt: "05-05-2022",
    target: "EMPLOYER_APP",
    status: "SENT",
    userId: "123",
    type: "CAMPAIGNS_CREATION_REMINDER",
  },
  {
    id: "6",
    title: "Im a notification",
    body: "Hello from the notification content.",
    createdAt: "05-05-2022",
    updatedAt: "05-05-2022",
    target: "EMPLOYER_APP",
    status: "SENT",
    userId: "123",
    type: "CAMPAIGNS_CREATION_REMINDER",
  },
  {
    id: "7",
    title: "Im a notification",
    body: "Hello from the notification content.",
    createdAt: "05-05-2022",
    updatedAt: "05-05-2022",
    target: "EMPLOYER_APP",
    status: "SENT",
    userId: "123",
    type: "CAMPAIGNS_CREATION_REMINDER",
  },
  {
    id: "8",
    title: "Im a notification",
    body: "Hello from the notification content.",
    createdAt: "05-05-2022",
    updatedAt: "05-05-2022",
    target: "EMPLOYER_APP",
    status: "SENT",
    userId: "123",
    type: "CAMPAIGNS_CREATION_REMINDER",
  },
  {
    id: "9",
    title: "Im a notification",
    body: "Hello from the notification content.",
    createdAt: "05-05-2022",
    updatedAt: "05-05-2022",
    target: "EMPLOYER_APP",
    status: "SENT",
    userId: "123",
    type: "CAMPAIGNS_CREATION_REMINDER",
  },
  {
    id: "10",
    title: "Im a notification",
    body: "Hello from the notification content.",
    createdAt: "05-05-2022",
    updatedAt: "05-05-2022",
    target: "EMPLOYER_APP",
    status: "SENT",
    userId: "123",
    type: "CAMPAIGNS_CREATION_REMINDER",
  },
  {
    id: "11",
    title: "Im a notification",
    body: "Hello from the notification content.",
    createdAt: "05-05-2022",
    updatedAt: "05-05-2022",
    target: "EMPLOYER_APP",
    status: "SENT",
    userId: "123",
    type: "CAMPAIGNS_CREATION_REMINDER",
  },
  {
    id: "12",
    title: "Im a notification",
    body: "Hello from the notification content.",
    createdAt: "05-05-2022",
    updatedAt: "05-05-2022",
    target: "EMPLOYER_APP",
    status: "SENT",
    userId: "123",
    type: "CAMPAIGNS_CREATION_REMINDER",
  },
  {
    id: "13",
    title: "Im a notification",
    body: "Hello from the notification content.",
    createdAt: "05-05-2022",
    updatedAt: "05-05-2022",
    target: "EMPLOYER_APP",
    status: "SENT",
    userId: "123",
    type: "CAMPAIGNS_CREATION_REMINDER",
  },
  {
    id: "14",
    title: "Im a notification",
    body: "Hello from the notification content.",
    createdAt: "05-05-2022",
    updatedAt: "05-05-2022",
    target: "EMPLOYER_APP",
    status: "SENT",
    userId: "123",
    type: "CAMPAIGNS_CREATION_REMINDER",
  },
  {
    id: "15",
    title: "Im a notification",
    body: "Hello from the notification content.",
    createdAt: "05-05-2022",
    updatedAt: "05-05-2022",
    target: "EMPLOYER_APP",
    status: "SENT",
    userId: "123",
    type: "CAMPAIGNS_CREATION_REMINDER",
  },
  {
    id: "16",
    title: "Im a notification",
    body: "Hello from the notification content.",
    createdAt: "05-05-2022",
    updatedAt: "05-05-2022",
    target: "EMPLOYER_APP",
    status: "SENT",
    userId: "123",
    type: "CAMPAIGNS_CREATION_REMINDER",
  },
  {
    id: "17",
    title: "Im a notification",
    body: "Hello from the notification content.",
    createdAt: "05-05-2022",
    updatedAt: "05-05-2022",
    target: "EMPLOYER_APP",
    status: "CONSUMED",
    userId: "123",
    type: "CAMPAIGNS_CREATION_REMINDER",
  },
];

export const NotificationDrawer: Story = () => {
  const [notificationList, setNotificationList] = useState(notifications);

  return (
    <NotificationDrawerButton
      notifications={notificationList}
      onNotificationClick={(notification, setDrawerVisible) => {
        action("onNotificationClick")(notification);

        setNotificationList(prev =>
          prev.map(notif => {
            if (notif.id === notification.id) {
              return {
                ...notif,
                status: "CONSUMED",
              };
            }

            return notif;
          })
        );

        setDrawerVisible(false);
      }}
    />
  );
};
