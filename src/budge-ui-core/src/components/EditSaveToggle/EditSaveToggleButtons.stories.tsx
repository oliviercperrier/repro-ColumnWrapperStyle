import React, { useEffect, useState } from "react";
import { action } from "@storybook/addon-actions";
import EditSaveToggleButtons from "./EditSaveToggleButtons";
import { Meta, StoryFn } from "@storybook/react";

const meta = {
  title: "Misc/Edit Save Toggle Buttons",
  component: EditSaveToggleButtons,
  args: {
    align: "flex-end",
    isEditModeEnabled: false,
    loading: false,
    saveBtnDisabled: true,
  },
} satisfies Meta<typeof EditSaveToggleButtons>;

export default meta;

type Story = StoryFn<typeof EditSaveToggleButtons>;

export const Default: Story = (args) => {
  const [editModeOn, setEditMode] = useState(false);

  useEffect(() => {
    setEditMode(args.isEditModeEnabled);
  }, [args.isEditModeEnabled]);

  return (
    <EditSaveToggleButtons
      {...args}
      onSubmit={action("onSumbit")}
      onCancel={() => {}}
      isEditModeEnabled={editModeOn}
      setEditMode={setEditMode}
    />
  );
};
