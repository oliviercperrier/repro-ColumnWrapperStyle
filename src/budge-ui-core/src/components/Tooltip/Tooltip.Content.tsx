import { forwardRef } from "react";
import { useTooltipContext } from "./Tooltip.context";
import { useMergeRefs, FloatingPortal, useTransitionStyles } from "@floating-ui/react";
import { StyleSheet, View } from "react-native";
import { twMerge } from "tailwind-merge";
import { Text, TTextProps } from "../Text";
import { Box } from "../Box";

const TooltipContent = forwardRef<View, TTextProps>(({ style, className, children, ...props }, propRef) => {
  const context = useTooltipContext();
  const { isMounted, styles } = useTransitionStyles(context.context, {
    initial: ({ side }) => ({
      transform:
        side === "bottom"
          ? "translateY(-3px)"
          : side === "top"
          ? "translateY(3px)"
          : side === "left"
          ? "translateX(3px)"
          : "translateX(-3px)",
      opacity: 0,
    }),
    duration: {
      open: 200,
      close: 100,
    },
  });

  const ref = useMergeRefs([context.refs.setFloating, propRef as any]);

  if (!isMounted) return null;

  return (
    <FloatingPortal>
      <Box
        ref={ref}
        style={{
          ...(context.floatingStyles as any),
          ...StyleSheet.flatten(style),
        }}
        {...context.getFloatingProps(props as any)}
      >
        <Text style={styles as any} className={twMerge(className, "bg-dark text-sm text-white px-2 py-1 rounded-md")}>
          {children}
        </Text>
      </Box>
    </FloatingPortal>
  );
});

export default TooltipContent;
