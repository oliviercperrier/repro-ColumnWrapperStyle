import { ReactNode } from "react";
import { TPickerControlProps } from "./PickerControl";

export type DayOfWeek = 0 | 1 | 2 | 3 | 4 | 5 | 6;
export type CalendarLevel = "month" | "year" | "decade";

export type GetControlPropsFunc = (
  date: Date,
  defaultTitle: string,
  isOutside: boolean,
  isDisabled: boolean
) => Partial<TPickerControlProps>;

export type GetHeaderTitleFunc = (date: Date, defaultTitle: string) => ReactNode;
