import { LayoutRectangle, View } from "react-native";
import React, { useEffect, useRef } from "react";
import { useOverlayPosition } from "@react-native-aria/overlays";
import { OverlayProps } from "./Dropdown.types";
import Paper from "../Paper/Paper";

export type TDropdownOverlayViewProps = OverlayProps & {
  targetRef: React.RefObject<any>;
  targetLayout: LayoutRectangle;
};

const DropdownOverlayView = ({
  targetLayout,
  targetRef,
  overlay,
  overlayMinWidth,
  overlayMaxWidth,
  placement,
}: TDropdownOverlayViewProps) => {
  const overlayRef = useRef<View>(null);

  const { overlayProps, updatePosition } = useOverlayPosition({
    placement,
    targetRef,
    overlayRef,
    offset: 10,
  });

  useEffect(() => {
    updatePosition();
  }, [targetLayout.height]);

  return (
    <Paper
      style={overlayProps.style}
      radius="default"
      maw={overlayMaxWidth}
      miw={overlayMinWidth}
      ref={overlayRef}
      focusable={false}
      shadow="lg"
    >
      {overlay}
    </Paper>
  );
};
export default DropdownOverlayView;
