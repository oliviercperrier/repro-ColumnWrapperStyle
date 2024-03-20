import React, { forwardRef } from "react";
import { View } from "react-native";
import StudentIcon from "../../Student";
import RoundIcon, { TRoundIconProps } from "../RoundIcon";

const StudentGoalIcon = forwardRef<View, Omit<TRoundIconProps, "icon" | "type">>((props, ref) => (
  <RoundIcon ref={ref} icon={StudentIcon} color="primary" {...props} />
));

export default StudentGoalIcon;
