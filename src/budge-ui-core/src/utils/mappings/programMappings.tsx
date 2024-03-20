import { ProgramOutputTypeEnum } from "@budgeinc/budge-api";

import {
  AddUserIcon,
  DeleteIcon,
  GiftIcon,
  PayBonusIcon,
  PayRaiseIcon,
  PtoIcon,
  TMemoRefIconProps,
} from "../../components/Icons";

export const ProgramIconMapping: Record<ProgramOutputTypeEnum, TMemoRefIconProps> = {
  EMPLOYEE_BONUS: PayBonusIcon,
  EMPLOYEE_RAISE: PayRaiseIcon,
  EMPLOYEE_PER_PAYCHECK_CONTRIBUTION: AddUserIcon,
  EMPLOYER_PER_PAYCHECK_CONTRIBUTION: AddUserIcon,
  EMPLOYER_ONE_TIME_ACCRUED_PTO_CONVERSION: PtoIcon,
  EMPLOYER_ONE_TIME_RETENTION_SIGNON_BONUS: PayBonusIcon,
  EMPLOYER_ONE_TIME_INCENTIVIZE_PERFORMANCE: PayBonusIcon,
  EMPLOYER_ONE_TIME_REALLOCATE_TUITION_REIMBURSEMENT: PayBonusIcon,
  BUDGE_REFERRALS: GiftIcon,
  TRANSACTION_ANALYSIS_CHECKING: DeleteIcon,
  TRANSACTION_ANALYSIS_LIABILITY: DeleteIcon,
};
