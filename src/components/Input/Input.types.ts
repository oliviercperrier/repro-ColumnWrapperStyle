import { inputVariant } from "./Input.variants";
import { VariantProps } from "tailwind-variants";
import { RefObject } from "react";
import { TextInput } from "react-native";
import { TDefaultTextInputProps } from "@/budge-ui-styling/src/theme/BudgeTextVariants";

export type TInputProps = TDefaultTextInputProps<
  VariantProps<typeof inputVariant>
> & {
  label?: string;
  showLabel?: boolean;
  leftSection?: React.ReactNode;
  rightSection?: React.ReactNode;
  inputRef?: RefObject<TextInput>;
};
