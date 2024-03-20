import React, { forwardRef } from "react";
import { View } from "react-native";
import RoundIcon, { TRoundIconProps } from "../RoundIcon";
import InsightIcon from "../../Insight";

const OtherGoalIcon = forwardRef<View, Omit<TRoundIconProps, "icon" | "type">>((props, ref) => (
  <RoundIcon ref={ref} icon={InsightIcon} color="primary" {...props} />
));

export default OtherGoalIcon;
