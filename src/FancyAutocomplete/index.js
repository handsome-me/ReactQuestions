import React, { useEffect, useState } from "react";
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
  return (
    <div className="form-container">
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
            setsuggestList(allUPI);
          }
        }}
        value={inputVal}
      ></input>

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
