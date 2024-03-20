import { TNumberSize } from "@budgeinc/budge-ui-styling";
import { ForwardedRef } from "react";
import { TBoxProps } from "../Box";
import { TPaperProps } from "../Paper/Paper";
import { TLoadingOverlayProps } from "../LoadingOverlay/LoadingOverlay";

export type TCardHeaderProps = {
  title?: React.ReactNode;
  extra?: React.ReactNode;
  widthDivider?: boolean;
};

export type TCardProps = Omit<TPaperProps, "p"> & {
  p?: TNumberSize;
  loading?: boolean;
  contentProps?: Omit<TBoxProps, "p">;
  loadingOverlayProps?: Omit<TLoadingOverlayProps, "radius">;
};

export type TCardComponent = ((props: TCardProps & { ref?: ForwardedRef<any> }) => JSX.Element) & {
  Header: React.MemoExoticComponent<
    (
      props: TCardHeaderProps & {
        ref?: ForwardedRef<any>;
      }
    ) => JSX.Element
  >;
};
