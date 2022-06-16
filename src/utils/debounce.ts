type Debounce = (value: string) => void

export const registerDebounce = (fn: Function, timeout: number): Debounce  => {
  let timer: NodeJS.Timeout;

  return function (value: string) {
    if (timer) {
      timer && clearTimeout(timer);
    }
    timer = setTimeout(() => fn(value), timeout);
  }
};
