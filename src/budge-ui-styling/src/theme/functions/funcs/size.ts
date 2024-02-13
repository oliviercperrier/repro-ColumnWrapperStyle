import { DimensionValue } from "react-native";
import { TNumberSize, TSize, TSizes } from "../../../theme/types/Sizes";

export interface IGetSize {
  size: DimensionValue | TNumberSize;
  sizes: TSizes;
}

export const size = (props: IGetSize): DimensionValue => {
  if (typeof props.size === "number") {
    return props.size;
  }

  if (typeof props.size === "string") {
    const computedSize = props.sizes[props.size as TSize];

    return computedSize === undefined ? (props.size as Exclude<typeof props.size, TNumberSize>) : computedSize;
  }

  return props.size;
};
