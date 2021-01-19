import React from "react";
import ReactDOM from "react-dom";

import Title from "./components/Title";
import DragonList from "./components/DragonList";
import "./styles.css";

// STEP 1: Create the store

function App() {
  return (
    <div className="App">
      <Title />
      <DragonList />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
