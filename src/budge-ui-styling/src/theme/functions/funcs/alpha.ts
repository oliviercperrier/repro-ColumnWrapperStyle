import Color from "color";

export const alpha = (color: string, ratio: number) => Color(color).alpha(ratio).rgb().toString();
