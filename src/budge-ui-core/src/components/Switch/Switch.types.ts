import { ForwardedRef } from "react";
import { VariantProps } from "tailwind-variants";
import { switchVariant } from "./Switch.variants";

export type TSwitchProps = VariantProps<typeof switchVariant> & {
  onChange?: (checked: boolean) => void;
};

export type TSwitchComponent = (props: TSwitchProps & { ref?: ForwardedRef<any> }) => JSX.Element;
//& {
// // Confirm: React.MemoExoticComponent<(props: TSwitchConfirmProps & { ref?: ForwardedRef<any> }) => JSX.Element>;
//};
