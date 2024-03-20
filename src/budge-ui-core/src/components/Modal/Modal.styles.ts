import { TDimensionSize, TSize, useTheme } from "@budgeinc/budge-ui-styling";
import { ViewStyle } from "react-native";

const sizes: Record<TSize, number> = {
  xs: 200,
  sm: 350,
  md: 450,
  lg: 750,
  xl: 950,
  xxl: 1200,
};

export const useStyles = ({ size }: { size: TDimensionSize }) => {
  const theme = useTheme();
  const modalSize = theme.fn.size({ sizes, size });

  return {
    rootStyle: {
      justifyContent: "center",
      alignItems: "center",
      padding: theme.spacing.lg,
      minHeight: "100%",
    } as ViewStyle,
    modalStyle: {
      backgroundColor: theme.white,
      borderRadius: theme.fn.radius("lg"),
      width: "100%",
      overflow: "hidden",
    } as ViewStyle,
    scrollViewStyles: {
      rootStyle: {
        backgroundColor: theme.fn.alpha(theme.palette.colors.dark[9], 0.4),
      } as ViewStyle,
      contentStyle: {
        minHeight: "100%",
      } as ViewStyle,
    },
    modalSize,
  };
};
