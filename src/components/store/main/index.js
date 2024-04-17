import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';
import rootReducer from './rootReducer';
import { rootSaga } from './rootSaga';
// import { devMode } from '../../utils/common';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware, logger];
const store = configureStore({ reducer: rootReducer, middleware: () => middleware, devTools: 'development' });
sagaMiddleware.run(rootSaga);

export default store;
