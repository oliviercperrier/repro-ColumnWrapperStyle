import { TColor, TTheme, useTheme } from "@budgeinc/budge-ui-styling";

export interface BadgeStylesParams {
  color?: TColor;
}

const getColor = (
  color: TColor | undefined,
  theme: TTheme
): {
  bgColor: string;
  textColor: string;
} => {
  if (!color) {
    return {
      bgColor: theme.palette.colors.gray[3],
      textColor: theme.palette.textColor.primary,
    };
  }

  const colorVariant = theme.fn.variant({ variant: "filled", color });

  return {
    bgColor: colorVariant.background,
    textColor: colorVariant.color,
  };
};

export const useStyles = ({ color }: BadgeStylesParams): { rootStyle: any; textColor: string } => {
  const theme = useTheme();
  const colorStyles = getColor(color, theme);

  return {
    rootStyle: {
      position: "absolute",
      borderRadius: 100,
      padding: 2,
      minWidth: 20,
      minHeight: 20,
      alignItems: "center",
      zIndex: 100,
      backgroundColor: colorStyles.bgColor,
    },
    textColor: colorStyles.textColor,
  };
};
