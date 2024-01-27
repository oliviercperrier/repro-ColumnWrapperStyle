import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import {
  TBaseCustomStyleProps,
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

export const extractOtherStyleProps = (
  props: TViewVariantProps
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

const useOtherStyleProps = <T,>({
  style,
  styleProps,
}: {
  style: StyleProp<T>;
  styleProps: TBaseCustomStyleProps;
}): StyleProp<ViewStyle> => [
  Object.entries(styleProps).reduce((prev, [propName, value]) => {
    prev[OtherStylePropsMap[propName]] = value;
    return prev;
  }, {}),
  StyleSheet.flatten(style),
];

export default useOtherStyleProps;
