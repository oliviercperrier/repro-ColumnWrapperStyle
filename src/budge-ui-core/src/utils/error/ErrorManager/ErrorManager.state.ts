import { TError, TExternalError, TSubscriber } from "./ErrorManager.types";

let errorsCounter = 1;

class ErrorObserver {
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

  dismiss = (id: number | string) => {
    this.subscribers.forEach(subscriber => subscriber.onDismissError(id));
    return id;
  };

  addError = (data: TError) => {
    this.subscribers.forEach(subscriber => subscriber.onError(data));
  };

  showError = (data: TExternalError) => this.create(data);

  create = (data: TExternalError) => {
    const id = typeof data?.id === "number" || data.id?.length ? data.id : errorsCounter++;
    this.addError({ id, ...data });
    return id;
  };
}

const ErrorState = new ErrorObserver();

const errorFunction = (data: TError) => {
  const id = data?.id || errorsCounter++;

  ErrorState.addError({
    ...data,
    id,
  });

  return id;
};

export const errorManager = Object.assign(errorFunction, {
  subscribe: ErrorState.subscribe,
  dismiss: ErrorState.dismiss,
  showError: ErrorState.showError,
});
