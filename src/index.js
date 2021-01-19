import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

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
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <div className="App">
      <Title />
      <DragonList />
    </div>
  );
}

// STEP 1a: wrap Provider component around App and pass in the store as a prop
const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
