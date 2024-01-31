import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import {
  TBaseCustomStyleProps,
  TDefaultViewProps,
  TViewVariantProps,
} from "../theme/BudgeBaseVariants";

const OtherStylePropsMap: Record<keyof TBaseCustomStyleProps, keyof ViewStyle> =
  {
    w: "width",
    maw: "maxWidth",
    miw: "minWidth",
    h: "height",
    mah: "maxHeight",
    mih: "minHeight",
  };

export const extractStyleProps = <T,>(
  props: TDefaultViewProps<T>
): TBaseCustomStyleProps => {
  const { w, miw, maw, h, mah, mih } = props;

  return {
    w,
    miw,
    maw,
    h,
    mah,
    mih,
  };
};

const useStyleProps = <T,>({
  style,
  styleProps,
}: {
  style: StyleProp<T>;
  styleProps: TBaseCustomStyleProps;
}): StyleProp<ViewStyle> => [
  Object.entries(styleProps).reduce((prev, [propName, value]) => {
    /* @ts-ignore */
    prev[OtherStylePropsMap[propName]] = value;
    return prev;
  }, {} as any),
  StyleSheet.flatten(style),
];

export default useStyleProps;
