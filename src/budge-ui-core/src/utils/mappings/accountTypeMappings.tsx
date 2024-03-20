import { FinancialAccountOutputAccountTypeEnum } from "@budgeinc/budge-api";
import { TColor } from "@budgeinc/budge-ui-styling";
import React, { forwardRef } from "react";
import { View } from "react-native";
import {
  CardGoalIcon,
  TRoundIconProps,
  StudentGoalIcon,
  WalletGoalIcon,
  RoundIcon,
  MoneyIcon,
  TMemoRoundIconProps,
  CarGoalIcon,
  HomeGoalIcon,
  OtherGoalIcon,
} from "../../components/Icons";

export const AccountTypeColorMapping: Record<FinancialAccountOutputAccountTypeEnum, TColor> = {
  [FinancialAccountOutputAccountTypeEnum.CreditCard]: "primary",
  [FinancialAccountOutputAccountTypeEnum.StudentLoan]: "primary",
  [FinancialAccountOutputAccountTypeEnum.Saving]: "primary",
  [FinancialAccountOutputAccountTypeEnum.AutoLoan]: "primary",
  [FinancialAccountOutputAccountTypeEnum.Mortgage]: "primary",
  [FinancialAccountOutputAccountTypeEnum.PersonalLoan]: "primary",
  [FinancialAccountOutputAccountTypeEnum.Loan]: "primary",
  [FinancialAccountOutputAccountTypeEnum.Checking]: "primary",
  [FinancialAccountOutputAccountTypeEnum.Collection]: "primary",
  [FinancialAccountOutputAccountTypeEnum.TransactionAnalysisChecking]: "gray",
  [FinancialAccountOutputAccountTypeEnum.TransactionAnalysisLiability]: "gray",
  [FinancialAccountOutputAccountTypeEnum.CreditBuilder]: "gray",
  [FinancialAccountOutputAccountTypeEnum.Insurance]: "gray",
  [FinancialAccountOutputAccountTypeEnum.Medical]: "gray",
  [FinancialAccountOutputAccountTypeEnum.BusinessLoan]: "gray",
  [FinancialAccountOutputAccountTypeEnum.Subscription]: "gray",
  [FinancialAccountOutputAccountTypeEnum.Utility]: "gray",
  [FinancialAccountOutputAccountTypeEnum.Other]: "gray",
};

export const CheckingAccountTypeIcon = forwardRef<View, Omit<TRoundIconProps, "type" | "icon">>((props, ref) => (
  <RoundIcon ref={ref} icon={MoneyIcon} color={AccountTypeColorMapping.CHECKING} {...props} />
));

export const AccountTypeIconMapping: Record<FinancialAccountOutputAccountTypeEnum | "OTHER", TMemoRoundIconProps> = {
  CREDIT_CARD: CardGoalIcon,
  STUDENT_LOAN: StudentGoalIcon,
  SAVING: WalletGoalIcon,
  AUTO_LOAN: CarGoalIcon,
  MORTGAGE: HomeGoalIcon,
  CHECKING: CheckingAccountTypeIcon,
  PERSONAL_LOAN: OtherGoalIcon,
  LOAN: OtherGoalIcon,
  OTHER: OtherGoalIcon,
  COLLECTION: OtherGoalIcon,
  TRANSACTION_ANALYSIS_CHECKING: OtherGoalIcon,
  TRANSACTION_ANALYSIS_LIABILITY: OtherGoalIcon,
  CREDIT_BUILDER: OtherGoalIcon,
  INSURANCE: OtherGoalIcon,
  MEDICAL: OtherGoalIcon,
  BUSINESS_LOAN: OtherGoalIcon,
  SUBSCRIPTION: OtherGoalIcon,
  UTILITY: OtherGoalIcon,
};
