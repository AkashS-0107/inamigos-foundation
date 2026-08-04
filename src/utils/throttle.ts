export interface ThrottledFunction<TArguments extends unknown[]> {
  (...args: TArguments): void;
  cancel: () => void;
}

export function throttle<TArguments extends unknown[]>(
  callback: (...args: TArguments) => void,
  wait: number,
): ThrottledFunction<TArguments> {
  let lastInvocation = 0;
  let timerId: ReturnType<typeof setTimeout> | undefined;
  let pendingArguments: TArguments | undefined;

  const invoke = (args: TArguments) => {
    lastInvocation = Date.now();
    callback(...args);
  };

  const throttled = (...args: TArguments) => {
    const elapsed = Date.now() - lastInvocation;
    const remaining = wait - elapsed;

    if (remaining <= 0 || lastInvocation === 0) {
      if (timerId) clearTimeout(timerId);
      timerId = undefined;
      pendingArguments = undefined;
      invoke(args);
      return;
    }

    pendingArguments = args;
    if (!timerId) {
      timerId = setTimeout(() => {
        timerId = undefined;
        if (pendingArguments) invoke(pendingArguments);
        pendingArguments = undefined;
      }, remaining);
    }
  };

  throttled.cancel = () => {
    if (timerId) clearTimeout(timerId);
    timerId = undefined;
    pendingArguments = undefined;
  };

  return throttled;
}
