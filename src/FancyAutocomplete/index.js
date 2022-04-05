import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./index.css";
const listOfUPI = [
  "rbl",
  "paytm",
  "okicici",
  "sbi",
  "aubank",
  "yesbank",
  "hdfcbank",
  "alibank",
  "upi",
  "okaxis",
  "indusbank",
  "unionbank",
  "bankofmaharashtra",
  "paytm",
  "indusbank",
  "rbi"
];

const FacnyAutoComplete = function (props) {
  const [inputVal, setInputVal] = useState("");
  const [suggestList, setsuggestList] = useState([]);
  const [width, setWidth] = useState(0);
  const ref = useRef();
  //hint will be empty string in first render
  const [hint, setHint] = useState("");

  const filterListOfUPI = (value) => {
    //value - finding value
    if (value[value.length - 1] === "@") {
      return listOfUPI;
    }

    const splited = value.split("@");
    console.log("splited", splited);
    value = splited[1];
    const filteredUPI = listOfUPI.filter((val) => val.includes(value));
    return filteredUPI;
  };

  const onType = (event) => {
    console.log("onChagne", event);
    const value = event.target.value;
  };

  return (
    <div className="form-container">
      <div className="input-container">
        <input value={hint} className="hint"></input>

        <input
          className="input"
          value={inputVal}
          onChange={(event) => onType(event)}
          onKeyDown={(event) => {
            const { keycode = null } = event;
            if (keycode) {
              setInputVal(hint);
            }
          }}
        ></input>
      </div>

      {suggestList.length && (
        <div className="form-suggestions-container">
          {suggestList.length &&
            suggestList.map((item) => {
              return <div>{item}</div>;
            })}
        </div>
      )}
    </div>
  );
};

export default FacnyAutoComplete;
