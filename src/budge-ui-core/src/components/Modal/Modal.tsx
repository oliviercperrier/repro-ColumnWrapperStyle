import React, { forwardRef } from "react";
import { View } from "react-native";
import { useComponentDefaultProps, useTheme } from "@budgeinc/budge-ui-styling";
import { TModalProps } from "./Modal.types";
import ModalBase from "./Modal.Base";
import ModalHeader from "./Modal.Header";
import ModalFooter from "./Modal.Footer";
import { BPortal } from "../Portal";
import { Lazy } from "../Lazy";

const Modal = forwardRef<View, TModalProps>((props, ref) => {
  const {
    opened,
    onOk,
    onClose,
    onClosed,
    onOpened,
    size = 500,
    closeOnEscape = true,
    title,
    titleDescription,
    footer,
    children,
    cancelButtonProps,
    okButtonProps,
    closeOnOverlayTap = true,
    withCloseButton = true,
  } = useComponentDefaultProps("Modal", {}, props);
  const {portalProviderNames} = useTheme();

  return (
    <BPortal hostName={portalProviderNames.modals}>
      <ModalBase
        ref={ref}
        opened={opened}
        onClose={onClose}
        onClosed={onClosed}
        onOpened={onOpened}
        size={size}
        closeOnOverlayTap={closeOnOverlayTap}
        closeOnEscape={closeOnEscape}
      >
        <ModalHeader
          title={title}
          titleDescription={titleDescription}
          withCloseButton={withCloseButton}
          handleClose={onClose}
        />
        {children}
        <ModalFooter
          onOk={onOk}
          onClose={onClose}
          okButtonProps={okButtonProps}
          cancelButtonProps={cancelButtonProps}
          footer={footer}
        />
      </ModalBase>
    </BPortal>
  );
});

const LazyModal = forwardRef<View, TModalProps>((props: TModalProps, ref) => (
  <Lazy visible={!!props.opened}>
    <Modal ref={ref} {...props} />
  </Lazy>
));

export default LazyModal;
