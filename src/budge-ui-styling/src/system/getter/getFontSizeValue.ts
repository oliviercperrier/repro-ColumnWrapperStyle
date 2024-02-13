import { TTheme } from "../../theme/types/Theme";

export const getFontSizeValue = (size: any, theme: TTheme) =>
  theme.fn.size({ size, sizes: theme.fontSizes });
