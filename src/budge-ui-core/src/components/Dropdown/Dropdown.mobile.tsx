import { StyleSheet, ViewStyle } from "react-native";
import React, { useEffect } from "react";
import { TDropdownProps } from "./Dropdown.types";
import { ConditionalWrapper } from "../ConditionalWrapper";
import { Box } from "../Box";
import { useSheet } from "../Sheet";
import { Pressable } from "../Pressable";
import { BPortal } from "../Portal";
import BottomSheet from "../Sheet/Sheet";

const DropdownMobile = ({
  anchor,
  visible,
  onVisibleChange,
  overlay,
  style,
  disabled,
  openOnFocus = true,
}: TDropdownProps) => {
  const { ref: sheetRef, show, hide } = useSheet();

  useEffect(() => {
    if (visible) {
      show();
    } else {
      hide();
    }
  }, [visible]);

  const getAnchorWrapper = (children: any) => (
    <Pressable focusable={false} onPress={() => onVisibleChange(true)}>
      {children}
    </Pressable>
  );

  return (
    <Box sx={StyleSheet.flatten(style) as ViewStyle}>
      <ConditionalWrapper condition={!disabled && openOnFocus} wrapper={getAnchorWrapper}>
        {anchor}
      </ConditionalWrapper>
      <BottomSheet ref={sheetRef} onClose={() => onVisibleChange(false)}>
        {overlay as any}
      </BottomSheet>
    </Box>
  );
};

export default DropdownMobile;
