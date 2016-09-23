import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';

const enhancer = compose(
  applyMiddleware(thunk, createLogger()),
  DevTools.instrument()
);

export default initialState => {
  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers'))
    );
  }

  return store;
}
