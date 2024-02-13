import { TNumberSize, TThemeBase } from "../../types";

export function radius(theme: TThemeBase) {
  return (size?: TNumberSize | "default"): number => {
    if (typeof size === "number") {
      return size;
    }

    const defaultRadius =
      typeof theme.defaultRadius === "number"
        ? theme.defaultRadius
        : theme.radius[theme.defaultRadius];

    if (size === "default" || size === undefined) {
      return defaultRadius
    }

    return theme.radius[size] || defaultRadius;
  };
}
