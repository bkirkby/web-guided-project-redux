import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import { dragonListReducer } from "./reducers/dragonListReducer";

import Title from "./components/Title";
import DragonList from "./components/DragonList";
import "./styles.css";

// STEP 1: Create the store
const store = createStore(
  dragonListReducer,
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
