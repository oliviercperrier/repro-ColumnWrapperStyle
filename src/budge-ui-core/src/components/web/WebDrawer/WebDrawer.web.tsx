import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "@budgeinc/budge-ui-styling";
import { Stack } from "../../Stack";
import { Divider } from "../../Divider";
import { BPortal } from "../../Portal";
import { Text } from "../../Text";
import { TWebDrawerProps } from "./types";
import { CloseButton } from "../../CloseButton";

const WebDrawer = ({ title, isOpen, onClose, showBackdrop = true, children }: TWebDrawerProps) => {
  const theme = useTheme();
  const [isDrawerOpen, setDrawerOpen] = useState(isOpen);
  const drawerWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen !== isDrawerOpen) {
      setDrawerOpen(isOpen);
    }
  }, [isOpen]);

  return (
    <BPortal>
      <div
        ref={drawerWrapperRef}
        style={{
          ...styles.backdrop,
          visibility: isDrawerOpen ? "visible" : "hidden",
          opacity: isDrawerOpen ? 1 : 0,
          backgroundColor: showBackdrop ? theme.fn.alpha(theme.black, 0.4) : "transparent",
        }}
        onClick={onClose}
      >
        <div
          style={{
            ...styles.drawer,
            transform: isDrawerOpen ? "translateX(0%)" : "translateX(100%)",
            boxShadow: showBackdrop ? undefined : "-4px 0px 8px 0px rgba(0,0,0,0.15)",
          }}
          onClick={e => {
            e.stopPropagation();
          }}
        >
          <Stack.Horizontal spacing="md" alignItems="center">
            <CloseButton onPress={onClose} size="sm" />
            <Text variant="bodyLarge" fw="600" fgrow={1}>
              {title}
            </Text>
          </Stack.Horizontal>
          <Divider />
          {children}
        </div>
      </div>
    </BPortal>
  );
};

const styles: Record<string, React.CSSProperties> = {
  backdrop: {
    transition: "all 0.2s",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  drawer: {
    transition: "all 0.2s",
    backgroundColor: "white",
    width: 450,
    maxWidth: "100%",
    right: 0,
    bottom: 0,
    top: 0,
    position: "absolute",
    padding: 24,
    overflow: "auto",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
  },
};

export default WebDrawer;
