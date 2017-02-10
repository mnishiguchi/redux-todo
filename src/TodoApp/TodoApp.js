import React       from 'react'
import { connect } from 'react-redux'

// Components
import AddTodo    from './AddTodo'
import TodoList   from './TodoList'
import FilterBox  from './FilterBox'

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
          <AddTodo/>

          <FilterBox />

          <TodoList
            todos={visibleTodos}
            handleClickTodo={this._handleClickTodo}
          />
        </div>
      </div>
    )
  }

  _handleClickTodo = (id) => {
    const { dispatch } = this.props
    dispatch({
      type: 'TOGGLE_TODO',
      id  : id,
    })
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect( mapStateToProps )( TodoApp )
