import React      from 'react';
import classNames from 'classnames';

class Todo extends React.Component {

  render() {
    const { todo, handleClickTodoText } = this.props;

    const todoClass = classNames({
      "Todo card"                                  : true,
      "Todo card card-outline-primary"             : !todo.completed,
      "Todo card card-outline-secondary text-muted": todo.completed,
    });

    return (
      <div className={todoClass}>
        <div className="card-block">
          <p
            className="card-text"
            style={{textDecoration: (todo.completed) ? 'line-through' : 'none'}}
            onClick={(e) => handleClickTodoText(this.props.todo.id)}
          >
            {todo.text}
          </p>
        </div>
      </div>
    )
  }
}

export default Todo;
