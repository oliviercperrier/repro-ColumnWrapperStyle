import React, { useEffect, useState } from "react";
import { Dropdown } from ".";
import { Button } from "../Button";
import { Text } from "../Text";
import { Box } from "../Box";
import { List } from "../List";
import { Stack } from "../Stack";
import { UserIcon } from "../Icons";
import { Meta, StoryFn } from "@storybook/react";

const meta = {
  title: "Misc/Dropdown",
  component: Dropdown,
  args: {
    visible: false,
    placement: "bottom left",
  },
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryFn<typeof meta>;

export const Default: Story = ({ args }) => {
  const [isVisible, setVisible] = useState(false);
  const [color, setColor] = useState<any>("default");

  useEffect(() => {
    setVisible(args.visible);
  }, [args.visible]);

  return (
    <Dropdown
      {...args}
      visible={isVisible}
      onVisibleChange={setVisible}
      anchor={<Button color={color} title="Open Dropdown" onPress={() => setVisible(!isVisible)} />}
      overlay={
        <List
          data={[
            {
              name: "Olivier Perrier",
              email: "olivier.castro-perrier@budge.app",
            },
            {
              name: "Yan Avery",
              email: "yan.avery@budge.app",
            },
            {
              name: "Hussein Zaidi",
              email: "hussein.zaidi@budge.app",
            },
          ]}
          renderItem={({ item }) => (
            <Box radius="md" p="md" bg="gray.0">
              <Stack.Horizontal>
                <UserIcon color="gray.4" />
                <Stack spacing={0}>
                  <Text>{item.name}</Text>
                  <Text color="textSecondary">{item.email}</Text>
                </Stack>
              </Stack.Horizontal>
            </Box>
          )}
          p="md"
          ItemSeparatorComponent={() => <Box h={8} />}
        />
      }
    />
  );
};
