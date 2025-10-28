export const Debounce = <T extends (...args: string[]) => void>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timer: ReturnType<typeof setTimeout> | undefined;

  return (...args: Parameters<T>): void => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
};
