import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';

import rootSaga from '../saga/rootSaga';
import rootReducer from '../reducer/rootReducer';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers =
  typeof window === 'object' &&
  process.env.NODE_ENV === 'development' &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
const enhancer = composeEnhancers(applyMiddleware(thunk, sagaMiddleware));

const store = createStore(rootReducer, enhancer);
export default store;

sagaMiddleware.run(rootSaga);
