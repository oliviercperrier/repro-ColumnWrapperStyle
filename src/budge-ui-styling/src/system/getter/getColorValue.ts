import { TColor } from "../../theme/types/Colors";
import { TTheme } from "../../theme/types/Theme";

export const getColorValue = (color: TColor, theme: TTheme): string =>
  theme.fn.variant({ variant: "filled", color, primaryFallback: false })
    .background;
