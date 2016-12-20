import React      from 'react';
import classNames from 'classnames';

const Todo = (props) => {
  const {
    id,
    text,
    completed,
    handleClickTodo
  } = props;

  const todoClass = classNames({
    "Todo card"                        : true,
    "card-outline-primary"             : !completed,
    "card-outline-secondary text-muted": completed,
  });

  return (
    <div
      className={todoClass}
      onClick={(e) => handleClickTodo(id)}
    >
      <div className="card-block">
        <p
          className="card-text"
          style={{textDecoration: (completed) ? 'line-through' : 'none'}}
        >
          {text}
        </p>
      </div>
    </div>
  )
}

export default Todo;
