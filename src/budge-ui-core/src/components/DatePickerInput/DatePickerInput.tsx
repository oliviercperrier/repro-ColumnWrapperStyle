import { TextInput } from "react-native";
import React, { forwardRef, useEffect } from "react";
import { useScreenSize, useValue, useDisclosure } from "@budgeinc/budge-ui-hooks";
import { useComponentDefaultProps, useTheme } from "@budgeinc/budge-ui-styling";
import { DEFAULT_DATE_FORMAT } from "@budgeinc/budge-ui-utils";
import { format, isValid, parse, isEqual } from "date-fns";
import { SafeAreaView } from "react-native-safe-area-context";
import { Input, TInputProps } from "../Input";
import { CalendarIcon, RoundIcon } from "../Icons";
import { Dropdown } from "../Dropdown";
import { DatePicker, TCalendarSettings, TDatePickerSettings } from "../DatePicker";
import { Sheet, useSheet } from "../Sheet";
import { Pressable } from "../Pressable";
import { useFormikField } from "../Form";
import { BPortal } from "../Portal";
import { TCalendarProviderSettings } from "../DatePicker/CalendarProvider";
import { Box } from "../Box";
import { onKeyPress } from "./utils";

export type TDatePickerInputProps = Omit<
  Omit<TInputProps, "textInputProps" | "suffix" | "value" | "defaultValue" | "infoPopover" | "onChange"> &
    TCalendarSettings &
    TDatePickerSettings &
    TCalendarProviderSettings,
  "size"
>;

const formatDate = (date: Date | string) => {
  try {
    return format(typeof date === "string" ? parse(date, DEFAULT_DATE_FORMAT, new Date()) : date, DEFAULT_DATE_FORMAT);
  } catch {
    return date?.toString();
  }
};

const DatePickerInput = forwardRef<TextInput, TDatePickerInputProps>((props, ref) => {
  const theme = useTheme();
  const { isSmallerThan } = useScreenSize();
  const { field, helpers } = useFormikField();
  const { ref: sheetRef, show, hide } = useSheet();
  const [isOpen, handlers] = useDisclosure(false);
  const { value, defaultValue, onChange, ...others } = useComponentDefaultProps("DatePickerInput", {}, props);
  const currentValue = field?.value || value;

  const [_value, setValue] = useValue({
    value: currentValue,
    defaultValue,
    finalValue: undefined,
    onChange,
  });

  useEffect(() => {
    if (currentValue !== _value) {
      setValue(currentValue);
    }
  }, [currentValue]);

  const renderInput = (onPress: () => void) => (
    <Input
      ref={ref}
      ignoreFormContext
      value={_value && formatDate(_value)}
      onBlur={(_e, inputValue) => {
        const parsedDate = new Date(inputValue as string);

        if (inputValue) {
          if (isValid(parsedDate) && !isEqual(_value, parsedDate)) {
            setValue(parsedDate);
            helpers?.setValue(parsedDate);
          }
        } else {
          setValue(null);
          helpers?.setValue(null);
        }
      }}
      rightSection={
        <Pressable onPress={onPress} disabled={others?.disabled}>
          <RoundIcon size="sm" icon={CalendarIcon} color={others?.disabled ? "gray.4" : "primary"} />
        </Pressable>
      }
      onKeyPress={onKeyPress}
      placeholder="mm/dd/yyyy"
      {...others}
    />
  );

  const handleChange = (date: Date) => {
    helpers?.setValue(date);
    setValue(date);
  };

  if (isSmallerThan("sm")) {
    return (
      <>
        {renderInput(show)}
        <Sheet ref={sheetRef}>
          <SafeAreaView edges={["bottom"]}>
            <Box p="lg">
              <DatePicker
                maw="100%"
                miw={300}
                value={_value}
                defaultDate={_value}
                onChange={handleChange}
                getDayControlProps={() => ({
                  onPress: hide,
                })}
                onTodayPress={hide}
                {...others}
              />
              <Input display="none" />
            </Box>
          </SafeAreaView>
        </Sheet>
      </>
    );
  }

  return (
    <>
      <Dropdown
        visible={isOpen}
        onVisibleChange={handlers.toggle}
        anchor={renderInput(handlers.open)}
        openOnFocus={false}
        overlayMaxWidth={350}
        placement="bottom left"
        overlay={
          <DatePicker
            p="md"
            maw="100%"
            miw={300}
            value={_value}
            defaultDate={_value}
            onChange={handleChange}
            getDayControlProps={() => ({
              onPress: handlers.close,
            })}
            onTodayPress={handlers.close}
            {...others}
          />
        }
      />
      <Input display="none" />
    </>
  );
});

export default DatePickerInput;
