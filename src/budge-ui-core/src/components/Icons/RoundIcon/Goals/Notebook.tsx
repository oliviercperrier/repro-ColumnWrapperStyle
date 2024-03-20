import React, { forwardRef } from "react";
import { View } from "react-native";
import NotebookIcon from "../../Notebook";
import RoundIcon, { TRoundIconProps } from "../RoundIcon";

const NotebookGoalIcon = forwardRef<View, Omit<TRoundIconProps, "icon" | "type">>((props, ref) => (
  <RoundIcon ref={ref} icon={NotebookIcon} color="red" {...props} />
));

export default NotebookGoalIcon;
