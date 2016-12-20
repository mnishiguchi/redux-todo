import React from 'react';
import ReactDOM from 'react-dom';

// Redux store
import store from './TodoApp/store';

// Components
import App  from './App';

// Styles
require('./index.css');

// The root node of this application.
const render = () => {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
}

// Start up the App.
render();

// Listen for changes in redux store.
store.subscribe(render);
