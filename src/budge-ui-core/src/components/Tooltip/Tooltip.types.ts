import type { Placement } from "@floating-ui/react";
import { ForwardedRef, PropsWithChildren } from "react";
import { TBoxProps } from "../Box";
import { TTextProps } from "../Text";

export type TTooltipProps = {
  initialOpen?: boolean;
  placement?: Placement;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

export type TTooltipComponent = ((props: PropsWithChildren<TTooltipProps>) => JSX.Element) & {
  Content: (
    props: TTextProps & {
      ref?: ForwardedRef<any>;
    }
  ) => JSX.Element;
  Trigger: (
    props: TBoxProps & {
      ref?: ForwardedRef<any>;
    }
  ) => JSX.Element;
};
