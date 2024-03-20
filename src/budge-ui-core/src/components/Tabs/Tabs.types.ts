import { TColor, TNumberSize } from "@budgeinc/budge-ui-styling";
import { ForwardedRef, PropsWithChildren, ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";
import { TBoxProps } from "../Box";

export type TTabsPaneRef = {
  canNavigate: (navigateToTab: () => void) => Promise<boolean> | boolean;
};

export type TTabsPaneContextType = {
  tabRef?: React.RefObject<TTabsPaneRef>;
};

export type TTabsPaneProps = PropsWithChildren<{
  title: string;
  tabKey: string;
  tabRef?: React.RefObject<TTabsPaneRef>;
  style?: StyleProp<ViewStyle>;
  flex?: boolean;
  willLooseFocus?(): boolean;
}>;

export type TTabsStyleProps = {
  size?: TTabsSize;
  activeColor?: TColor;
  borderWidth?: number;
  activeBorderWidth?: number;
  tabBarItemProps?: TBoxProps;
  scrollEnabled?: boolean;
};

export type TTabsBarProps = TTabsStyleProps & {
  activeKey: string;
  onChange(key: string): void;
  paneRefs: Record<string, React.RefObject<TTabsPaneRef>>;
  parsedChildren: TTabsPaneChildElementType[];
  extra?: ReactNode;
};

export type TTabsSize = TNumberSize | "default";

export type TTabsProps = PropsWithChildren<
  {
    defaultActiveKey: string;
    activeKey?: string;
    onChange?: (newActiveKey: string) => void;
    contentContainerProps?: TBoxProps;
    tabBarExtra?: ReactNode;
    /* Force tab content to re-render everytime  */
    forceRender?: boolean;
  } & TTabsStyleProps &
    TBoxProps
>;

export type TTabsPaneChildElementType = {
  props: TTabsPaneProps;
  type: any;
};

export type TTabsComponent = ((props: TTabsProps & { ref?: ForwardedRef<any> }) => JSX.Element) & {
  Pane: React.MemoExoticComponent<(props: TTabsPaneProps & { ref?: ForwardedRef<any> }) => JSX.Element>;
};
