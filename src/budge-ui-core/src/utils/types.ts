import React, { ReactElement } from "react";

export const TypedMemo: <T>(c: T) => T = React.memo;

export type ReactChild = string | ReactElement | null | undefined;

export type Maybe<T> = T | undefined | null;