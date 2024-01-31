import { StyleProp, StyleSheet, TextStyle, ViewStyle } from "react-native";
import {
  TBaseCustomStyleProps,
  TDefaultViewProps,
  TViewVariantProps,
} from "../theme/BudgeBaseVariants";
import {
  TDefaultTextProps,
  TTextVariantProps,
} from "../theme/BudgeTextVariants";
import { filterProps } from "./filterProps";

const OtherStylePropsMap: Record<keyof TBaseCustomStyleProps, keyof ViewStyle> =
  {
    w: "width",
    maw: "maxWidth",
    miw: "minWidth",
    h: "height",
    mah: "maxHeight",
    mih: "minHeight",
  };

export const extractStyleProps = <T,>({
  style,
  ...others
}: TBaseCustomStyleProps & {
  style: StyleProp<T>;
}): StyleProp<T> => {
  const otherStyleProps = filterProps(others);

  return [
    Object.entries(otherStyleProps).reduce((prev, [propName, value]) => {
      /* @ts-ignore */
      prev[OtherStylePropsMap[propName]] = value;
      return prev;
    }, {} as any),
    StyleSheet.flatten(style),
  ];
};

export const extractViewVariantProps = <T extends Record<string, any>>(
  others: TDefaultViewProps<T>
): {
  styleProps: StyleProp<ViewStyle>;
  viewVariantProps: TViewVariantProps;
  rest: Omit<T, keyof TViewVariantProps | keyof TBaseCustomStyleProps>;
} => {
  const {
    bg,
    f,
    fgrow,
    fshrink,
    fwrap,
    fdir,
    w100,
    miw100,
    h100,
    mih100,
    justifyContent,
    alignContent,
    alignItems,
    alignSelf,
    gap,
    gapx,
    gapy,
    m,
    mt,
    mb,
    ml,
    mr,
    mx,
    my,
    p,
    pb,
    pl,
    pr,
    pt,
    px,
    py,
    opacity,
    position,
    top,
    left,
    bottom,
    right,
    display,
    overflow,
    radius,
    bw,
    blw,
    brw,
    btw,
    bbw,
    bc,
    shadow,
    shadowc,
    // OTHER STYLE PROPS
    style,
    w,
    miw,
    maw,
    h,
    mah,
    mih,
    ...rest
  } = others;

  const styleProps = extractStyleProps({
    style,
    w,
    miw,
    maw,
    h,
    mah,
    mih,
  });

  const viewVariantProps = filterProps({
    bg,
    f,
    fgrow,
    fshrink,
    fwrap,
    fdir,
    w100,
    miw100,
    h100,
    mih100,
    justifyContent,
    alignContent,
    alignItems,
    alignSelf,
    gap,
    gapx,
    gapy,
    m,
    mt,
    mb,
    ml,
    mr,
    mx,
    my,
    p,
    pb,
    pl,
    pr,
    pt,
    px,
    py,
    opacity,
    position,
    top,
    left,
    bottom,
    right,
    display,
    overflow,
    radius,
    bw,
    blw,
    brw,
    btw,
    bbw,
    bc,
    shadow,
    shadowc,
  });

  return {
    styleProps,
    viewVariantProps,
    rest: rest as unknown as T,
  };
};

export const extractTextVariantProps = <T extends Record<string, any>>(
  others: TDefaultTextProps<T>
): {
  styleProps: StyleProp<TextStyle>;
  textVariantProps: TTextVariantProps;
  rest: Omit<T, keyof TTextVariantProps>;
} => {
  const { styleProps, viewVariantProps, rest } =
    extractViewVariantProps(others);

  const { color, ta, tdl, tds, tt, fs, fw, lclamp, lh, size } = rest;

  const textVariantProps = filterProps({
    ...viewVariantProps,
    color,
    ta,
    tdl,
    tds,
    tt,
    fs,
    fw,
    lclamp,
    lh,
    size,
  });

  return {
    styleProps,
    textVariantProps,
    rest: rest as unknown as T,
  };
};
