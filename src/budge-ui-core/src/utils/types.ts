import React, { ReactElement, ReactFragment } from "react";

export const TypedMemo: <T>(c: T) => T = React.memo;

export type ReactChild = string | ReactElement | ReactFragment | null | undefined;
