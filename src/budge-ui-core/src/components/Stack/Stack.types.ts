import { DefaultProps, TNumberSize } from "@budgeinc/budge-ui-styling";
import { View, ViewStyle } from "react-native";
import { ForwardedRef, PropsWithChildren, ReactNode } from "react";
import { TBoxProps } from "../Box";

export type TStackProps = Omit<DefaultProps<ViewStyle>, "fdirection" | "gap" | "rGap" | "cGap"> & {
  spacing?: TNumberSize;
  radius?: TNumberSize | "default";
  ref?: React.ForwardedRef<View>;
  onLayout?: TBoxProps["onLayout"];
};

export type TStackHorizontalProps = Omit<DefaultProps<ViewStyle>, "fdirection" | "gap" | "rGap" | "cGap"> & {
  spacing?: TNumberSize;
  grow?: boolean;
  children: ReactNode;
  radius?: TNumberSize | "default";
  onLayout?: TBoxProps["onLayout"];
};

export type TStackComponent = ((props: PropsWithChildren<TStackProps> & { ref?: ForwardedRef<any> }) => JSX.Element) & {
  Horizontal: React.MemoExoticComponent<
    (props: PropsWithChildren<TStackHorizontalProps> & { ref?: ForwardedRef<any> }) => JSX.Element
  >;
};
