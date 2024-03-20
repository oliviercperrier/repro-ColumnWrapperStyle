import { ErrorResponse } from "@budgeinc/budge-api";
import { AsyncThunk, AsyncThunkOptions, AsyncThunkPayloadCreator, createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { errorManager, getFormErrorMessage, isInvalidTokenError } from "../utils";
import { DefaultAppRootState, ThunkErrorPayload } from "./types";

// Check type: /node_modules/@reduxjs/toolkit/dist/createAsyncThunk.d.ts -> AsyncThunkConfig
export type AsyncThunkConfig<RootState> = {
  rejectValue: ThunkErrorPayload;
  state: RootState;
};

export type TCustomThunkOptions<ThunkArg, RootState> = AsyncThunkOptions<
  ThunkArg,
  {
    state: RootState;
  }
> & {
  showErrorModal?: boolean;
};

const createBudgeApiAsyncThunk = <Returned, ThunkArg = any, RootState = DefaultAppRootState>(
  type: string,
  thunk: AsyncThunkPayloadCreator<Returned, ThunkArg, AsyncThunkConfig<RootState>>,
  options?: TCustomThunkOptions<ThunkArg, RootState>
): AsyncThunk<Returned, ThunkArg, AsyncThunkConfig<RootState>> => {
  const { showErrorModal, ...thunkOptions } = options || {};

  return createAsyncThunk<Returned, ThunkArg, AsyncThunkConfig<RootState>>(
    type,
    async (arg, thunkAPI) => {
      try {
        return (await thunk(arg, thunkAPI)) as any;
      } catch (err: any) {
        const state = thunkAPI.getState() as DefaultAppRootState;
        const error = err as AxiosError<ErrorResponse>;
        const messageKey = error.response?.data?.message;
        const errorMessage = getFormErrorMessage(state.global.messages, error);

        if (showErrorModal && !isInvalidTokenError(error)) {
          errorManager.showError({
            key: messageKey,
            error: error?.response?.data,
          });
        }

        return thunkAPI.rejectWithValue({
          message: errorMessage,
          apiError: err,
        });
      }
    },
    thunkOptions
  );
};

export default createBudgeApiAsyncThunk;
