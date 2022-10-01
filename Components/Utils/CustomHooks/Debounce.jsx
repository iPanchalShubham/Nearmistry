import React from "react";
// Debounce api
export function useDebounce(callBack, delay = 1000) {
  const [timeoutID, setTimeoutID] = React.useState();
  return (...args) => {
    if (timeoutID) clearTimeout(timeoutID);
    const timeout = setTimeout(() => {
      callBack(...args);
    }, delay);
    setTimeoutID(timeout);
  };
}
