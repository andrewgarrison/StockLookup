import React from "react";
import { Header } from "./components";
import "./App.scss";

function App(props) {
  return (
    <div className="app">
      <Header {...props} />
      <div className="container">{props.children}</div>
    </div>
  );
}

export default App;
