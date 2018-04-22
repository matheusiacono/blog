/* globals window */
const throttle = (action) => {
  let isRunning = false;
  return () => {
    if (isRunning) {
      return;
    }
    isRunning = true;
    window.requestAnimationFrame(() => {
      action(() => {
        isRunning = false;
      });
    });
  };
};

export default throttle;
