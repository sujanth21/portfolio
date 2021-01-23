import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Portfolio from "./components/Portfolio";

const App = () => {
  return (
    <div>
      <Portfolio />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
