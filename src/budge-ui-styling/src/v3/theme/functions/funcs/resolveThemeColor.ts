import Color from "color";
import { TBaseBudgeTheme, TColorOpacity, TColorShade, TColor, TColorToken } from "../../types";
import splitThemeColorToken from "./splitThemeColorToken";

export type TResolveThemeColor =
  | {
      color: TColor;
      shade?: TColorShade;
      opacity?: TColorOpacity;
      colorToken?: never;
    }
  | {
      colorToken: TColorToken;
      color?: never;
      shade?: never;
      opacity?: never;
    };

export const resolveThemeColor =
  (themeBase: TBaseBudgeTheme) =>
  ({ colorToken, color, shade, opacity }: TResolveThemeColor): string => {
    let _shade: TColorShade | undefined;
    let _opacity: TColorOpacity | undefined;
    let _color: TColor;

    if (colorToken) {
      const splittedThemeColor = splitThemeColorToken(colorToken);
      _shade = splittedThemeColor.shade;
      _opacity = splittedThemeColor.opacity;
      _color = splittedThemeColor.color;
    } else {
      _shade = shade;
      _opacity = opacity;
      _color = color;
    }

    let resolvedColor = themeBase.palette.colors[_color];

    if (_shade && typeof resolvedColor === "object") {
      resolvedColor = resolvedColor[_shade];
    }

    resolvedColor = typeof resolvedColor == "string" ? resolvedColor : resolvedColor.DEFAULT;

    return Color(resolvedColor)
      .fade(_opacity ? _opacity / 100 : 0)
      .rgb()
      .toString();
  };
