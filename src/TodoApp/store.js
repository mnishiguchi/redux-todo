import { createStore, applyMiddleware } from 'redux'
import createLogger  from 'redux-logger'
import reducer       from './reducer'

import { loadState, saveState } from '../lib/localStorage'

const logger = createLogger({ level: 'info', collapsed: true })

const persistedState = loadState()

const store = createStore(
  reducer,
  persistedState,
  applyMiddleware( logger )
)

// On any state change, save the state to localStorage.
store.subscribe(() => {
  saveState(store.getState())
})

export default store
