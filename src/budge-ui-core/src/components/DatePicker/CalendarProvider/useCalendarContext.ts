import { useContext } from "react";
import { CalendarProviderContext } from "./CalendarProvider";

export const useCalendarContext = () => useContext(CalendarProviderContext);
