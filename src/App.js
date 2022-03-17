import "./styles.css";
import React, { useEffect, useState } from "react";

import useDebounce from "./DebounceHook";
export default function App() {
  const [input, setInput] = useState("");
  const [isAPIfired, isTyping] = useDebounce(input);

  useEffect(() => {
    console.log(isAPIfired);
    if (isAPIfired) {
      //first make it false
      //call the api
      isTyping.current = true;
    }
  }, [isAPIfired]);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input
        value={input}
        type="text"
        onChange={(event) => {
          setInput(event.target.value);
        }}
      />
    </div>
  );
}
