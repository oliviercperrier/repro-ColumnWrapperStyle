import { act, renderHook } from "@testing-library/react";
import { useDebounce } from "./useDebounce";

describe("useDebounced", () => {
  afterAll(() => {
    jest.restoreAllMocks();
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  let timeoutCallback: Function;

  const setTimeout = jest.spyOn(window, "setTimeout").mockImplementation(((cb: Function) => {
    timeoutCallback = cb;
    return 1;
  }) as any);

  const clearTimeout = jest.spyOn(window, "clearTimeout").mockReturnValue();

  it("should run without errors", () => {
    expect(clearTimeout).toBeCalledTimes(0);
    renderHook(() => useDebounce({ value: "value1", delay: 100 }));
    renderHook(() => useDebounce({ value: "value2", delay: 500 }));
  });

  it("should debounce value without errors", () => {
    expect(setTimeout).toBeCalledTimes(0);
    expect(clearTimeout).toBeCalledTimes(0);

    const hook = renderHook(() => useDebounce({ value: "value1", delay: 100 }));
    expect(hook.result.current).toEqual("value1");

    clearTimeout.mockReset();
    expect(clearTimeout).toBeCalledTimes(0);
    act(() => hook.unmount());
    expect(clearTimeout).toBeCalledTimes(1);
  });
});
