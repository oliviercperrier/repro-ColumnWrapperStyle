import React, { useCallback, useEffect, useState } from "react";
import { modalManager } from "./ModalManager.state";
import { TAllManagedModals, TConfirmModalProps, TModalId } from "./ModalManager.types";
import Modal from "../Modal/Modal";
import { TModalProps } from "../Modal/Modal.types";
import ConfirmModal from "./ConfirmModal";
import { splitConfirmAndModalProps } from "./utils";

const ModalManager = () => {
  const [modals, setModals] = useState<TAllManagedModals[]>([]);

  useEffect(
    () =>
      modalManager.subscribe({
        onOpenModal,
        onCloseActiveModal,
        onCloseAllModals,
      }),
    []
  );

  const onOpenModal = (modal: TAllManagedModals) =>
    setModals(prevModals => {
      const indexOfExistingModal = prevModals.findIndex(t => t.id === modal.id);

      if (indexOfExistingModal !== -1) {
        const updatedModal = { ...prevModals[indexOfExistingModal], ...modal };

        return [
          ...prevModals.slice(0, indexOfExistingModal),
          updatedModal,
          ...prevModals.slice(indexOfExistingModal + 1),
        ];
      }

      return [...prevModals, modal];
    });

  /**
   * Close All Modals
   *
   * Only keep the last one and set toDismiss to true in order
   * to see the close animation without flickering the content
   * of the modal
   */
  const onCloseAllModals = () =>
    setModals(prevModals => {
      if (prevModals.length) {
        return [
          {
            ...prevModals[prevModals.length - 1],
            toDismiss: true,
          },
        ];
      }

      return prevModals;
    });

  const onCloseActiveModal = () => {
    closeModal({ closeActive: true });
  };

  const closeModal = ({
    id,
    forceDelete = false,
    closeActive = false,
  }:
    | {
        id?: never;
        forceDelete?: boolean;
        closeActive?: true;
      }
    | {
        id: TModalId;
        forceDelete?: boolean;
        closeActive?: false;
      }) => {
    setModals(prevModals => {
      const idToClose = closeActive ? prevModals[prevModals.length - 1]?.id : id;

      return prevModals.length === 1 && !forceDelete
        ? prevModals.map(modal => {
            if (modal.id === idToClose) {
              return { ...modal, toDismiss: true };
            }

            return modal;
          })
        : prevModals.filter(modal => modal.id !== idToClose);
    });
  };

  const getVisibleModal = useCallback(
    () => modals.filter(({ toDismiss }) => toDismiss === false || toDismiss === undefined),
    [modals]
  );

  const getCurrentModal = (): {
    modalProps: Omit<TModalProps, "children"> | undefined;
    content: any;
    currentModal?: TAllManagedModals;
  } => {
    const currentModal = modals[modals.length - 1];

    switch (currentModal?.type) {
      case "modal": {
        const { children, ...props } = currentModal;

        return {
          modalProps: props,
          content: currentModal.children,
          currentModal,
        };
      }
      case "confirm": {
        const { confirmProps, modalProps } = splitConfirmAndModalProps(currentModal);

        return {
          modalProps: {
            ...modalProps,
            size: 350,
            footer: null,
            title: null,
            titleDescription: null,
            withCloseButton: false,
          },
          content: <ConfirmModal {...confirmProps} />,
          currentModal,
        };
      }
      default: {
        return {
          modalProps: undefined,
          content: null,
        };
      }
    }
  };

  const { modalProps, content, currentModal } = getCurrentModal();
  const isOpened = getVisibleModal().length > 0;

  return (
    <Modal
      {...modalProps}
      opened={isOpened}
      onClose={() => {
        if (currentModal) {
          // If confirm modal, onCancel is used instead of onClose
          if ((currentModal as TConfirmModalProps)?.onCancel) {
            (currentModal as TConfirmModalProps).onCancel?.();
            closeModal({ id: currentModal.id });
            return;
          }

          if (modalProps?.onClose) {
            modalProps.onClose();
          } else {
            closeModal({ id: currentModal.id });
          }
        }
      }}
      onClosed={() => {
        const modalToDismiss = modals.find(({ toDismiss }) => toDismiss === true);

        if (modalToDismiss) {
          modalProps?.onClosed?.();
          closeModal({ id: modalToDismiss.id, forceDelete: true });
        }
      }}
    >
      {content}
    </Modal>
  );
};

export default ModalManager;
