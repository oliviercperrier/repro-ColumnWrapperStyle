import {
  FinancialAccountOutputAccountTypeEnum,
  GoalOutputTypeEnum,
  ProgramOutputFrequencyEnum,
  ProgramOutputTypeEnum,
  SavingDetailsOutputSavingObjectiveEnum,
} from "@budgeinc/budge-api";
import { i18n } from "@budgeinc/budge-ui-utils";

export const getProgramFrequencyDisplayName = ({
  frequency,
  short = false,
  withSlash = false,
}: {
  frequency: ProgramOutputFrequencyEnum;
  short?: boolean;
  withSlash?: boolean;
}) => {
  switch (frequency) {
    case ProgramOutputFrequencyEnum.PerPayPeriod:
      return `${withSlash ? "/" : ""}${
        short ? i18n.t("ui-core.enums.program.frequency.short") : i18n.t("ui-core.enums.program.frequency.long")
      }`;
    default:
      return "";
  }
};

export const getProgramTypeDisplayName = (type: ProgramOutputTypeEnum) => {
  switch (type) {
    case ProgramOutputTypeEnum.EmployeePerPaycheckContribution:
      return i18n.t("ui-core.enums.program.type.employee");
    case ProgramOutputTypeEnum.EmployerPerPaycheckContribution:
      return i18n.t("ui-core.enums.program.type.employer");
    default:
      return i18n.t("ui-core.enums.program.type.other");
  }
};

export const getGoalTypeDisplayName = (goalType: GoalOutputTypeEnum) => {
  switch (goalType) {
    case GoalOutputTypeEnum.CreditCardDebt:
      return i18n.t("ui-core.enums.goal.type.creditCard");
    case GoalOutputTypeEnum.StudentLoanDebt:
      return i18n.t("ui-core.enums.goal.type.studentLoan");
    case GoalOutputTypeEnum.EmergencySaving:
      return i18n.t("ui-core.enums.goal.type.savingsAccount");
    default:
      return i18n.t("ui-core.enums.goal.type.other");
  }
};

export const getAccountTypeDisplayName = (
  accountType?: FinancialAccountOutputAccountTypeEnum | string,
  count: number = 1
) => {
  switch (accountType) {
    case FinancialAccountOutputAccountTypeEnum.CreditCard:
      return i18n.t("ui-core.enums.accountType.creditCard", { count });
    case FinancialAccountOutputAccountTypeEnum.StudentLoan:
      return i18n.t("ui-core.enums.accountType.studentLoan", { count });
    case FinancialAccountOutputAccountTypeEnum.Saving:
      return i18n.t("ui-core.enums.accountType.savingsAccount", { count });
    case FinancialAccountOutputAccountTypeEnum.AutoLoan:
      return i18n.t("ui-core.enums.accountType.autoLoan", { count });
    case FinancialAccountOutputAccountTypeEnum.Mortgage:
      return i18n.t("ui-core.enums.accountType.mortgage", { count });
    case FinancialAccountOutputAccountTypeEnum.PersonalLoan:
      return i18n.t("ui-core.enums.accountType.personalLoan", { count });
    case FinancialAccountOutputAccountTypeEnum.Loan:
      return i18n.t("ui-core.enums.accountType.loan", { count });
    default:
      return i18n.t("ui-core.enums.accountType.other", { count });
  }
};

export const getSavingObjectiveDisplayName = (objective: SavingDetailsOutputSavingObjectiveEnum) => {
  switch (objective) {
    case SavingDetailsOutputSavingObjectiveEnum.ThreeMonthsSalary:
      return "3 Months Salary";
    case SavingDetailsOutputSavingObjectiveEnum.SixMonthsSalary:
      return "6 Months Salary";
    default:
      return "";
  }
};
