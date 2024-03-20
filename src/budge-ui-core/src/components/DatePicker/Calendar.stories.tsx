import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import { formatMoney, intlFormatDate } from "@budgeinc/budge-ui-utils";
import { getDate, getDay } from "date-fns";
import { Stack } from "../Stack";
import { Text } from "../Text";
import { Modal } from "../Modal";
import Calendar, { TCalendarProps } from "./Calendar/Calendar";
import { Box } from "../Box";
import { Meta, StoryFn } from "@storybook/react";

const meta = {
  title: "Inputs/Calendar/Calendar",
  component: Calendar,
  args: {},
} satisfies Meta<typeof Calendar>;

export default meta;

type Story = StoryFn<typeof Calendar>;

export const Basic: Story = args => (
  <Calendar
    {...args}
    getDayControlProps={(date, defaultTitle) => ({
      onPress: () => action("onDayClick")({ date, defaultTitle }),
    })}
    getMonthControlProps={(date, defaultTitle) => ({
      onPress: () => action("onMonthClick")({ date, defaultTitle }),
    })}
    getYearControlProps={(date, defaultTitle) => ({
      onPress: () => action("onYearClick")({ date, defaultTitle }),
    })}
    onNextMonth={action("onNextMonth")}
    onNextYear={action("onNextYear")}
    onNextDecade={action("onNextDecade")}
  />
);

const DateWithAmount = {
  2: 10000,
  3: 5000,
  15: 1600,
  17: 8700,
  27: 5200,
};

// Every Tuesday
const RecurringWeekDayAmount = {
  2: 5000,
};

export const Custom: Story = ({ args }) => {
  const [_value, setValue] = useState<Date>(new Date());
  const [day, setDay] = useState<Date>();
  const [opened, setOpened] = useState(false);

  const getDayAmountDetails = (date: Date) => {
    let amountCents = (DateWithAmount as any)[getDate(date)] || 0;
    const dayOfWeek = getDay(date);

    if (dayOfWeek in RecurringWeekDayAmount) {
      amountCents += (RecurringWeekDayAmount as any)[dayOfWeek];
    }

    return {
      total: amountCents,
    };
  };

  return (
    <>
      <Calendar
        size="md"
        maw="100%"
        {...args}
        getDayControlProps={(date, defaultTitle, isOutside, isDisabled) => {
          let amountCents = getDayAmountDetails(date).total;

          return {
            bg: amountCents ? "primary.1" : undefined,
            title: (
              <Stack spacing={0} alignItems="center" opacity={isOutside || isDisabled ? 0.25 : 1}>
                <Text color="default">{defaultTitle}</Text>
                {amountCents && (
                  <Text variant="bodySmall" color="primary" fw="500">
                    {formatMoney({ amountCents, minFractionDigits: 0 })}
                  </Text>
                )}
              </Stack>
            ),
            onPress: () => {
              setDay(date);
              setOpened(true);
            },
          };
        }}
      />
      <Modal
        title={
          <Text variant="bodyMedium" fw="600">
            {intlFormatDate({
              value: day,
            })}{" "}
            - {day ? formatMoney({ amountCents: getDayAmountDetails(day).total }) : ""}
          </Text>
        }
        opened={opened}
        onClose={() => setOpened(false)}
        withCloseButton
        footer={null}
      >
        <Box px="xl" pb="xl">
          <Text>Content...</Text>
        </Box>
      </Modal>
    </>
  );
};
