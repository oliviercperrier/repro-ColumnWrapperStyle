import Color from "color";
import type { TThemeBase } from "../../types";
import { isThemeColor, themeColor } from "./themeColor";
import { primaryShade } from "./primaryShade";
import { isColor } from "./isColor";
import { VariantInput, VariantOutput } from "../../types/Variants";
import { darken } from "./darken";

interface ColorInfo {
  isSplittedColor: boolean;
  key?: string;
  shade?: number;
}

function getColorIndexInfo(color: string, theme: TThemeBase): ColorInfo {
  if (typeof color === "string" && color.includes(".")) {
    const [splittedColor, _splittedShade] = color.split(".");
    const splittedShade = parseInt(_splittedShade, 10);

    if (splittedColor in theme.palette.colors && splittedShade >= 0 && splittedShade < 10) {
      return {
        isSplittedColor: true,
        key: splittedColor,
        shade: splittedShade,
      };
    }
  }

  return { isSplittedColor: false };
}

const rgba = (color: string, alpha: number) => Color(color).alpha(alpha).rgb().toString();

export function variant(theme: TThemeBase) {
  const isFromThemeColor = isThemeColor(theme);
  const getThemeColor = themeColor(theme);
  const getPrimaryShade = primaryShade(theme);

  // eslint-disable-next-line @typescript-eslint/no-shadow
  return ({ variant, color, primaryFallback }: VariantInput): VariantOutput => {
    const currentColor = color;
    const colorInfo = getColorIndexInfo(currentColor, theme);
    const isCurrentAThemeColor = isFromThemeColor({ color: currentColor, checkPrimary: true });

    switch (variant) {
      case "filled": {
        const _primaryShade = getPrimaryShade();
        const _shade = colorInfo.isSplittedColor && colorInfo.shade !== undefined ? colorInfo.shade : _primaryShade;
        const _color = (colorInfo.isSplittedColor ? colorInfo.key : currentColor) || "";

        if (isCurrentAThemeColor) {
          return {
            border: "transparent",
            background: getThemeColor({
              color: _color,
              shade: _shade,
              primaryFallback,
            }),
            color: isColor(theme)("dark", currentColor) ? theme.white : theme.palette.textColor.primary,
            hover: getThemeColor({
              color: _color,
              shade: _shade === 9 ? 8 : _shade + 1,
              primaryFallback,
            }),
          };
        }
        return {
          border: "transparent",
          background: currentColor,
          color: currentColor,
          hover: darken(currentColor, 0.1),
        };
      }

      case "light": {
        if (isCurrentAThemeColor) {
          return {
            border: "transparent",
            background: rgba(
              getThemeColor({
                color: currentColor,
                shade: theme.colorScheme === "dark" ? 8 : 0,
                primaryFallback,
                useSplittedShade: false,
              }),
              theme.colorScheme === "dark" ? 0.2 : 1
            ),
            color:
              color === "dark"
                ? theme.colorScheme === "dark"
                  ? theme.palette.colors.dark[0]
                  : theme.palette.colors.dark[9]
                : getThemeColor({
                    color: currentColor,
                    shade: theme.colorScheme === "dark" ? 2 : getPrimaryShade("light"),
                  }),
            hover: rgba(
              getThemeColor({
                color: currentColor,
                shade: theme.colorScheme === "dark" ? 7 : 1,
                primaryFallback,
                useSplittedShade: false,
              }),
              theme.colorScheme === "dark" ? 0.25 : 0.65
            ),
          };
        }
        return {
          border: "transparent",
          background: rgba(currentColor, 0.1),
          color: currentColor,
          hover: rgba(currentColor, 0.12),
        };
      }

      case "subtle": {
        if (isCurrentAThemeColor) {
          return {
            border: "transparent",
            background: "transparent",
            color:
              color === "dark"
                ? theme.colorScheme === "dark"
                  ? theme.palette.colors.dark[0]
                  : theme.palette.colors.dark[9]
                : getThemeColor({
                    color: currentColor,
                    shade: theme.colorScheme === "dark" ? 2 : getPrimaryShade("light"),
                  }),
            hover: rgba(
              getThemeColor({
                color: currentColor,
                shade: theme.colorScheme === "dark" ? 8 : 0,
                primaryFallback,
                useSplittedShade: false,
              }),
              theme.colorScheme === "dark" ? 0.2 : 1
            ),
          };
        }
        return {
          border: "transparent",
          background: "transparent",
          color: currentColor,
          hover: rgba(currentColor, 0.12),
        };
      }

      case "outline": {
        if (isCurrentAThemeColor) {
          return {
            border: getThemeColor({
              color: currentColor,
              shade: theme.colorScheme === "dark" ? 5 : getPrimaryShade("light"),
            }),
            background: "transparent",
            color: getThemeColor({
              color: currentColor,
              shade: theme.colorScheme === "dark" ? 5 : getPrimaryShade("light"),
            }),
            hover:
              theme.colorScheme === "dark"
                ? rgba(
                    getThemeColor({
                      color: currentColor,
                      shade: 5,
                      primaryFallback,
                      useSplittedShade: false,
                    }),
                    0.5
                  )
                : rgba(
                    getThemeColor({
                      color: currentColor,
                      shade: 0,
                      primaryFallback,
                      useSplittedShade: false,
                    }),
                    0.35
                  ),
          };
        }
        return {
          border: currentColor,
          background: "transparent",
          color: currentColor,
          hover: rgba(currentColor, 0.05),
        };
      }

      case "white": {
        if (isCurrentAThemeColor) {
          return {
            border: "transparent",
            background: theme.white,
            color: getThemeColor({
              color: currentColor,
              shade: getPrimaryShade(),
            }),
          };
        }
        return {
          border: "transparent",
          background: theme.white,
          color: currentColor,
          hover: darken(theme.white, 0.01),
        };
      }

      case "transparent": {
        if (isCurrentAThemeColor) {
          return {
            border: "transparent",
            color:
              color === "dark"
                ? theme.colorScheme === "dark"
                  ? theme.palette.colors.dark[0]
                  : theme.palette.colors.dark[9]
                : getThemeColor({
                    color: currentColor,
                    shade: theme.colorScheme === "dark" ? 2 : getPrimaryShade("light"),
                  }),
            background: "transparent",
          };
        }
        return {
          border: "transparent",
          background: "transparent",
          color: currentColor,
          hover: "transparent",
        };
      }

      default: {
        return {
          border: theme.colorScheme === "dark" ? theme.palette.colors.dark[4] : theme.palette.border.default,
          background: theme.colorScheme === "dark" ? theme.palette.colors.dark[6] : theme.white,
          color: theme.colorScheme === "dark" ? theme.white : theme.palette.textColor.primary,
          hover: theme.colorScheme === "dark" ? theme.palette.colors.dark[5] : theme.palette.colors.gray[0],
        };
      }
    }
  };
}
