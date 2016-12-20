import React   from 'react';

// We import this so that we can use dispatch function.
import store   from './store';

let nextTodoId = 0;

class TodoApp extends React.Component {
  
  render() {
    return (
      <div className="TodoApp">
        <button
          onClick={() => {
            store.dispatch({
              type: 'ADD_TODO',
              text: 'test',
              id  : nextTodoId++,
            });
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
