import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Title from './components/Title';
import DragonList from './components/DragonList';
import './styles.css';
import rootReducer from './reducers';

const reduxStore = createStore(rootReducer);

function App() {
  return (
    <div className="App">
      <Title />
      <DragonList />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store={reduxStore}><App /></Provider >, rootElement);
