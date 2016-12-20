import React   from 'react';

class Todo extends React.Component {

  render() {
    const { todo, handleClickTodoText } = this.props;

    return (
      <div className="card card-outline-primary">
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
