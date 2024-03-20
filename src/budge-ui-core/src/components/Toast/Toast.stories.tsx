import React from "react";

import Toaster from "./Toaster";
import { toast } from "./Toast.state";
import { Button } from "../Button";
import { Stack } from "../Stack";

const ButtonMeta: ComponentMeta<typeof Toaster> = {
  title: "Feedback/Toaster",
  component: Toaster,
  args: {},
  parameters: {
    controls: {
      include: [],
    },
  },
  decorators: [(Story: any) => Story()],
};

export default ButtonMeta;

type ToasterStory = ComponentStory<typeof Toaster>;

export const Default: ToasterStory = args => (
  <>
    <Stack>
      <Button
        title="Show Success Toast"
        alignSelf="flex-start"
        color="green"
        variant="filled"
        onPress={() => {
          toast.success({
            title: "Success",
            message: "User created successfully",
            duration: 5000,
          });
        }}
      />
      <Button
        title="Show Info Toast"
        alignSelf="flex-start"
        color="blue"
        variant="filled"
        onPress={() => {
          toast.info({
            title: "Info",
            message: "Great news! Your account is already linked, no further action needed.",
            duration: 10 * 1000,
          });
        }}
      />
      <Button
        title="Show Error Toast"
        alignSelf="flex-start"
        color="red"
        variant="filled"
        onPress={() => {
          toast.error({
            title: "Error",
            message: "User cannot be created!",
          });
        }}
      />
      <Button
        title="Show Warning Toast"
        alignSelf="flex-start"
        color="yellow"
        variant="filled"
        onPress={() => {
          toast.warning({
            title: "Warning",
            message: "User created successfully",
          });
        }}
      />
    </Stack>
  </>
);
