import {
  applyMiddleware, combineReducers, compose, createStore,
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createLogger } from 'redux-logger';

import { loadFromLocalStorage, saveToLocalStorage } from './localStorage';
import userReducer from './reducers/userReducer';
import findReducer from './reducers/findReducer';

const logger = createLogger({ collapsed: (getState, action, logEntry) => !logEntry.error });

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  router: connectRouter(history),
  users: userReducer,
  findUser: findReducer,

});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [
  logger,
  thunkMiddleware,
  routerMiddleware(history),
];

const enhancers = composeEnhancers(applyMiddleware(...middleware));

const persistedState = loadFromLocalStorage();

const store = createStore(rootReducer, persistedState, enhancers);

store.subscribe(() => {
  saveToLocalStorage({
    users: {
      users: store.getState().users.users,
    },
  });
});

export default store;
