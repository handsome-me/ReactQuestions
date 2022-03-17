import React, { useEffect, useRef, useState } from "react";

export default function useDebounce(input) {
  //const [input,setInput]=React.useState(input);
  const [intervalId, setIntervalId] = React.useState(null);
  const [apiFired, setApifired] = useState(false);
  const isTyping = useRef(true);
  useEffect(() => {
    if (input && isTyping) {
      if (intervalId) {
        clearInterval(intervalId);
      }
      const id = setInterval(() => {
        //fire event,call the api and send response
        setApifired(true);
        isTyping.current = false;
      }, 300);
      setIntervalId(id);
    }
    if (apiFired) {
      setApifired(false);
    }
  }, [input]);

  return [apiFired, isTyping];
}
