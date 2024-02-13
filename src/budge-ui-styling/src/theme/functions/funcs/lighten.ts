import Color from "color";

export const lighten = (color: string, alpha: number) =>
  Color(color).lighten(alpha).rgb().toString();
