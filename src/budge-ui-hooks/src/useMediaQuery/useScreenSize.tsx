import { useMediaQuery } from "react-responsive";
import { TScreenSize, useTheme } from "@budgeinc/budge-ui-styling";

const sizesOrder: TScreenSize[] = ["xxs", "xs", "sm", "md", "lg", "xl", "xxl"];

export type TUseScreenSizePayload = {
  screenSize: TScreenSize;
  isPortrait: boolean;
  isLandscape: boolean;
  isEqualTo: (key: TScreenSize) => boolean;
  isSmallerThan: (key: TScreenSize) => boolean;
  isSmallerThanOrEqual: (key: TScreenSize) => boolean;
  isGreaterThan: (key: TScreenSize) => boolean;
  isGreaterThanOrEqual: (key: TScreenSize) => boolean;
};

export const useScreenSize = (): TUseScreenSizePayload => {
  const { breakpoints } = useTheme();

  const isXs = useMediaQuery(breakpoints.xs);
  const isSm = useMediaQuery(breakpoints.sm);
  const isMd = useMediaQuery(breakpoints.md);
  const isLg = useMediaQuery(breakpoints.lg);
  const isXl = useMediaQuery(breakpoints.xl);
  const isXxl = useMediaQuery(breakpoints.xxl);
  const isPortrait = useMediaQuery({ orientation: "portrait" });

  const getScreenSize = (): TScreenSize => {
    if (isXxl) {
      return "xxl";
    }
    if (isXl) {
      return "xl";
    }
    if (isLg) {
      return "lg";
    }
    if (isMd) {
      return "md";
    }
    if (isSm) {
      return "sm";
    }
    if (isXs) {
      return "xs";
    }
    return "xxs";
  };

  const isEqualTo = (size: TScreenSize) => getScreenSize() === size;

  const isSmallerThan = (size: TScreenSize) => sizesOrder.indexOf(getScreenSize()) < sizesOrder.indexOf(size);

  const isSmallerThanOrEqual = (size: TScreenSize) => isEqualTo(size) || isSmallerThan(size);

  const isGreaterThan = (size: TScreenSize) => sizesOrder.indexOf(getScreenSize()) > sizesOrder.indexOf(size);

  const isGreaterThanOrEqual = (size: TScreenSize) => isEqualTo(size) || isGreaterThan(size);

  return {
    screenSize: getScreenSize(),
    isEqualTo,
    isSmallerThan,
    isSmallerThanOrEqual,
    isGreaterThan,
    isGreaterThanOrEqual,
    isPortrait,
    isLandscape: !isPortrait,
  };
};
