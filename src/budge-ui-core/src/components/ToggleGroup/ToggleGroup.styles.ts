import { useTheme } from "@budgeinc/budge-ui-styling";
import { ViewStyle } from "react-native";

export type TToggleGroupStylesParams = {
  nbOptions: number;
};

export const Padding = 3;

export const useStyles = ({ nbOptions }: TToggleGroupStylesParams) => {
  const theme = useTheme();

  return {
    rootStyle: {
      justifyContent: "center",
      alignItems: "center",
      padding: Padding,
      height: 36,
      borderRadius: theme.fn.radius(theme.defaultRadius),
      backgroundColor: theme.palette.colors.dark[1],
    } as ViewStyle,
    toggleGroupContainerStyle: {
      width: "100%",
      height: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      position: "relative",
    } as ViewStyle,
    clickableAreaStyle: {
      width: `${100 / nbOptions}%`,
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
    } as ViewStyle,
    toggleIndicatorStyle: {
      position: "absolute",
      top: 2,
      bottom: 2,
      right: 2,
      left: 2,
      borderWidth: 0.5,
      borderColor: "rgba(0,0,0,0.04)",
      borderRadius: 6,
      backgroundColor: theme.white,
      elevation: 2,
      shadowColor: theme.black,
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0.1,
      shadowRadius: 8,
    } as any,
  };
};
