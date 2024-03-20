import { TModalProps } from "../Modal/Modal.types";
import { TAllExternalModals, TAllManagedModals, TOpenConfirmModalProps, TSubscriber } from "./ModalManager.types";

let modalsCounter = 1;

class ModalObserver {
  subscribers: Array<TSubscriber>;

  constructor() {
    this.subscribers = [];
  }

  subscribe = (subscriber: TSubscriber) => {
    this.subscribers.push(subscriber);

    return () => {
      const index = this.subscribers.indexOf(subscriber);
      this.subscribers.splice(index, 1);
    };
  };

  addModal = (data: TAllManagedModals) => {
    this.subscribers.forEach(subscriber => subscriber.onOpenModal(data));
  };

  closeActiveModal = () => {
    this.subscribers.forEach(subscriber => subscriber.onCloseActiveModal());
  };

  closeAllModals = () => {
    this.subscribers.forEach(subscriber => subscriber.onCloseAllModals());
  };

  openModal = (data: TModalProps) =>
    this.create({
      ...data,
      type: "modal",
    });

  openConfirm = (data: TOpenConfirmModalProps) =>
    this.create({
      ...data,
      type: "confirm",
    });

  create = (data: TAllExternalModals) => {
    const id = modalsCounter++;
    this.addModal({ id: data.id || id, ...data });

    return id;
  };
}

const ModalManagerState = new ModalObserver();

const modalFunction = (data: TAllManagedModals) => {
  const id = data?.id || modalsCounter++;

  ModalManagerState.addModal({
    ...data,
    id,
  });

  return id;
};

export const modalManager = Object.assign(modalFunction, {
  subscribe: ModalManagerState.subscribe,
  openModal: ModalManagerState.openModal,
  openConfirm: ModalManagerState.openConfirm,
  closeActiveModal: ModalManagerState.closeActiveModal,
  closeAllModals: ModalManagerState.closeAllModals,
});
