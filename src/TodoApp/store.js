import { createStore, applyMiddleware } from 'redux';
import createLogger  from 'redux-logger';
import reducer       from './reducer';

const logger = createLogger({ level: 'info', collapsed: true });

const store = createStore(
  reducer,
  applyMiddleware( logger )
);

export default store
