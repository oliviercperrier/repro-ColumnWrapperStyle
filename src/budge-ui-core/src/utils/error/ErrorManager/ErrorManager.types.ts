import { AppMessageOutputMessagesValue, ErrorResponse } from "@budgeinc/budge-api";

export type TErrorManagerProps = {
  messages: Record<string, AppMessageOutputMessagesValue>;
};

export type TSubscriber = {
  onError: (error: TError) => void;
  onDismissError: (id: number | string) => void;
};

export type TError = {
  id: number | string;
  key?: string | undefined;
  error: ErrorResponse | undefined;
  customMessage?: string;
};

export type TExternalError = Omit<TError, "id"> & {
  id?: number | string;
};
