
import React from "react";
import { Box } from "../Box";
import { BPortal } from "../Portal";
import { Button } from "../Button";
import { RoundIcon, UrgentIcon } from "../Icons";
import { Stack } from "../Stack";
import { Text } from "../Text";
import BottomSheet, { useSheet } from "./Sheet";

const BottomSheetMeta: ComponentMeta<typeof BottomSheet> = {
  title: "Overlays/Bottom Sheet",
  component: BottomSheet,
  args: {},
  parameters: {
    controls: {},
  },
};

export default BottomSheetMeta;

type SelectableBoxStory = ComponentStory<typeof BottomSheet>;

export const Default: SelectableBoxStory = args => {
  const { ref, show, hide } = useSheet();

  return (
    <Box>
      <Button title="Open Bottom Sheet" alignSelf="flex-start" onPress={show} />
      <BPortal>
        <BottomSheet ref={ref}>
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
        </BottomSheet>
      </BPortal>
    </Box>
  );
};
