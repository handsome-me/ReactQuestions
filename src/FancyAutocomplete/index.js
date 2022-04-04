import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./index.css";
const listOfUPI = [
  "@rbl",
  "@paytm",
  "@okicici",
  "@sbi",
  "@aubank",
  "@yesbank",
  "@hdfcbank",
  "@alibank",
  "@upi",
  "@okaxis",
  "@indusbank",
  "@unionbank",
  "@bankofmaharashtra",
  "@paytm",
  "@indusbank",
  "@rbi"
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
  useLayoutEffect(() => {
    if (inputVal) {
      const width = ref.current.offsetWidth;
      console.log("width", width);
      setWidth(width);
    }
  }, [inputVal]);

  return (
    <div className="form-container">
      <div className="input-container">
        <span
          ref={ref}
          style={{ visibility: "hidden", opacity: "0", position: "absolute" }}
          ref={ref}
        >
          {inputVal}
        </span>
        <input
          onChange={(event) => {
            const value = event.target.value;
            setInputVal(value);
            if (!value || !value.includes("@")) {
              setsuggestList([]);
            }

            //checking of value is not empty string -> @ should not be the first char
            if (
              value[value.length - 1] == "@" ||
              (value.includes("@") && value.length > 1)
            ) {
              if (value[0] == "@") return;

              const allUPI = filterListOfUPI(value);
              console.log("filtered upi list ", allUPI);

              if (value[value.length - 1] === "@") {
                setHint(allUPI[0].split("@")[1]);
              } else {
                const t = allUPI[0].split("@")[1].length;
                console.log("hint", t);
                const v = value.split("@")[1].length;
                console.log("v", v);
                const s = allUPI[0].slice(v + 1, t + 1);
                console.log("hint", s);
                setHint(s);
              }
              console.log("allUPI---", allUPI);
              setsuggestList(allUPI);
            }
          }}
          value={inputVal}
        ></input>
        <span style={{ left: `${width}px` }} className="hint">
          {hint}
        </span>
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
