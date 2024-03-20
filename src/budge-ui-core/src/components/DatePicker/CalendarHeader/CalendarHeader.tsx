import React, { ReactNode, forwardRef } from "react";
import { View } from "react-native";
import { useComponentDefaultProps } from "@budgeinc/budge-ui-styling";
import { Stack } from "../../Stack";
import { ChevronLeftIcon, ChevronRightIcon } from "../../Icons";
import PickerControl from "../PickerControl";
import { useCalendarContext } from "../CalendarProvider";
import { useStyles } from "./CalendarHeader.styles";

export type TCalendarHeaderSettings = {
  onNext?(): void;
  nextDisaled?: boolean;
  onPrevious?(): void;
  previousDisabled?: boolean;
  onLevelPress?(): void;
  hasNextLevel?: boolean;
};

export type TCalendarHeaderProps = TCalendarHeaderSettings & {
  title: ReactNode;
};

const CalendarHeader = forwardRef<View, TCalendarHeaderProps>((props, ref) => {
  const { size } = useCalendarContext();
  const { controlMiw } = useStyles({ size });
  const {
    title,
    onNext,
    onPrevious,
    onLevelPress,
    nextDisaled = false,
    previousDisabled = false,
    hasNextLevel = true,
  } = useComponentDefaultProps("CalendarHeader", {}, props);

  return (
    <Stack.Horizontal ref={ref} alignItems="center" w="100%" spacing={0}>
      <PickerControl
        w={controlMiw}
        size={size}
        leftIcon={ChevronLeftIcon}
        onPress={onPrevious}
        disabled={previousDisabled}
      />
      <PickerControl
        f={1}
        size={size}
        title={title}
        titleTextProps={{
          fw: "500",
        }}
        withDisabledOpacity={false}
        disabled={!onLevelPress || !hasNextLevel}
        onPress={onLevelPress}
      />
      <PickerControl w={controlMiw} size={size} leftIcon={ChevronRightIcon} onPress={onNext} disabled={nextDisaled} />
    </Stack.Horizontal>
  );
});

export default CalendarHeader;
