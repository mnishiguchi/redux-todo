import { combineReducers } from 'redux';

// A simple example of reducer composition
// - We let different reducers handle different parts of the state tree.

/**
 * @param state  - old state of todo
 * @param action - action that was dispatched
 * @return new state of todo
 */
const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      // Simply create a object with specified id and text.
      return {
        id       : action.id,
        text     : action.text,
        completed: false
      }

    case 'TOGGLE_TODO':
      // Toggle the completed boolean field only for the specified todo item.
      if (todo.id !== action.id) {
        return todo;
      }

      return {
        ...todo,
        completed: !todo.completed
      }

    default:
      return state;
  }
}

/**
 * @param state  - old state of todos
 * @param action - action that was dispatched
 * @return new state of todos
 */
const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      // Append the new todo item to the list.
      return [
        ...state,
        todo(undefined, action)
      ];

    case 'TOGGLE_TODO':
      return state.map(old => todo(old, action));

    default:
      return state;
  }
};

/**
 * @param state  - old state of visibilityFilter
 * @param action - action that was dispatched
 * @return new state of visibilityFilter
 */
const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;

    default:
      return state;
  }
};

/**
 * Combines reducers into a single reducer.
 * @param state  - old state of todoApp
 * @param action - action that was dispatched
 * @return new state of todoApp
 */
 const todoApp = combineReducers({
   todos,
   visibilityFilter
 });
// const todoApp = (state = {}, action) => {
//   return {
//     todos           : todos(state.todos, action),
//     visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//   }
// };

export default todoApp;
