import { useCallback, useEffect, useRef, useState } from "react";
import { AxiosError } from "axios";
import { ErrorResponse } from "@budgeinc/budge-api";

export type TInfiniteScrollListState<T> = {
  data: T[];
  page: number;
  loading: boolean;
  moreLoading: boolean;
  refreshing: boolean;
  reachedEnd: boolean;
};

export type TUseInfiniteScrollListSettings<T> = {
  onFetch(params: { page: number; pageSize: number }): Promise<{
    results: T[];
  }>;
  onLoading?(params: { initialLoading: boolean; moreLoading: boolean }): void;
  onError?(error: AxiosError<ErrorResponse>): void;
  onDataChange?(data: T[]): void;
  pageSize?: number;
  skipFirstForceRefresh?: boolean;
  initialLoading?: boolean;
};

export function useInfiniteScrollList<T>({
  onFetch,
  onError,
  onLoading,
  onDataChange,
  pageSize = 20,
  skipFirstForceRefresh = false,
  initialLoading = true,
}: TUseInfiniteScrollListSettings<T>) {
  const [refreshIndex, setRefreshIndex] = useState(skipFirstForceRefresh ? -1 : 0);
  const currentPage = useRef(1);

  const [requestState, setRequestState] = useState<TInfiniteScrollListState<T>>({
    data: [],
    page: 0,
    loading: initialLoading,
    moreLoading: false,
    refreshing: false,
    reachedEnd: false,
  });

  useEffect(() => {
    makeRemoteRequest(1);
  }, []);

  useEffect(() => {
    // if refresh index is -1 or 0 don't fetch
    // this prevent forceRefresh to trigger a fetch
    // when its called in a useEffect
    // This only happen is skipFirstForceRefresh is set to true
    if (refreshIndex && refreshIndex !== -1) {
      currentPage.current = 1;
      makeRemoteRequest(1, true);
    }
  }, [refreshIndex]);

  const forceRefresh = useCallback(() => setRefreshIndex(prev => prev + 1), []);

  const updateData = useCallback((data: T[]) => setRequestState(prev => ({ ...prev, data })), []);

  const makeRemoteRequest = useCallback(
    async (page: number, force: boolean = false) => {
      if ((!requestState.reachedEnd && page !== requestState.page) || force) {
        if (page === 1) {
          onLoading?.({ initialLoading: true, moreLoading: false });
          setRequestState(prev => ({ ...prev, loading: true }));
        } else {
          onLoading?.({ initialLoading: false, moreLoading: true });
          setRequestState(prev => ({ ...prev, moreLoading: true }));
        }

        onFetch({ page, pageSize })
          .then(res => {
            setRequestState(prev => {
              const newData = page === 1 ? res.results : [...prev.data, ...res.results];

              onDataChange?.(newData);

              return {
                ...prev,
                page,
                data: newData,
                loading: false,
                moreLoading: false,
                refreshing: false,
                reachedEnd: res.results.length === 0 || res.results.length < pageSize,
              };
            });
            onLoading?.({ initialLoading: false, moreLoading: false });
          })
          .catch((e: AxiosError<ErrorResponse>) => {
            onError?.(e);
            onLoading?.({ initialLoading: false, moreLoading: false });
            setRequestState(prev => ({ ...prev, loading: false }));
          });
      }
    },
    [requestState.reachedEnd, requestState.page, onFetch]
  );

  const onEndReached = useCallback(() => {
    if (requestState.data.length && !requestState.reachedEnd) {
      currentPage.current += 1;
      makeRemoteRequest(currentPage.current);
    }
  }, [requestState.data.length, requestState.reachedEnd, currentPage.current, makeRemoteRequest]);

  return {
    requestState,
    onEndReached,
    forceRefresh,
    updateData,
  };
}

export default useInfiniteScrollList;
