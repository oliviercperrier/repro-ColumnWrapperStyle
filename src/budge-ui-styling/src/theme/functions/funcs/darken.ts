import Color from "color";

export const darken = (color: string, alpha: number) =>
  Color(color).darken(alpha).rgb().toString();
