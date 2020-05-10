import React from "react";

import "./search.css";

export const SearchBox = ({ placeholderName, handleSeach }) => {
  return (
    <input
      className="search"
      type="search"
      placeholder={placeholderName}
      autoFocus
      onKeyPress={e => {
        // console.log(e.target.value);
        if (e.key === "Enter") {
          console.log(e.target.value);
          handleSeach(e.target.value);
        }
      }}
    />
  );
};
