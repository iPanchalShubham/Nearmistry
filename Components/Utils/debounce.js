import { useState } from "react";
// Debounce api
export function debouce(callBack, delay = 1000) {
  const [timeoutID, setTimeoutID] = useState();
  return (...args) => {
    if (timeoutID | (args.length == 0)) clearTimeout(timeoutID);
    const timeout = setTimeout(() => {
      callBack(...args);
    }, delay);
    setTimeoutID(timeout);
  };
}
