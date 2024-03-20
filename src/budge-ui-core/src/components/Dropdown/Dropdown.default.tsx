import { OverlayProvider } from "@react-native-aria/overlays";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { LayoutRectangle, StyleSheet, View, ViewStyle } from "react-native";
import { Box } from "../Box";
import { ConditionalWrapper } from "../ConditionalWrapper";
import { BPortal } from "../Portal";
import { Pressable } from "../Pressable";
import { TDropdownProps } from "./Dropdown.types";
import DropdownOverlayView from "./DropdownOverlayView";
import { Tooltip } from "../Tooltip";

const Dropdown = ({
  anchor,
  placement = "bottom",
  visible,
  onVisibleChange,
  overlay,
  style,
  disabled,
  hoverEffect = false,
  openOnFocus = true,
  overlayMinWidth,
  overlayMaxWidth,
  overlayFitAnchor,
  tooltipValue,
}: TDropdownProps) => {
  const anchorRef = useRef<View>(null);
  const [rendered, setRendered] = useState(visible);
  const [anchorLayout, setAnchorLayout] = useState<LayoutRectangle>();

  useEffect(() => {
    if (visible) {
      setRendered(visible);
    } else {
      handleClosed();
    }
  }, [visible]);

  const getAnchorWrapper = (children: any) => (
    <Tooltip title={tooltipValue!} hidden={!tooltipValue}>
      <Pressable focusable={false} withPressEffect={hoverEffect} onPress={() => onVisibleChange(!visible)}>
        {children}
      </Pressable>
    </Tooltip>
  );

  const getMinWidth = useCallback(() => {
    const anchorLayoutWidth = anchorLayout?.width!;

    if (!overlayMinWidth && !overlayMaxWidth) {
      return anchorLayoutWidth;
    }

    if (overlayMaxWidth) {
      return overlayMaxWidth < anchorLayoutWidth ? overlayMaxWidth : anchorLayoutWidth;
    }

    return overlayMinWidth && overlayMinWidth > anchorLayoutWidth ? overlayMinWidth : anchorLayoutWidth;
  }, [anchorLayout?.width, overlayMaxWidth, overlayMinWidth]);

  const handleClosed = useCallback(() => setRendered(false), []);

  return (
    <Box sx={StyleSheet.flatten(style) as ViewStyle}>
      <ConditionalWrapper condition={!disabled && openOnFocus} wrapper={getAnchorWrapper}>
        <Box ref={anchorRef} onLayout={v => setAnchorLayout(v.nativeEvent.layout)}>
          {anchor}
        </Box>
      </ConditionalWrapper>
      {rendered && !!anchorLayout && (
        <BPortal>
          <DropdownOverlayView
            targetLayout={anchorLayout}
            targetRef={anchorRef}
            overlay={overlay}
            overlayMinWidth={getMinWidth()}
            overlayMaxWidth={overlayFitAnchor ? anchorLayout.width : overlayMaxWidth}
            placement={placement}
          />
          <Pressable
            style={StyleSheet.absoluteFill}
            noCursor
            focusable={false}
            onPress={() => onVisibleChange(false)}
          />
        </BPortal>
      )}
    </Box>
  );
};

const DropdownDefault = (props: TDropdownProps) => (
  <OverlayProvider>
    <Dropdown {...props} />
  </OverlayProvider>
);

export default DropdownDefault;
