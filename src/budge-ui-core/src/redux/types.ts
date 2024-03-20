import { AppMessageOutputMessagesValue, ErrorResponse } from "@budgeinc/budge-api";
import { RequestStatus } from "@budgeinc/budge-ui-utils";
import { AxiosError } from "axios";

export type DefaultAppGlobalState = {
  messages: {
    [key: string]: AppMessageOutputMessagesValue;
  };
};

export type DefaultAppRootState<CustomAppState = {}, CustomAppGlobalState = {}> = CustomAppState & {
  global: CustomAppGlobalState & DefaultAppGlobalState;
};

export type ThunkErrorPayload = {
  message: string;
  apiError?: AxiosError<ErrorResponse>;
};

export type WithRequestStatus<T = unknown> = T & {
  requestStatus: RequestStatus;
  error?: ThunkErrorPayload | undefined;
};
