import { TExternalToast, TToast, TToastToDismiss } from "./Toast.types";
import { DeleteIcon, InfoIcon, SuccessIcon, UrgentIcon } from "../Icons";

let toastsCounter = 1;

class ToastObserver {
  subscribers: Array<(toast: TExternalToast | TToastToDismiss) => void>;

  constructor() {
    this.subscribers = [];
  }

  subscribe = (subscriber: (toast: TToast | TToastToDismiss) => void) => {
    this.subscribers.push(subscriber as any);

    return () => {
      const index = this.subscribers.indexOf(subscriber as any);
      this.subscribers.splice(index, 1);
    };
  };

  publish = (data: TToast) => {
    this.subscribers.forEach(subscriber => subscriber(data));
  };

  addToast = (data: TToast) => {
    this.publish(data);
  };

  info = (data: TExternalToast) => this.create({ ...data, color: "blue", icon: InfoIcon });

  warning = (data: TExternalToast) => this.create({ ...data, color: "yellow", icon: UrgentIcon });

  error = (data: TExternalToast) => this.create({ ...data, color: "red", icon: DeleteIcon });

  success = (data: TExternalToast) => this.create({ ...data, color: "green", icon: SuccessIcon });

  create = (
    data: TExternalToast & {
      color: TToast["color"];
      icon: TToast["icon"];
      title?: string;
      message?: TToast["message"];
    }
  ) => {
    const id = typeof data?.id === "number" || data.id?.length ? data.id : toastsCounter++;
    this.addToast({ id, ...data });
    return id;
  };
}

const ToastState = new ToastObserver();

const toastFunction = (data: TToast) => {
  const id = data?.id || toastsCounter++;

  ToastState.addToast({
    ...data,
    id,
  });

  return id;
};

export const toast = Object.assign(toastFunction, {
  subscribe: ToastState.subscribe,
  success: ToastState.success,
  error: ToastState.error,
  warning: ToastState.warning,
  info: ToastState.info,
});
