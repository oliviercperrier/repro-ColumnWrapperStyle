import { i18n } from "@budgeinc/budge-ui-utils";
import React from "react";
import { FlexAlignType } from "react-native";
import { Button } from "../Button";
import { Stack, TStackProps } from "../Stack";

export interface TEditSaveToggleButtonsProps extends TStackProps {
  isEditModeEnabled: boolean;
  setEditMode: (value: boolean) => void;
  onSubmit: () => void;
  onCancel: () => void;
  loading: boolean;
  saveBtnDisabled?: boolean;
  align?: FlexAlignType;
}

const EditSaveToggleButtons = ({
  loading,
  isEditModeEnabled,
  saveBtnDisabled = false,
  setEditMode,
  onSubmit,
  onCancel,
  align = "flex-end",
  ...rest
}: TEditSaveToggleButtonsProps) => (
  <Stack alignItems={align} {...rest}>
    {isEditModeEnabled ? (
      <Stack.Horizontal alignItems="flex-end">
        <Button
          title={i18n.t("cancel", { defaultValue: "Cancel" })}
          onPress={() => {
            setEditMode(false);
            onCancel();
          }}
          size="sm"
        />
        <Button
          title={i18n.t("save", { defaultValue: "Save" })}
          color="primary"
          variant="filled"
          onPress={onSubmit}
          size="sm"
          loading={loading}
          disabled={saveBtnDisabled}
        />
      </Stack.Horizontal>
    ) : (
      <Button
        alignSelf="flex-end"
        title={i18n.t("edit", { defaultValue: "Edit" })}
        onPress={() => setEditMode(true)}
        size="sm"
      />
    )}
  </Stack>
);
export default EditSaveToggleButtons;
