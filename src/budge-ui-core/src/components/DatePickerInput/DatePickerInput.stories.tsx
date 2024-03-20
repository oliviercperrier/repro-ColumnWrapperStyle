import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import { Box } from "../Box";
import DatePickerInput, { TDatePickerInputProps } from "./DatePickerInput";
import { Meta, StoryFn } from "@storybook/react";

const meta = {
  title: "Inputs/Calendar/DatePickerInput",
  component: DatePickerInput,
  args: {
    showToday: false,
  },
} satisfies Meta<typeof DatePickerInput>;

export default meta;

type Story = StoryFn<typeof DatePickerInput>;

export const Basic: Story = (args) => {
  const [_date, setDate] = useState<Date>();

  return (
    <Box maw={350}>
      <DatePickerInput
        value={_date}
        label="Date"
        placeholder="mm/dd/yyyy"
        onChange={date => {
          setDate(date);
          action("onChange")(date);
        }}
        {...args}
      />
    </Box>
  );
};
