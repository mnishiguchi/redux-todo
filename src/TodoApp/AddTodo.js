import React   from 'react'
import v4      from 'node-uuid'

// We import this so that we can use dispatch function.
import store   from './store'

const AddTodo = (props) => {
  let todoTextInput

  return (
    <div
      className="input-group"
      onKeyPress={(e) => handleKeyPress(e)}
    >
      <input
        ref={node => todoTextInput = node}
        className="form-control"
        placeholder="Add todo..."
      />

      <span className="input-group-btn">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={(e) => handleSubmitAddTodo(todoTextInput.value)}
        >
          Add todo
        </button>
      </span>
    </div>
  )

  function handleSubmitAddTodo(text) {
    if (!todoTextInput.value) { return } // Ignore an empty input.
    store.dispatch({
      type: 'ADD_TODO',
      text: text,
      id  : v4(),
    })
    todoTextInput.value = ''  // Clear input.
  }

  /**
   * Triggers ADD_TODO when enter is clicked.
   */
  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      handleSubmitAddTodo(todoTextInput.value)
    }
  }
}

export default AddTodo
