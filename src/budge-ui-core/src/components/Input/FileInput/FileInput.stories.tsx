import React from "react";

import { action } from "@storybook/addon-actions";
import FileInput from "./FileInput";
import { RoundIcon, UploadIcon } from "../../Icons";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Inputs/FileInput",
  component: FileInput,
} satisfies Meta<typeof FileInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: "Select a CSV file",
    disabled: false,
    variant: "default",
    style: {
      maxWidth: 400,
    },
    mimeType: "text/csv",
    rightSection: <RoundIcon icon={UploadIcon} size="sm" color="primary" />,
    onFileChange: result => {
      action("onFileChange")({
        fileName: result.fileName,
        fileUri: result.fileUri,
        mimeType: result.mimeType,
        size: result.size,
        fileCount: result.files?.length,
        files: "[...]",
      });
    },
  },
};
