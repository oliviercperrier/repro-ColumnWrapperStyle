import { ForwardedRef, PropsWithChildren, ReactNode } from "react";
import { VariantProps } from "tailwind-variants";
import { stackVariant } from "./Stack.variants";
import { TDefaultViewProps, TViewVariantProps } from "@budgeinc/budge-ui-styling";

export type TStackProps = TDefaultViewProps<
  Omit<VariantProps<typeof stackVariant> & TViewVariantProps, "fdir" | "gap" | "rGap" | "cGap">
>;

export type TStackComponent = ((props: PropsWithChildren<TStackProps> & { ref?: ForwardedRef<any> }) => JSX.Element) & {
  Horizontal: (
    props: PropsWithChildren<TStackProps> & {
      ref?: ForwardedRef<any>;
    }
  ) => JSX.Element;
};
