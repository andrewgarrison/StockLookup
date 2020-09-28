import React from "react";
import { SearchBar } from "../components/search-bar";

export const Home = (props) => {
  return (
    <div className="home">
      <h1 style={{ textAlign: "center", marginBottom: "48px" }}>
        Lighting Fast Stock Lookup
      </h1>
      <SearchBar {...props} />
    </div>
  );
};
