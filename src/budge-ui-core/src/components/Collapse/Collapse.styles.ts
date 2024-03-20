import { TTheme, useTheme } from "@budgeinc/budge-ui-styling";
import { ViewStyle } from "react-native";

export type TCollapseVariant = "default" | "dark";

interface CollapseStyleParams {
  variant: TCollapseVariant;
  isOpen: boolean;
  showHeaderBorder: boolean;
  fixHeaderHeight: boolean;
  bordered: boolean;
}

interface IGetColorStyles {
  variant: TCollapseVariant;
  theme: TTheme;
}

const getColorStyles = ({
  variant,
  theme,
}: IGetColorStyles): {
  borderColor: string;
  backgroundColor: string;
} => {
  if (variant === "dark") {
    return {
      borderColor: theme.palette.background.default,
      backgroundColor: theme.palette.background.default,
    };
  }

  return {
    borderColor: theme.white,
    backgroundColor: theme.white,
  };
};

export const useStyles = ({ variant, isOpen, showHeaderBorder, bordered, fixHeaderHeight }: CollapseStyleParams) => {
  const theme = useTheme();

  const { backgroundColor, borderColor } = getColorStyles({ variant, theme });
  const headerBorder =
    isOpen && showHeaderBorder
      ? ({
          borderBottomColor: theme.palette.border.default,
          borderBottomWidth: 1,
        } as ViewStyle)
      : ({
          borderBottomColor: "transparent",
          borderBottomWidth: 1,
        } as ViewStyle);

  const containerBorder = bordered
    ? ({
        borderColor: theme.palette.border.default,
        borderWidth: 1,
      } as ViewStyle)
    : {};

  return {
    rootStyle: {
      borderColor,
      borderWidth: 1,
      backgroundColor,
      borderRadius: theme.fn.radius(theme.defaultRadius),
      ...containerBorder,
    } as ViewStyle,
    headerStyle: {
      zIndex: 2,
      paddingHorizontal: theme.spacing.xl,
      paddingVertical: theme.spacing.md,
      height: fixHeaderHeight ? 60 : undefined,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      ...headerBorder,
    } as ViewStyle,
    contentStyle: {
      padding: theme.spacing.xl,
    },
  };
};
