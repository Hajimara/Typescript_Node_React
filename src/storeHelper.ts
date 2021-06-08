import createSagaMiddleware from "redux-saga";
import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import rootSagas from "./store/sagas";
import reducer from './store/index'

const sagaMiddleware = createSagaMiddleware();

export type RootState = ReturnType<typeof reducer>;

const storeHelper = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSagas);

export default storeHelper;

