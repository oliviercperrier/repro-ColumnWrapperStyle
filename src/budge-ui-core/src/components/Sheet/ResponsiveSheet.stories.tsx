
import React from "react";
import { useDisclosure } from "@budgeinc/budge-ui-hooks";
import { Box } from "../Box";
import { Button } from "../Button";
import { RoundIcon, UrgentIcon } from "../Icons";
import { Input } from "../Input";
import { LogoSquare } from "../Logo";
import { Stack } from "../Stack";
import { Text } from "../Text";
import ResponsiveSheet from "./ResponsiveSheet";
import { useSheet } from "./Sheet";
import { BPortal } from "../Portal";

const ResponsiveSheetMeta: ComponentMeta<typeof ResponsiveSheet> = {
  title: "Overlays/Responsive Sheet",
  component: ResponsiveSheet,
  args: {},
  parameters: {
    controls: {},
  },
};

export default ResponsiveSheetMeta;

type SelectableBoxStory = ComponentStory<typeof ResponsiveSheet>;

export const Default: SelectableBoxStory = () => {
  const { ref, show, hide } = useSheet();

  return (
    <Box>
      <Button title="Open Responsive Sheet" alignSelf="flex-start" onPress={show} />
      <BPortal>
        <ResponsiveSheet ref={ref} size={200}>
          <Stack spacing="xl" p="xl">
            <Stack spacing="lg">
              <RoundIcon icon={UrgentIcon} color="red" />
              <Text variant="titleH3">Are you sure you want to cancel?</Text>
            </Stack>
            <Stack>
              <Button fullWidth title="Yes, cancel" onPress={hide} />
              <Button fullWidth title="No, continue" color="dark" variant="filled" onPress={hide} />
            </Stack>
          </Stack>
        </ResponsiveSheet>
      </BPortal>
    </Box>
  );
};

export const WithHeader: SelectableBoxStory = args => {
  const [opened, handlers] = useDisclosure();

  return (
    <Box>
      <Button title="Open Responsive Sheet" alignSelf="flex-start" onPress={handlers.open} />
      <BPortal>
        <ResponsiveSheet
          opened={opened}
          onClose={handlers.close}
          title={
            <Stack.Horizontal alignItems="center" spacing="md" f={1}>
              <LogoSquare width={32} />
              <Text variant="bodyLarge" fw="500" numberOfLines={1} f={1}>
                Welcome to Budge
              </Text>
            </Stack.Horizontal>
          }
          withCloseButton
        >
          <Stack spacing="xl" p="xl" pt={0}>
            <Stack>
              <Input label="Email" value="olivier.castro-perrier@budge.app" />
              <Input label="Password" secureTextEntry value="Iphone12" />
            </Stack>
            <Button title="Login" color="primary" fullWidth variant="filled" />
          </Stack>
        </ResponsiveSheet>
      </BPortal>
    </Box>
  );
};
