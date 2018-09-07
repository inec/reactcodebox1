import React from "react";
import ReactDOM from "react-dom";
import { FaBeer } from "react-icons/fa/";
import { FaSnowflake } from "react-icons/fa/";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>ccc Hello CodeSandbox 1</h1>
      <h2>Start editing to see some magic happen!</h2>
      <FaBeer />
      <FaSnowflake />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
