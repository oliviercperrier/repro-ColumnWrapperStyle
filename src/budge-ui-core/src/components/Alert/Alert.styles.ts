import { TColor, VariantInput, useTheme } from "@budgeinc/budge-ui-styling";
import { ViewStyle } from "react-native";

export type TAlertVariants = Exclude<VariantInput["variant"], "subtle">;

export interface AlertStylesParams {
  color: TColor;
  variant: TAlertVariants;
}

export const useStyles = ({ color, variant }: AlertStylesParams) => {
  const theme = useTheme();
  const variantColors = theme.fn.variant({ variant, color });

  return {
    baseStyle: {
      borderWidth: 1,
      borderColor: variantColors.border,
      backgroundColor: variantColors.background,
      paddingHorizontal: theme.spacing.lg,
      paddingVertical: theme.spacing.md,
      overflow: "hidden",
    } as ViewStyle,
    titleColor: variant === "filled" ? "white" : variantColors.color,
    textColor:
      variant === "filled"
        ? "white"
        : variant === "outline" || variant === "light"
        ? theme.palette.textColor.primary
        : variantColors.color,
  };
};
