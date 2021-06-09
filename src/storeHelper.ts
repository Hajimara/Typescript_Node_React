import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import modules from './modules';

const sagaMiddleware = createSagaMiddleware();

export type RootState = ReturnType<typeof modules.rootReducers>;

const storeHelper = createStore(modules.rootReducers, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(modules.rootSagas);

export default storeHelper;
