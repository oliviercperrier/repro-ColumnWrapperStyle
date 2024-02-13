import { ReactNativeStyle } from "@emotion/native";
import { StyleProp } from "react-native";
import { TTheme } from "../theme/types/Theme";
import { TStyleSystemProps, TTypographyStyleSystemProps } from "./StyleSystem";

export type Sx<StyleType extends ReactNativeStyle = ReactNativeStyle> = StyleType | ((theme: TTheme) => StyleType);

export interface BaseDefaultProps<T> extends BaseComponentProps<T> {
  sx?: Sx | Sx[];
}

export type DefaultProps<T> = TStyleSystemProps & BaseDefaultProps<T>;

export type DefaultTextProps<T> = TTypographyStyleSystemProps & BaseDefaultProps<T>;

export type BaseComponentProps<T> = {
  style?: StyleProp<T>;
};
