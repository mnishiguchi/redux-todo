import React   from 'react'
import v4      from 'node-uuid'

// We import this so that we can use dispatch function.
import store   from './store'

// Components
import Todo       from './Todo'
import FilterLink from './FilterLink'
import AddTodo    from './AddTodo'
import TodoList   from './TodoList'
import VisibilityFilter   from './VisibilityFilter'

const getVisibleTodos = (todos, visibilityFilter) => {
  switch (visibilityFilter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    default:
      return todos
  }
}

class TodoApp extends React.Component {

  render() {
    const { todos, visibilityFilter } = this.props
    const visibleTodos = getVisibleTodos(todos, visibilityFilter)

    return (
      <div className="TodoApp">
        <div className="card card-block">
          <AddTodo
            handleSubmitAddTodo={this._handleSubmitAddTodo}
          />

          <VisibilityFilter
            currentFilter={visibilityFilter}
            handleClickFilter={this._handleClickFilter}
          />

          <TodoList
            todos={visibleTodos}
            handleClickTodo={this._handleClickTodo}
          />
        </div>
      </div>
    )
  }

  _handleSubmitAddTodo = (text) => {
    store.dispatch({
      type: 'ADD_TODO',
      text: text,
      id  : v4(),
    })
  }

  _handleClickTodo = (id) => {
    store.dispatch({
      type: 'TOGGLE_TODO',
      id  : id,
    })
  }

  _handleClickFilter = (filter) => {
    store.dispatch({
      type   : 'SET_VISIBILITY_FILTER',
      filter : filter,
    })
  }
}

export default TodoApp
