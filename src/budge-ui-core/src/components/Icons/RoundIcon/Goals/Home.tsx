import React, { forwardRef } from "react";
import { View } from "react-native";
import HomeIcon from "../../Home";
import RoundIcon, { TRoundIconProps } from "../RoundIcon";

const HomeGoalIcon = forwardRef<View, Omit<TRoundIconProps, "icon" | "type">>((props, ref) => (
  <RoundIcon ref={ref} icon={HomeIcon} color="primary" {...props} />
));

export default HomeGoalIcon;
