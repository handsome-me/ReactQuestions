import "./styles.css";
import React, { useEffect, useState } from "react";

import useDebounce from "./DebounceHook";
export default function App() {
  const [input, setInput] = useState("");
  //console.log("Component  is rendering");

  const [isAPIfired, setIsTyping] = useDebounce(input);

  useEffect(() => {
    if (input) setIsTyping(true);
  }, [input]);

  useEffect(() => {
    // console.log("useEffect of component");

    console.log(isAPIfired);
    if (isAPIfired) {
      //first make it false
      //call the api
      // isTyping.current = true;
      //setIsTyping(false);
      // console.log(isAPIfired);
      console.log("call the api please");
    }
  }, [isAPIfired]);
  /// console.log("return of compoent ");
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
