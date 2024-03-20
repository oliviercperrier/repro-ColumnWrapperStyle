import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import { addDays } from "date-fns";
import DatePicker, { TDatePickerProps } from "./DatePicker";
import { Meta, StoryFn } from "@storybook/react";

const meta = {
  title: "Inputs/Calendar/DatePicker",
  component: DatePicker,
  args: {},
} satisfies Meta<typeof DatePicker>;

export default meta;

type Story = StoryFn<typeof meta>;

export const Basic: Story = ({ args }) => {
  const [_value, setValue] = useState<Date>(new Date());

  return (
    <DatePicker
      value={_value}
      onChange={date => {
        setValue(date);
        action("onChange")(date);
      }}
      {...args}
    />
  );
};

export const WithMaxDate: Story = ({ args }) => {
  const [_value, setValue] = useState<Date>(new Date());

  return (
    <DatePicker
      value={_value}
      onChange={date => {
        setValue(date);
        action("onChange")(date);
      }}
      maxDate={addDays(new Date(), 5)}
      {...args}
    />
  );
};

export const WithMinDate: Story = ({ args }) => {
  const [_value, setValue] = useState<Date>(new Date());

  return (
    <DatePicker
      value={_value}
      onChange={date => {
        setValue(date);
        action("onChange")(date);
      }}
      minDate={new Date()}
      {...args}
    />
  );
};

export const WithMinMaxDate: Story = ({ args }) => {
  const [_value, setValue] = useState<Date>(new Date());

  return (
    <DatePicker
      value={_value}
      onChange={date => {
        setValue(date);
        action("onChange")(date);
      }}
      minDate={new Date()}
      maxDate={addDays(new Date(), 5)}
      {...args}
    />
  );
};
