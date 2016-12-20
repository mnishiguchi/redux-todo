import React   from 'react';

// We import this so that we can use dispatch function.
import store   from './store';

let nextTodoId = 0;

class TodoApp extends React.Component {

  render() {
    return (
      <div className="TodoApp">

        <input
          ref={node => this._todoTextInput = node}
          className="form-control"
        />
        <button
          className="btn btn-primary"
          onClick={() => {
            store.dispatch({
              type: 'ADD_TODO',
              text: this._todoTextInput.value,
              id  : nextTodoId++,
            });
            this._todoTextInput.value = '';
          }}
        >
          Add todo
        </button>

        <ul>
          {this.props.todos.map(todo =>
            <li key={todo.id}>
              {todo.text}
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default TodoApp;
