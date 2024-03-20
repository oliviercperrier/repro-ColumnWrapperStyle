import React, { forwardRef } from "react";
import { View } from "react-native";
import AddIcon from "../../Add";
import RoundIcon, { TRoundIconProps } from "../RoundIcon";

const AddNewGoalIcon = forwardRef<View, Omit<TRoundIconProps, "icon" | "type">>((props, ref) => (
  <RoundIcon ref={ref} icon={AddIcon} color="gray" {...props} />
));

export default AddNewGoalIcon;
