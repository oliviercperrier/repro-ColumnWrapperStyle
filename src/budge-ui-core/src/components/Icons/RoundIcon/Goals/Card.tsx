import React, { forwardRef } from "react";
import { View } from "react-native";
import CardIcon from "../../Card";
import RoundIcon, { TRoundIconProps } from "../RoundIcon";

const CardGoalIcon = forwardRef<View, Omit<TRoundIconProps, "icon" | "type">>((props, ref) => (
  <RoundIcon ref={ref} icon={CardIcon} color="primary" {...props} />
));

export default CardGoalIcon;
