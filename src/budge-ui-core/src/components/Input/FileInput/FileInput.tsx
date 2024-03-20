import React from "react";
import { TDocumentPickerProps, TFileInputMimeTypes, useDocumentPicker } from "@budgeinc/budge-ui-hooks";
import { Pressable, TPressableProps } from "../../Pressable";
import Input, { TInputProps } from "../Input";

export const FILE_FORMAT_DISPLAY: Record<TFileInputMimeTypes, string> = {
  "application/json": "JSON",
  "text/csv": "CSV",
  "text/xml": "XML",
  "application/vnd.ms-excel": "EXCEL",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": "EXCEL",
};

export type TFileInputProps = Pick<
  TInputProps,
  "label" | "infoPopover" | "rightSection" | "leftSection" | "disabled" | "variant" | "style"
> &
  TDocumentPickerProps & {
    wrapperStyle?: TPressableProps["style"];
  };

const FileInput = ({
  style,
  mimeType,
  copyToCacheDirectory,
  multiple,
  onFileChange,
  ...inputProps
}: TFileInputProps) => {
  const { fileName, openDocumentPickerAsync } = useDocumentPicker({
    mimeType,
    multiple,
    copyToCacheDirectory,
    onFileChange,
  });

  return (
    <Pressable style={style} onPress={openDocumentPickerAsync} disabled={inputProps.disabled}>
      <Input {...inputProps} value={fileName} editable={false} />
    </Pressable>
  );
};

export default FileInput;
