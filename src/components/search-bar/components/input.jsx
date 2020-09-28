import React from "react";
import { TextField } from "@material-ui/core";

export const Input = ({ onChange, value }) => {
  return (
    <TextField
      label="Search Stocks"
      className="search-bar__input"
      value={value}
      onChange={onChange}
    />
  );
};
