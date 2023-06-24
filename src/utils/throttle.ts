export const throttle = (callback: () => void, delayTime: number) => {
  let timerId: NodeJS.Timeout | null;

  return () => {
    if (timerId) return;

    timerId = setTimeout(() => {
      callback();
      timerId = null;
    }, delayTime);
  };
};
