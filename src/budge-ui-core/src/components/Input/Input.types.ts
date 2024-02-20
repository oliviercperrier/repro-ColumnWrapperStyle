import { inputVariant } from "./Input.variants";
import { VariantProps } from "tailwind-variants";
import { RefObject } from "react";
import { TextInput } from "react-native";
import { TDefaultTextInputProps, TViewVariantProps } from "@budgeinc/budge-ui-styling";

export type TInputProps = TDefaultTextInputProps<
  Omit<VariantProps<typeof inputVariant> & TViewVariantProps, "labeled">
> & {
  label?: string;
  leftSection?: React.ReactNode;
  rightSection?: React.ReactNode;
  inputRef?: RefObject<TextInput>;
};
