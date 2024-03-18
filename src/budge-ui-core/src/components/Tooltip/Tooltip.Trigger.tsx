import React, { forwardRef } from "react";
import { useTooltipContext } from "./Tooltip.context";
import { useMergeRefs } from "@floating-ui/react";

const TooltipTrigger = forwardRef<HTMLElement, React.HTMLProps<HTMLElement> & { asChild?: boolean }>(
  ({ children, asChild = true, ...props }, propRef) => {
    const context = useTooltipContext();
    const childrenRef = (children as any).ref;
    const ref = useMergeRefs([context.refs.setReference, propRef, childrenRef]);

    // `asChild` allows the user to pass any element as the anchor
    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(
        children,
        context.getReferenceProps({
          ref,
          ...props,
          ...children.props,
          "data-state": context.open ? "open" : "closed",
        })
      );
    }

    return (
      <button ref={ref} data-state={context.open ? "open" : "closed"} {...context.getReferenceProps(props)}>
        {children}
      </button>
    );
  }
);

export default TooltipTrigger;
