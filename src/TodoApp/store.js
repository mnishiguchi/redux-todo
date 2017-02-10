import { createStore, applyMiddleware } from 'redux'
import createLogger                     from 'redux-logger'
import throttle                         from 'lodash/throttle'

import reducer                  from './reducer'
import { loadState, saveState } from '../lib/localStorage'

const logger = createLogger({ level: 'info', collapsed: true })

const persistedState = loadState()

const store = createStore(
  reducer,
  persistedState,
  applyMiddleware( logger )
)

// On any state change, save the state to localStorage.
// Prevent the saveState function from being called too many times in case that
// state updates vary fast.
store.subscribe(throttle(() => {
  console.debug('saveState')
  const { todos } = store.getState()
  saveState({
    todos
  })
}, 1000)) // At most once this length of time.

export default store
