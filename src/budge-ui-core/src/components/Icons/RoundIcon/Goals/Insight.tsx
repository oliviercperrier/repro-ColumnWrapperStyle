import React, { forwardRef } from "react";
import { View } from "react-native";
import InsightIcon from "../../Insight";
import RoundIcon, { TRoundIconProps } from "../RoundIcon";

const InsightGoalIcon = forwardRef<View, Omit<TRoundIconProps, "icon" | "type">>((props, ref) => (
  <RoundIcon ref={ref} icon={InsightIcon} color="primary" {...props} />
));

export default InsightGoalIcon;
