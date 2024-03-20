import React, { forwardRef } from "react";
import { View } from "react-native";
import HearthIcon from "../../Hearth";
import RoundIcon, { TRoundIconProps } from "../RoundIcon";

const HearthGoalIcon = forwardRef<View, Omit<TRoundIconProps, "icon" | "type">>((props, ref) => (
  <RoundIcon ref={ref} icon={HearthIcon} color="purple" {...props} />
));

export default HearthGoalIcon;
