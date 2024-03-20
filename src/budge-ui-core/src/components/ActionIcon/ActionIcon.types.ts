import { TSize, TColor, TNumberSize } from "@budgeinc/budge-ui-styling";
import { StyleProp, ViewStyle } from "react-native";
import { TPressableProps } from "../Pressable";
import { TTextColor } from "../Text/Text.styles";
import { TMemoRefIconProps } from "../Icons";
import { TButtonVariant } from "../Button";

export type TActionIconProps = Omit<TPressableProps, "style"> & {
  icon: TMemoRefIconProps;
  size?: TSize;
  color?: TColor;
  hoverColor?: TColor;
  iconColor?: TTextColor;
  iconSize?: TNumberSize;
  variant?: TButtonVariant;
  disabled?: boolean;
  loading?: boolean;
  style?: StyleProp<ViewStyle>;
  withDisabledOpacity?: boolean;
  withHoverEffect?: boolean;
};
