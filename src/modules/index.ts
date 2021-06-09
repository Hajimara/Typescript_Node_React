import { combineReducers } from 'redux';
import { ForkEffect } from 'redux-saga/effects';

import employee from './employee';

const reducer = combineReducers({
  employee: employee.reducer,
});

const combineSagas = (param: { [key: string]: ForkEffect<never>[] }) => function* () {
  const targetSagas = Object.values(param).flat();

  for (let i = 0; i < targetSagas.length; i++) {
    yield targetSagas[i];
  }
};

export default {
  rootReducers: reducer,
  rootSagas: combineSagas({ employee: employee.saga }),
};
