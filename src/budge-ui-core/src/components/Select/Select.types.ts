import { ReactNode } from "react";
import { TFormItemValueTypes } from "../Form/Form.types";
import { TInputProps } from "../Input";
import { TDropdownProps } from "../Dropdown";

export type TSelectOptionValue = TFormItemValueTypes | undefined | null;

export type TSelectOption = {
  optionKey?: string;
  value: TSelectOptionValue;
  label: string;
  customContent?: ReactNode;
};

export type TSelectProps = Omit<TInputProps, "textInputProps" | "suffix" | "value" | "infoPopover" | "onChange"> &
  Pick<TDropdownProps, "overlayFitAnchor" | "overlayMaxWidth" | "overlayMinWidth"> & {
    value?: TSelectOptionValue;
    options: TSelectOption[];
    initialOptions?: TSelectOption[];
    filterCurrentValue?: boolean;
    enableSearch?: boolean;
    includeEmptyOption?: boolean;
    emptyOptionValue?: any;
    onSearch?(searchValue: string): Promise<TSelectOption[]>;
    onChange?: ((value: TSelectOptionValue) => void) | undefined;
    /* Web only */
    showValueTooltip?: boolean;
  };

export const EmptyOptionKey = "empty-option";

export const EmptyOption: TSelectOption = {
  optionKey: EmptyOptionKey,
  value: null,
  label: "Clear selection",
};
