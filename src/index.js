import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'react';
import { Provider } from 'react-redux';

import Title from './components/Title';
import DragonList from './components/DragonList';
import './styles.css';
import { titleReducer } from './reducers/titleReducer';

const reduxStore = createStore(titleReducer);

function App() {
  return (
    <div className="App">
      <Title />
      <DragonList />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store={store}><App /></Provider >, rootElement);
