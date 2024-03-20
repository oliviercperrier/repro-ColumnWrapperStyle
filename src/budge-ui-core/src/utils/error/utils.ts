import { AppMessageOutputMessagesValue, ErrorResponse } from "@budgeinc/budge-api";
import { AxiosError } from "axios";
import { capitalize } from "@budgeinc/budge-ui-utils";
import { DEFAULT_ERROR_MSG } from "../contants";

export const getErrorMessageByKey = (
  messages: Record<string, AppMessageOutputMessagesValue>,
  messageKey: string | undefined
) => {
  const defaultMsg = messages.DEFAULT;

  let errorMessage = defaultMsg ? defaultMsg.message : DEFAULT_ERROR_MSG;

  if (messageKey && messages[messageKey] && messages[messageKey].userFriendly) {
    errorMessage = messages[messageKey].message;
  }

  return errorMessage || DEFAULT_ERROR_MSG;
};

interface ValidationError {
  constraints?: Record<string, string>;
  children: ValidationError[];
}

interface ValidationErrorData {
  validationErrors: ValidationError[];
}

export const getFormErrorMessage = (
  messages: Record<string, AppMessageOutputMessagesValue>,
  error: AxiosError<ErrorResponse>
) => {
  const messageKey = error.response?.data.message;
  const baseErrorMessage = getErrorMessageByKey(messages, messageKey);
  const errorData = error.response?.data?.data as ValidationErrorData;
  const validateErrors = errorData?.validationErrors;

  if (!messageKey?.includes("INPUT_VALIDATION_ERROR") || !validateErrors.length) {
    return baseErrorMessage;
  }

  const allMessages: string[] = [];

  retrieveAllErrorMessages(validateErrors, allMessages);

  return `${allMessages.length > 1 ? "- " : ""}${allMessages.map(msg => capitalize(msg)).join("\n- ")}`;
};

const retrieveAllErrorMessages = (next: ValidationError[], allMessages: string[]) =>
  next.forEach(({ constraints, children }) => {
    const constraintValues = constraints ? Object.values(constraints) : [];

    if (constraintValues.length) {
      allMessages.push(...constraintValues);
    }

    if (children.length) {
      retrieveAllErrorMessages(children, allMessages);
    }
  });

export const isInvalidTokenError = (error: AxiosError<ErrorResponse>) =>
  error.response?.status === 401 &&
  error.response?.data?.message.includes("INVALID_ACCESS_TOKEN") &&
  !error.response?.data?.url.includes("whoami");