import { EmployeeOutput } from "@budgeinc/budge-api";
import { EMPTY_VALUE_PLACEHOLDER } from "./contants";

export const formatEmployeeName = ({
  employee,
  withId = false,
  fallback = EMPTY_VALUE_PLACEHOLDER,
}: {
  employee: EmployeeOutput;
  withId?: boolean;
  fallback?: string;
}) => {
  if (!employee?.firstName && !employee?.lastName) {
    return fallback;
  }

  return `${employee.firstName || EMPTY_VALUE_PLACEHOLDER} ${employee.lastName || EMPTY_VALUE_PLACEHOLDER}${
    withId ? ` (${employee.id})` : ""
  }`;
};

export const isNil = (value: any) => value == null;
