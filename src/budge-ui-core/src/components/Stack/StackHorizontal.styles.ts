import { ViewStyle } from "react-native";

export interface StackHorizontalStylesParams {
  wrap?: boolean;
  grow?: boolean;
}

export const useStyles = ({ wrap, grow }: StackHorizontalStylesParams) => {
  return {
    rootStyle: {
      flexWrap: wrap ? "wrap" : "nowrap",
    } as ViewStyle,
    childStyleBase: {
      flexShrink: 0,
      flexGrow: grow ? 1 : undefined,
    } as ViewStyle,
  };
};
