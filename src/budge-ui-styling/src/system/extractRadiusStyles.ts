import { ReactNativeStyle } from "@emotion/native";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { Sx } from "../types";
import { useExtractSx } from "../hooks";

export const extractRadiusStyles = ({
  style,
  sx,
}: {
  style: StyleProp<ViewStyle>;
  sx: Sx<ReactNativeStyle> | Sx<ReactNativeStyle>[] | undefined;
}) => {
  const {
    borderCurve,
    borderEndEndRadius,
    borderEndStartRadius,
    borderRadius,
    borderStartEndRadius,
    borderStartStartRadius,
    borderTopEndRadius,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderTopStartRadius,
    borderBottomEndRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    borderBottomStartRadius,
  }: ViewStyle = {
    ...StyleSheet.flatten(style),
    ...StyleSheet.flatten(useExtractSx(sx)),
  };

  return {
    borderCurve,
    borderEndEndRadius,
    borderEndStartRadius,
    borderRadius,
    borderStartEndRadius,
    borderStartStartRadius,
    borderTopEndRadius,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderTopStartRadius,
    borderBottomEndRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    borderBottomStartRadius,
  };
};
