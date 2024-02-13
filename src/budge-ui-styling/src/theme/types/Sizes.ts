import { DimensionValue } from "react-native";

export type TSize = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
export type TNumberSize = TSize | number;
export type TSizes = Record<TSize, number>;

export type TDimensionSize = DimensionValue | TNumberSize;

export type TContainerSizePaddingProps = {
  px: number;
  py: number;
};

export type TScreenSize = "xxs" | TSize;

export type TScreenBreakpoint = Record<
  TScreenSize,
  {
    minWidth?: number;
    maxWidth?: number;
  }
>;
