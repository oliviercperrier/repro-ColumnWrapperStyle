import React, { forwardRef } from "react";
import { View } from "react-native";
import GiftIcon from "../../Gift";
import RoundIcon, { TRoundIconProps } from "../RoundIcon";

const GiftGoalIcon = forwardRef<View, Omit<TRoundIconProps, "icon" | "type">>((props, ref) => (
  <RoundIcon ref={ref} icon={GiftIcon} color="primary" {...props} />
));

export default GiftGoalIcon;
