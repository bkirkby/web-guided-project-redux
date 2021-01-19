import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";

import Title from "./components/Title";
import DragonList from "./components/DragonList";
import "./styles.css";

const reducer = () => {
  return {
    name: "Donald Duck",
    company: "Disney",
  };
};

// STEP 1: Create the store
const store = createStore(reducer);

console.log(store.getState());

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
