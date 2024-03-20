import { TSize, useTheme } from "@budgeinc/budge-ui-styling";
import { CALENDAR_SIZES } from "../Calendar/Calendar.styles";

export interface CalendarStylesParams {
  size: TSize;
}

export const useStyles = ({ size }: CalendarStylesParams) => {
  const theme = useTheme();
  const controlMiw = theme.fn.size({ size, sizes: CALENDAR_SIZES }) as number;

  return {
    controlMiw: controlMiw / 7,
  };
};
