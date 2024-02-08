import { RequestStatus } from "./types";

export const isIdleOrLoading = (status: RequestStatus) =>
  isIdle(status) || isLoading(status);

export const isIdle = (status: RequestStatus) => status === RequestStatus.IDLE;

export const isLoading = (status: RequestStatus) =>
  status === RequestStatus.PENDING;

export const isCompleted = (status: RequestStatus) =>
  status === RequestStatus.COMPLETED;

export const isError = (status: RequestStatus) =>
  status === RequestStatus.ERROR;
