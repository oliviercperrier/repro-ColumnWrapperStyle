import { TSize } from "../../theme/types/Sizes";
import { TTheme } from "../../theme/types/Theme";

export const getSpacingValue = (size: TSize, theme: TTheme) => {
  // Handle negative?
  //if (NEGATIVE_VALUES.includes(size)) {
  //  return (
  //    theme.fn.size({ size: size.replace("-", ""), sizes: theme.spacing }) * -1
  //  );
  //}

  return theme.fn.size({ size, sizes: theme.spacing });
};
