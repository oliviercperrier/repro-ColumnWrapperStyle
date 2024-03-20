import { View } from "react-native";
import React, { forwardRef } from "react";
import { composeEventHandlers, useComponentDefaultProps } from "@budgeinc/budge-ui-styling";
import { format } from "date-fns";
import { getYearData } from "./getYearData";
import PickerControl from "../PickerControl";
import { useCalendarContext } from "../CalendarProvider";
import { Grid } from "../../Grid";
import { isYearDisabled } from "./isYearDisabled";
import { GetControlPropsFunc } from "../General.types";

export type TYearsListSettings = {
  onSelectYear?(month: Date): void;
  getYearControlProps?: GetControlPropsFunc;
};

export type TYearsListProps = TYearsListSettings & {
  decade: Date;
};

const YearsList = forwardRef<View, TYearsListProps>((props, ref) => {
  const { size, minDate, maxDate } = useCalendarContext();
  const { decade, onSelectYear, getYearControlProps } = useComponentDefaultProps("YearsList", {}, props);

  const years = getYearData(decade);

  return (
    <Grid ref={ref} column={3} gutter={0}>
      {years.map(year => {
        const defaultTitle = format(year, "yyyy");
        const disabled = isYearDisabled(year, minDate, maxDate);
        const yearControlProps = getYearControlProps?.(year, defaultTitle, false, disabled);

        return (
          <PickerControl
            key={`year-${year.toISOString()}`}
            title={defaultTitle}
            f={1}
            fullWidth
            size={size}
            disabled={disabled}
            {...yearControlProps}
            onPress={composeEventHandlers(() => onSelectYear?.(year), yearControlProps?.onPress)}
          />
        );
      })}
    </Grid>
  );
});

export default YearsList;
