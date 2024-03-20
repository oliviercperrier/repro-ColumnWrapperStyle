import { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";
import { TMemoRefIconProps } from "../../Icons";

export type TWebSiderProps = {
  extra?: ReactNode;
  isCollapsible?: boolean;
  menuItems: TWebSiderMenuItemProps[];
  bottomMenuItems?: TWebSiderMenuItemProps[];
};

export type TWebSiderMenuItemProps = {
  Icon: TMemoRefIconProps;
  title: string;
  active?: boolean;
  disabled?: boolean;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  subItems?: Omit<TWebSiderMenuItemProps, "subItems" | "active" | "Icon">[];
};
