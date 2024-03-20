import { TSize, useTheme } from "@budgeinc/budge-ui-styling";
import { ViewStyle } from "react-native";

export type TPaperVariant = "default" | "dark";

export interface PaperStylesParams {
  variant: TPaperVariant;
  bordered: boolean;
  shadow?: TSize;
}

export const useStyles = ({ bordered, variant, shadow }: PaperStylesParams) => {
  const theme = useTheme();
  const shadowStyle = shadow ? theme.fn.shadow(shadow) : {};

  return {
    rootStyle: {
      backgroundColor: variant === "dark" ? theme.palette.background.default : theme.white,
      borderWidth: bordered ? 1 : undefined,
      borderColor: bordered ? theme.palette.border.default : undefined,
      ...shadowStyle,
    } as ViewStyle,
  };
};
