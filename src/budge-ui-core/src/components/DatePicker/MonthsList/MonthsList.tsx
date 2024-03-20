import { View } from "react-native";
import React, { forwardRef } from "react";
import { composeEventHandlers, useComponentDefaultProps } from "@budgeinc/budge-ui-styling";
import { format } from "date-fns";
import { getMonthsData } from "./getMonthData";
import PickerControl from "../PickerControl";
import { useCalendarContext } from "../CalendarProvider";
import { Grid } from "../../Grid";
import { isMonthDisabled } from "./isMonthDisabled";
import { GetControlPropsFunc } from "../General.types";

export type TMonthsListSettings = {
  onSelectMonth?(month: Date): void;
  getMonthControlProps?: GetControlPropsFunc;
};

export type TMonthsListProps = TMonthsListSettings & {
  year: Date;
};

const MonthsList = forwardRef<View, TMonthsListProps>((props, ref) => {
  const { size, minDate, maxDate } = useCalendarContext();
  const { year, onSelectMonth, getMonthControlProps } = useComponentDefaultProps("MonthsList", {}, props);

  const months = getMonthsData(year);

  return (
    <Grid ref={ref} column={3} gutter={0}>
      {months.map(month => {
        const defaultTitle = format(month, "MMM");
        const isDisabled = isMonthDisabled(month, minDate, maxDate);
        const monthControlProps = getMonthControlProps?.(month, defaultTitle, false, isDisabled);

        return (
          <PickerControl
            key={`month-${month.toISOString()}`}
            title={defaultTitle}
            f={1}
            size={size}
            fullWidth
            disabled={isMonthDisabled(month, minDate, maxDate)}
            {...monthControlProps}
            onPress={composeEventHandlers(() => onSelectMonth?.(month), monthControlProps?.onPress)}
          />
        );
      })}
    </Grid>
  );
});

export default MonthsList;
