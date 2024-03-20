import React, { forwardRef } from "react";
import { View } from "react-native";
import { CloseIcon } from "../Icons";
import { ActionIcon } from "../ActionIcon";
import { TActionIconProps } from "../ActionIcon/ActionIcon.types";

export type TCloseButtonProps = Omit<TActionIconProps, "icon">;

const CloseButton = forwardRef<View, TCloseButtonProps>(({ radius = "xxl", ...props }, ref) => (
  <ActionIcon ref={ref} radius={radius} icon={CloseIcon} {...props} />
));

export default CloseButton;
