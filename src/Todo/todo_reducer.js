const initialState = [];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      // Append the new todo item to the list.
      return [
        ...state,
        {
          id       : action.id,
          text     : action.text,
          completed: false
        }
      ];
    case 'TOGGLE_TODO':
      // Unless the todo's id matches the id that is specified by action,
      // return the todo unchanged.
      // Update the completed boolean only for the specified todo item.
      return state.map(todo => {
        if (todo.id != action.id) { return todo; }

        return {
          ...todo,
          completed: !todo.completed
        }
      });
    default:
      return state;
  }
};
