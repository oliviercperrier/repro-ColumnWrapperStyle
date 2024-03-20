import { StyleProp, ViewStyle } from "react-native";
import { TPlacements } from "../Tooltip/react-native-popper/types";

export interface OverlayProps {
  overlayMinWidth?: number | undefined;
  overlayMaxWidth?: number | undefined;
  placement?: TPlacements;
  overlay: React.ReactNode;
}

export type TDropdownProps = OverlayProps & {
  style?: StyleProp<ViewStyle>;
  anchor: React.ReactNode;
  visible: boolean;
  openOnFocus?: boolean;
  onVisibleChange: (value: boolean) => void;
  overlay: React.ReactNode;
  overlayFitAnchor?: boolean;
  disabled?: boolean;
  hoverEffect?: boolean;
  /* Web only */
  tooltipValue?: string;
};
