import { ForwardedRef, PropsWithChildren, ReactNode } from "react";
import { TBoxProps } from "../Box";
import { VariantProps } from "tailwind-variants";
import { stackVariant } from "./Stack.Variant";
import { TDefaultViewProps } from "@/budge-ui-styling/src/theme/BudgeBaseVariants";

export type TStackProps = TDefaultViewProps<
  Omit<VariantProps<typeof stackVariant>, "fdir" | "gap" | "rGap" | "cGap">
>;

export type TStackComponent = ((
  props: PropsWithChildren<TStackProps> & { ref?: ForwardedRef<any> }
) => JSX.Element) & {
  Horizontal: React.MemoExoticComponent<
    (
      props: PropsWithChildren<TStackProps> & {
        ref?: ForwardedRef<any>;
      }
    ) => JSX.Element
  >;
};
