import React   from 'react'

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
          onClick={(e) => {
            if (!todoTextInput.value) { return } // Ignore an empty input.
            props.handleSubmitAddTodo(todoTextInput.value)
            todoTextInput.value = ''  // Clear input.
          }}
        >
          Add todo
        </button>
      </span>
    </div>
  )

  /**
   * Triggers ADD_TODO when enter is clicked.
   */
  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      props.handleSubmitAddTodo(todoTextInput.value)
    }
  }
}

export default AddTodo
