import React, { PropsWithChildren } from "react";
import useTooltip from "./useTooltip";
import TooltipContext from "./Tooltip.context";
import { TTooltipProps } from "./Tooltip.types";

const Tooltip = ({ children, ...options }: PropsWithChildren<TTooltipProps>) => {
  const tooltip = useTooltip(options);

  return <TooltipContext.Provider value={tooltip}>{children}</TooltipContext.Provider>;
};

export default Tooltip;