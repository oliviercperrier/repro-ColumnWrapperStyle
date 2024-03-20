import React, { forwardRef } from "react";
import { View } from "react-native";
import SunIcon from "../../Sun";
import RoundIcon, { TRoundIconProps } from "../RoundIcon";

const SunGoalIcon = forwardRef<View, Omit<TRoundIconProps, "icon" | "type">>((props, ref) => (
  <RoundIcon ref={ref} icon={SunIcon} color="blue" {...props} />
));

export default SunGoalIcon;
