import Tooltip from "./Tooltip";
import TooltipContent from "./Tooltip.Content";
import TooltipTrigger from "./Tooltip.Trigger";
import type { TTooltipComponent } from "./Tooltip.types";

const TooltipTemp: any = Tooltip;

TooltipTemp.Content = TooltipContent;
TooltipTemp.Trigger = TooltipTrigger;

if (process.env.NODE_ENV !== "production") {
  TooltipTemp.displayName = "Tooltip";
  TooltipTemp.Content.displayName = "Tooltip.Content";
  TooltipTemp.Trigger.displayName = "Tooltip.Trigger";
}

const TooltipMain = TooltipTemp as TTooltipComponent;

export * from "./Tooltip.types";
export { TooltipMain as Tooltip };
