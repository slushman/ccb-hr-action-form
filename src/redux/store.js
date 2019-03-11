import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { compose } from 'redux';

export const history = createBrowserHistory();

export const reduxFBConfig = {
  enableLogging: true,
  useFirestoreForProfile: true,
  userProfile: 'users',
};

const enhancers = ( window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() ) || compose(
  applyMiddleware(
    routerMiddleware( history )
  ),
);

const store = createStore(
  rootReducer( history ),
  {},
  enhancers,
);

export default store;
