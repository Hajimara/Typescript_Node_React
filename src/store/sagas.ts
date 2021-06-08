import { takeEvery, call, put } from 'redux-saga/effects'

import { callEmployees } from '../apis/employee'

function* employeesCall() {
    try {
        const employees = yield call(callEmployees);
        yield put({ type: 'EMPLOYEES_SUCCESS', payload: { employees: employees.data } })
    } catch (e) {
        yield put({ type: 'EMPLOYEES_FAILURE', payload: { message: e.message } })
    }
}

export default function* rootSagas() {
    yield takeEvery("EMPLOYEES_REQUEST", employeesCall)
}
