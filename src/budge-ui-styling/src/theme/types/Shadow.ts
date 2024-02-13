import { TSize } from "./Sizes";

export type TShadow = {
  shadowColor: string;
  shadowOffset: {
    width: number;
    height: number;
  };
  shadowOpacity: number;
  shadowRadius: number;
};

export type TShadowSizes = Record<TSize, TShadow>;
