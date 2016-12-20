import React      from 'react';

// Components
import Todo from './Todo';

const TodoList = (props) => {
  const { todos, handleClickTodo } = props;

  return (
    <div className="TodoList card-columns mt-2">
      {todos.map(todo =>
        <Todo
          key={todo.id}
          {...todo}
          handleClickTodo={(e) => handleClickTodo(e)}
        />
      )}
    </div>
  )
}

export default TodoList;
