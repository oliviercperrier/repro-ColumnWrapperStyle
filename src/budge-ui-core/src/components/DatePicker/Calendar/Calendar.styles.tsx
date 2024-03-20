import { TSize, TSizes, useTheme } from "@budgeinc/budge-ui-styling";

export const CALENDAR_SIZES: TSizes = {
  xs: 250,
  sm: 300,
  md: 350,
  lg: 400,
  xl: 450,
  xxl: 500,
};

export interface CalendarStylesParams {
  size: TSize;
}

export const useStyles = ({ size }: CalendarStylesParams) => {
  const theme = useTheme();

  return {
    maw: theme.fn.size({ size, sizes: CALENDAR_SIZES }),
  };
};
