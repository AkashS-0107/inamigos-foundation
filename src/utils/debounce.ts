export interface DebouncedFunction<TArguments extends unknown[]> {
  (...args: TArguments): void;
  cancel: () => void;
  flush: () => void;
}

export function debounce<TArguments extends unknown[]>(
  callback: (...args: TArguments) => void,
  wait: number,
): DebouncedFunction<TArguments> {
  let timerId: ReturnType<typeof setTimeout> | undefined;
  let lastArguments: TArguments | undefined;

  const invoke = () => {
    if (lastArguments) {
      callback(...lastArguments);
      lastArguments = undefined;
    }
  };

  const debounced = (...args: TArguments) => {
    lastArguments = args;
    if (timerId) clearTimeout(timerId);
    timerId = setTimeout(() => {
      timerId = undefined;
      invoke();
    }, wait);
  };

  debounced.cancel = () => {
    if (timerId) clearTimeout(timerId);
    timerId = undefined;
    lastArguments = undefined;
  };

  debounced.flush = () => {
    if (timerId) clearTimeout(timerId);
    timerId = undefined;
    invoke();
  };

  return debounced;
}
