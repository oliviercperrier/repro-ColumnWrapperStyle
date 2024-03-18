import React, { PropsWithChildren } from "react";
import { TTooltipProps } from "./Tooltip.types";

// Nothing to show on mobile
const Tooltip = ({ children }: PropsWithChildren<TTooltipProps>) => children;

export default Tooltip;
