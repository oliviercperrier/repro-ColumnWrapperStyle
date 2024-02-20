import { ForwardedRef } from "react";
import { VariantProps } from "tailwind-variants";
import { switchVariant } from "./Switch.variants";
import { TViewVariantProps } from "@budgeinc/budge-ui-styling";

export type TSwitchProps = VariantProps<typeof switchVariant> &
  Pick<TViewVariantProps, "m" | "mb" | "ml" | "mr" | "mt" | "mx" | "my"> & {
    onChange?: (checked: boolean) => void;
  };

export type TSwitchComponent = (props: TSwitchProps & { ref?: ForwardedRef<any> }) => JSX.Element;
//& {
// // Confirm: React.MemoExoticComponent<(props: TSwitchConfirmProps & { ref?: ForwardedRef<any> }) => JSX.Element>;
//};
