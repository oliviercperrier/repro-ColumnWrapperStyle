import { useState } from "react";
import * as DocumentPicker from "expo-document-picker";

export type TFileInputMimeTypes =
  | "text/csv"
  | "text/xml"
  | "application/vnd.ms-excel"
  | "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  | "application/json";

export type TFileInputOnFileChange = {
  files?: FileList | null;
  fileName: string;
  fileUri: string;
  mimeType?: string;
  size?: number;
};

export type TDocumentPickerProps = {
  mimeType: TFileInputMimeTypes | TFileInputMimeTypes[];
  copyToCacheDirectory?: boolean;
  /**
   * Allows multiple files to be selected from the system UI.
   * @default false
   * @platform web
   */
  multiple?: boolean;
  onFileChange: (result: TFileInputOnFileChange) => void;
};

export const useDocumentPicker = ({
  mimeType,
  copyToCacheDirectory = false,
  multiple = false,
  onFileChange,
}: TDocumentPickerProps) => {
  const [fileName, setFileName] = useState<string>("");

  const openDocumentPickerAsync = async () => {
    const result = await DocumentPicker.getDocumentAsync({
      type: mimeType,
      copyToCacheDirectory,
      multiple,
    });

    if (result.assets?.length) {
      const asset = result.assets[0];

      setFileName(result.assets[0].name);
      onFileChange({
        files: result.output,
        fileName: asset.name,
        fileUri: asset.uri,
        mimeType: asset.mimeType,
        size: asset.size,
      });
    }
  };

  return {
    fileName,
    openDocumentPickerAsync,
  };
};
