import React from "react";
import { ComponentMeta } from "@storybook/react-native";
import {
  EmployeePayrollSettingsPayFrequencyEnum,
  EmployeePayrollSettingsPayDayOfWeekEnum,
  EmployeePayrollSettingsPayDayOfMonth1Enum,
} from "@budgeinc/budge-api";
import { capitalize } from "@budgeinc/budge-ui-utils";
import { Stack } from "../components/Stack";
import { Text } from "../components/Text";
import { getPaydayFrequencyDisplay } from "./paydaySettings";

const ButtonMeta: ComponentMeta<any> = {
  title: "Utils/Formatter",
  component: () => null,
  args: {},
  parameters: {},
};

export default ButtonMeta;

export const PaydaySettings = () => (
  <Stack spacing="md">
    <Text variant="titleH4" fw="600">
      Payday Setting Frequency Display:
    </Text>
    <Stack>
      <Stack.Horizontal>
        <Text fw="500">Weekly:</Text>
        <Text>
          {capitalize(
            getPaydayFrequencyDisplay({
              payFrequency: EmployeePayrollSettingsPayFrequencyEnum.Weekly,
              payDayOfWeek: EmployeePayrollSettingsPayDayOfWeekEnum.Monday,
            })
          )}
        </Text>
      </Stack.Horizontal>
      <Stack.Horizontal>
        <Text fw="500">BiWeekly:</Text>
        <Text>
          {capitalize(
            getPaydayFrequencyDisplay({
              payFrequency: EmployeePayrollSettingsPayFrequencyEnum.BiWeekly,
              payDayOfWeek: EmployeePayrollSettingsPayDayOfWeekEnum.Monday,
              payDayOfMonth1: EmployeePayrollSettingsPayDayOfMonth1Enum.D01,
              payDayOfMonth2: EmployeePayrollSettingsPayDayOfMonth1Enum.D15,
              payDayStartDate: "2024-01-01T19:42:03.362Z",
            })
          )}
        </Text>
      </Stack.Horizontal>
      <Stack.Horizontal>
        <Text fw="500">Monthly:</Text>
        <Text>
          {capitalize(
            getPaydayFrequencyDisplay({
              payFrequency: EmployeePayrollSettingsPayFrequencyEnum.Monthly,
              payDayOfWeek: EmployeePayrollSettingsPayDayOfWeekEnum.Monday,
              payDayOfMonth1: EmployeePayrollSettingsPayDayOfMonth1Enum.D01,
            })
          )}
        </Text>
      </Stack.Horizontal>
      <Stack.Horizontal>
        <Text fw="500">Semi Monthly:</Text>
        <Text>
          {capitalize(
            getPaydayFrequencyDisplay({
              payFrequency: EmployeePayrollSettingsPayFrequencyEnum.SemiMonthly,
              payDayOfWeek: EmployeePayrollSettingsPayDayOfWeekEnum.Monday,
              payDayOfMonth1: EmployeePayrollSettingsPayDayOfMonth1Enum.D01,
              payDayOfMonth2: EmployeePayrollSettingsPayDayOfMonth1Enum.D15,
            })
          )}
        </Text>
      </Stack.Horizontal>
    </Stack>
  </Stack>
);
