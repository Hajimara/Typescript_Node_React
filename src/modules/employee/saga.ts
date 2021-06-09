import { takeEvery, call, put } from 'redux-saga/effects';

import { callEmployees } from '../../apis/employee';
import { EMPLOYEE } from './reducer';

function* employeesCall() {
  try {
    const employees = yield call(callEmployees);
    yield put({ type: EMPLOYEE.SUCCESS, payload: { employees: employees.data } });
  } catch (e) {
    yield put({ type: EMPLOYEE.FAILURE, payload: { message: e.message } });
  }
}

export default [
  takeEvery('EMPLOYEES_REQUEST', employeesCall),
];
