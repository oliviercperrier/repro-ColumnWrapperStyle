import { TNumberSize, useTheme, TScreenSize, TStyleSystemProps } from "@budgeinc/budge-ui-styling";
import { ViewStyle } from "react-native";

export interface GridStylesParams {
  gutter: TNumberSize;
  screenSize: TScreenSize;
  responsive?: Partial<Record<TScreenSize, number>>;
  column: number;
  bordered: boolean;
}

export const useStyles = ({ screenSize, gutter, responsive, column, bordered }: GridStylesParams) => {
  const theme = useTheme();

  const gutterSize = theme.fn.size({ size: gutter, sizes: theme.spacing }) as number;
  const nbColumns = responsive && responsive[screenSize] ? responsive[screenSize] || column : column;

  return {
    rootStyle: {
      marginHorizontal: -1 * (gutterSize / 2),
      ...(bordered
        ? {
            borderWidth: 1,
            borderColor: theme.palette.border.default,
          }
        : {}),
      flexDirection: "column",
      overflow: "hidden",
    } as ViewStyle,
    childWidth: `${100 / nbColumns}%` as TStyleSystemProps["w"],
    nbColumns,
    gutterSize,
  };
};
