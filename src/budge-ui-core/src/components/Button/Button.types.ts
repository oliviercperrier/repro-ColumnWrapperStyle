import { TSize, TColor } from "@budgeinc/budge-ui-styling";
import { NavigationAction } from "@react-navigation/native";
import { To } from "@react-navigation/native/lib/typescript/src/useLinkTo";
import { StyleProp, ViewStyle } from "react-native";
import { ReactNode } from "react";
import { TMemoRefIconProps } from "../Icons";
import { TPressableProps } from "../Pressable";
import { TButtonVariant } from "./Button.styles";
import { TTextProps } from "../Text";

export type TButtonProps = Omit<TPressableProps, "style"> & {
  title?: string;
  titleTextProps?: TTextProps;
  size?: TSize;
  color?: TColor;
  hoverColor?: TColor;
  variant?: TButtonVariant;
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  leftIcon?: TMemoRefIconProps;
  rightIcon?: TMemoRefIconProps;
  style?: StyleProp<ViewStyle>;
  withDisabledOpacity?: boolean;
  withHoverEffect?: boolean;
  extra?: ReactNode;
};

export type TButtonLinkProps = Omit<TButtonProps, "onPress" | "accessibilityRole"> & {
  to: To<ReactNavigation.RootParamList>;
  action?: NavigationAction;
};
