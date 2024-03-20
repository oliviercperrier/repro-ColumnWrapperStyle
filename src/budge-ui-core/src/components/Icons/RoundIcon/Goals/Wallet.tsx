import React, { forwardRef } from "react";
import { View } from "react-native";
import SavingsIcon from "../../Savings";
import RoundIcon, { TRoundIconProps } from "../RoundIcon";

const WalletGoalIcon = forwardRef<View, Omit<TRoundIconProps, "icon" | "type">>((props, ref) => (
  <RoundIcon ref={ref} icon={SavingsIcon} color="primary" {...props} />
));

export default WalletGoalIcon;
