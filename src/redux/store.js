import { createStore, compose, applyMiddleware } from 'redux';
import createRootReducer, { getPreloadedState } from './reducers';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

export const history = createBrowserHistory();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => createStore(
  createRootReducer(history),
  getPreloadedState(),
  composeEnhancers(
    applyMiddleware(
      routerMiddleware(history)
    )
  )
);

export default configureStore;