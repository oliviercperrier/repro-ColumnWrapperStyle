import React, { forwardRef } from "react";
import { View } from "react-native";
import CarIcon from "../../Car";
import RoundIcon, { TRoundIconProps } from "../RoundIcon";

const CarGoalIcon = forwardRef<View, Omit<TRoundIconProps, "icon" | "type">>((props, ref) => (
  <RoundIcon ref={ref} icon={CarIcon} color="primary" {...props} />
));

export default CarGoalIcon;
