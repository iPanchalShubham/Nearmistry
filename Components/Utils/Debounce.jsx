import React from "react";
// Debounce api
export function Debounce(callBack, delay = 1000) {
  const [timeoutID, setTimeoutID] = React.useState();
  return (...args) => {
    if (timeoutID) clearTimeout(timeoutID);
    const timeout = setTimeout(() => {
      callBack(...args);
    }, delay);
    setTimeoutID(timeout);
  };
}
