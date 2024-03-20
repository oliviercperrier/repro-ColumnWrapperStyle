import React from "react";

import Toaster from "./Toaster";
import { toast } from "./Toast.state";
import { Button } from "../Button";
import { Stack } from "../Stack";
import { Meta, StoryFn } from "@storybook/react";

const meta = {
  title: "Feedback/Toaster",
  component: Toaster,
} satisfies Meta<typeof Toaster>;

export default meta;

type Story = StoryFn<typeof Toaster>;

export const Default: Story = () => (
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
