import React from "react";
import BudgeIcon from "../BudgeIcon";
import RoundIcon, { TRoundIconProps } from "./RoundIcon";

const BudgeRoundIcon = (props: Omit<TRoundIconProps, "icon" | "color" | "iconColor" | "opactBg">) => (
  <RoundIcon {...props} icon={BudgeIcon} color="purple.9" iconColor="orange" opaque />
);

export default BudgeRoundIcon;
