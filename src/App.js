import React from 'react';

// Redux store
import store   from './TodoApp/store';

// Components
import TodoApp from './TodoApp/TodoApp';

// Styles
import logo  from './logo.svg';
require('./App.css');

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img
            src={logo}
            className="App-logo"
            alt="logo"
          />
          <h2>Redux todo app</h2>
        </div>

        <TodoApp
          todos={store.getState().todos}
        />

      </div>
    );
  }
}

export default App;
