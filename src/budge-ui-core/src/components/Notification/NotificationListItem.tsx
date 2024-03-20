import React from "react";
import { formatDistance } from "date-fns";
import { NotificationOutput, NotificationOutputStatusEnum } from "@budgeinc/budge-api";
import { PressableProps } from "react-native";
import { Pressable } from "../Pressable";
import { Card } from "../Card";
import { Text } from "../Text";
import { ConditionalWrapper } from "../ConditionalWrapper";
import { Stack } from "../Stack";
import { i18n } from "@budgeinc/budge-ui-utils";

export type TNotificationListItemProps = {
  data: NotificationOutput;
  onPress?: PressableProps["onPress"];
};

const NotificationListItem = ({ data, onPress }: TNotificationListItemProps) => {
  const isConsumed = data.status === NotificationOutputStatusEnum.Consumed;

  return (
    <ConditionalWrapper condition={!!onPress} wrapper={children => <Pressable onPress={onPress}>{children}</Pressable>}>
      <Card p="md" radius="md" bg={isConsumed ? "gray.0" : "primary.1"}>
        <Stack>
          <Stack.Horizontal alignItems="center" fwrap="wrap">
            <Text variant="bodyMedium" numberOfLines={1} fw={isConsumed ? "400" : "700"}>
              {data.title}
            </Text>
            <Text color="textSecondary">
              {i18n.t("ui-core.notification.timeAgo", { date: formatDistance(new Date(data.createdAt), new Date()) })}
            </Text>
          </Stack.Horizontal>
          <Text fw={isConsumed ? "400" : "500"}>{data.body}</Text>
        </Stack>
      </Card>
    </ConditionalWrapper>
  );
};

export default NotificationListItem;
