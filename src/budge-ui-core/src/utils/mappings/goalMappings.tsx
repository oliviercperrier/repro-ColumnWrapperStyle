import { GoalOutputTypeEnum } from "@budgeinc/budge-api";
import { TColor } from "@budgeinc/budge-ui-styling";
import { View } from "react-native";
import {
  CardGoalIcon,
  TRoundIconProps,
  StudentGoalIcon,
  WalletGoalIcon,
  HomeGoalIcon,
  CarGoalIcon,
  OtherGoalIcon,
  GiftGoalIcon,
} from "../../components/Icons";

export const GoalColorMapping: Record<GoalOutputTypeEnum, TColor> = {
  [GoalOutputTypeEnum.CreditCardDebt]: "primary",
  [GoalOutputTypeEnum.StudentLoanDebt]: "primary",
  [GoalOutputTypeEnum.EmergencySaving]: "primary",
  [GoalOutputTypeEnum.AutoLoanDebt]: "primary",
  [GoalOutputTypeEnum.MortgageDebt]: "primary",
  [GoalOutputTypeEnum.LoanDebt]: "primary",
  [GoalOutputTypeEnum.PersonalLoanDebt]: "primary",
  [GoalOutputTypeEnum.CollectionDebt]: "primary",
  [GoalOutputTypeEnum.BudgeReferrals]: "primary",
  [GoalOutputTypeEnum.TransactionAnalysisChecking]: "gray",
  [GoalOutputTypeEnum.TransactionAnalysisLiability]: "gray",
  [GoalOutputTypeEnum.CreditBuilderDebt]: "gray",
  [GoalOutputTypeEnum.InsuranceDebt]: "gray",
  [GoalOutputTypeEnum.MedicalDebt]: "gray",
  [GoalOutputTypeEnum.BusinessLoanDebt]: "gray",
  [GoalOutputTypeEnum.SubscriptionDebt]: "gray",
  [GoalOutputTypeEnum.UtilityDebt]: "gray",
  [GoalOutputTypeEnum.OtherDebt]: "gray",
};

export const GoalIconMapping: Record<
  GoalOutputTypeEnum,
  React.ForwardRefExoticComponent<Omit<TRoundIconProps, "icon" | "type"> & React.RefAttributes<View>>
> = {
  CREDIT_CARD_DEBT: CardGoalIcon,
  STUDENT_LOAN_DEBT: StudentGoalIcon,
  EMERGENCY_SAVING: WalletGoalIcon,
  AUTO_LOAN_DEBT: CarGoalIcon,
  MORTGAGE_DEBT: HomeGoalIcon,
  PERSONAL_LOAN_DEBT: OtherGoalIcon,
  LOAN_DEBT: OtherGoalIcon,
  COLLECTION_DEBT: OtherGoalIcon,
  BUDGE_REFERRALS: GiftGoalIcon,
  TRANSACTION_ANALYSIS_CHECKING: OtherGoalIcon,
  TRANSACTION_ANALYSIS_LIABILITY: OtherGoalIcon,
  CREDIT_BUILDER_DEBT: OtherGoalIcon,
  INSURANCE_DEBT: OtherGoalIcon,
  MEDICAL_DEBT: OtherGoalIcon,
  BUSINESS_LOAN_DEBT: OtherGoalIcon,
  SUBSCRIPTION_DEBT: OtherGoalIcon,
  UTILITY_DEBT: OtherGoalIcon,
  OTHER_DEBT: OtherGoalIcon,
};
