import { forwardRef } from "react";
import { useTooltipContext } from "./Tooltip.context";
import { useMergeRefs, FloatingPortal } from "@floating-ui/react";
import { StyleSheet, View } from "react-native";
import { twMerge } from "tailwind-merge";
import { Text, TTextProps } from "../Text";

const TooltipContent = forwardRef<View, TTextProps>(({ style, className, ...props }, propRef) => {
  const context = useTooltipContext();
  const ref = useMergeRefs([context.refs.setFloating, propRef as any]);

  if (!context.open) return null;

  return (
    <FloatingPortal>
      <Text
        ref={ref}
        style={{
          ...(context.floatingStyles as any),
          ...StyleSheet.flatten(style),
        }}
        className={twMerge(className, "bg-dark text-sm text-white px-2 py-1 rounded-md")}
        {...context.getFloatingProps(props as any)}
      />
    </FloatingPortal>
  );
});

export default TooltipContent;
