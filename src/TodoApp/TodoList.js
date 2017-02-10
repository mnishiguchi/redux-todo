import React from 'react'

// Components
import Todo from './Todo'

const TodoList = ({ todos, handleClickTodo }) => {
  return (
    <div className="TodoList card-columns mt-2">
      {todos.map((todo, i) =>
        <Todo
          key={todo.id}
          {...todo}
          handleClickTodo={(e) => handleClickTodo(e)}
        />
      )}
    </div>
  )
}

export default TodoList
