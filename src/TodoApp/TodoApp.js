import React   from 'react';
import v4      from 'node-uuid';

// We import this so that we can use dispatch function.
import store   from './store';

// Components
import Todo       from './Todo';
import FilterLink from './FilterLink';

const getVisibleTodos = (todos, visibilityFilter) => {
  switch (visibilityFilter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
    default:
      return todos;
  }
};

class TodoApp extends React.Component {

  render() {
    const { todos, visibilityFilter } = this.props;
    const visibleTodos = getVisibleTodos(todos, visibilityFilter);

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

          <p>
            Show:
            {' '}
            <FilterLink
              filter='SHOW_ALL'
              handleClickFilter={this._handleClickFilter}
              currentFilter={visibilityFilter}
            >
              All
            </FilterLink>
            {'  '}
            <FilterLink
              filter='SHOW_ACTIVE'
              handleClickFilter={this._handleClickFilter}
              currentFilter={visibilityFilter}
            >
              Active
            </FilterLink>
            {'  '}
            <FilterLink
              filter='SHOW_COMPLETED'
              handleClickFilter={this._handleClickFilter}
              currentFilter={visibilityFilter}
            >
              Completed
            </FilterLink>
          </p>

          <div className="card-columns mt-2">
            {visibleTodos.map(todo =>
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
    if (!this._todoTextInput.value) { return; }

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

  _handleClickFilter = (filter) => {
    store.dispatch({
      type   : 'SET_VISIBILITY_FILTER',
      filter : filter,
    });
  }
}

export default TodoApp;
