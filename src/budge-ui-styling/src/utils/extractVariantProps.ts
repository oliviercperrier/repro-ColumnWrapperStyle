import { TViewVariantProps } from "../theme/BudgeBaseVariants";
import { filterProps } from "./filterProps";

export const extractViewVariantProps = <T extends Record<string, any>>(
  others: TViewVariantProps & T
): {
  viewVariantProps: TViewVariantProps;
  rest: T;
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
    ...rest
  } = others;

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
    viewVariantProps,
    rest: rest as unknown as T,
  };
};
