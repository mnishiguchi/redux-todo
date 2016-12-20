import React   from 'react';
import v4      from 'node-uuid';

// We import this so that we can use dispatch function.
import store   from './store';

// Components
import Todo from './Todo';

class TodoApp extends React.Component {

  render() {
    return (
      <div className="TodoApp">
        <div className="card card-block">
          <div>
            <div className="input-group">

              <input
                ref={node => this._todoTextInput = node}
                className="form-control"
                placeholder="Add todo..."
              />

              <span className="input-group-btn">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={(e) => this._handleClickAddTodoButton()}
                >
                  Add todo
                </button>
              </span>

            </div>
          </div>

          <div className="card-columns mt-2">
            {this.props.todos.map(todo =>
              <Todo
                todo={todo}
                key={todo.id}
                handleClickTodoText={(e) => this._handleClickTodoText(e)}
              />
            )}
          </div>
        </div>
      </div>
    );
  }

  _handleClickAddTodoButton = () => {
    store.dispatch({
      type: 'ADD_TODO',
      text: this._todoTextInput.value,
      id  : v4(),
    });
    this._todoTextInput.value = '';
  }

  _handleClickTodoText = (id) => {
    store.dispatch({
      type: 'TOGGLE_TODO',
      id  : id,
    });
  }
}

export default TodoApp;
