import { takeEvery } from 'redux-saga/effects';

import API from '../../apis/activity';
import { createAsyncSaga } from '../../lib';
import { fetch } from './reducer';

const asyncFetchSaga = createAsyncSaga(fetch, API.fetchActivities);

export default [
  takeEvery(fetch.request, asyncFetchSaga),
];
