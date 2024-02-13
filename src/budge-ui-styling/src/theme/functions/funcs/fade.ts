import Color from "color";

export const fade = (color: string, ratio: number) => Color(color).fade(ratio).rgb().toString();
