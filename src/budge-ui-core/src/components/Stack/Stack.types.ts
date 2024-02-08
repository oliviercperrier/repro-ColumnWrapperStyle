import { ForwardedRef, PropsWithChildren, ReactNode } from "react";
import { VariantProps } from "tailwind-variants";
import { stackVariant } from "./Stack.variants";
import { TDefaultViewProps } from "@budgeinc/budge-ui-styling";

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
