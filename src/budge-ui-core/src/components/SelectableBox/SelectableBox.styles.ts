import { TColor, TNumberSize, useTheme } from "@budgeinc/budge-ui-styling";
import { ViewStyle } from "react-native";

export type TSelectableBoxVariant = "default" | "white";

interface SelectableBoxStyleParams {
  isSelected: boolean;
  padding: TNumberSize;
  selectedColor: TColor;
  variant: TSelectableBoxVariant;
}

export const useSelectableBoxStyles = ({ isSelected, padding, selectedColor, variant }: SelectableBoxStyleParams) => {
  const theme = useTheme();

  let backgroundColor = variant === "white" ? theme.white : theme.palette.background.default;
  let borderColor = variant === "white" ? theme.palette.border.default : backgroundColor;

  if (isSelected) {
    borderColor = theme.fn.themeColor({ color: selectedColor });
  }

  return {
    rootStyle: {
      backgroundColor,
      borderColor,
      borderWidth: 1,
      padding: theme.fn.size({ size: padding, sizes: theme.spacing }),
    } as ViewStyle,
  };
};
