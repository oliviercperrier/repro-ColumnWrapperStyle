import React, { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { useScreenSize } from "@budgeinc/budge-ui-hooks";
import { TNumberSize } from "@budgeinc/budge-ui-styling";
import { Modal } from "../Modal";
import BottomSheet, { BottomSheetRef } from "./Sheet";
import { TModalHeaderProps, TModalProps } from "../Modal/Modal.types";

export type TResponsiveSheetProps = Omit<TModalHeaderProps, "handleClose"> & {
  opened?: boolean;
  size?: TNumberSize;
  onClose?: () => void;
  onClosed?: () => void;
  children: TModalProps["children"];
};

const ResponsiveSheet = forwardRef<BottomSheetRef | undefined, TResponsiveSheetProps>(
  ({ children, size, onClose, onClosed, opened = false, withCloseButton = false, ...headerProps }, ref) => {
    const { isGreaterThanOrEqual, isSmallerThan } = useScreenSize();
    const [isOpened, setIsOpened] = useState(opened);

    const handleClose = () => {
      onClose?.();
      setIsOpened(false);
    };

    useEffect(() => {
      setIsOpened(opened);
    }, [opened]);

    useImperativeHandle(
      ref,
      () => ({
        opened: isOpened,
        show: () => setIsOpened(true),
        hide: handleClose,
      }),
      [isOpened]
    );

    const hasHeader = () => headerProps.title || headerProps.titleDescription || withCloseButton;

    return (
      <>
        <Modal
          opened={isGreaterThanOrEqual("md") && isOpened}
          onClose={handleClose}
          onClosed={onClosed}
          footer={null}
          size={size}
          withCloseButton={withCloseButton}
          {...headerProps}
        >
          {children}
        </Modal>
        <BottomSheet opened={isSmallerThan("md") && isOpened} onClose={handleClose} onClosed={onClosed}>
          {hasHeader() && <Modal.Header withCloseButton={withCloseButton} {...headerProps} handleClose={handleClose} />}
          {children}
        </BottomSheet>
      </>
    );
  }
);

export default ResponsiveSheet;
