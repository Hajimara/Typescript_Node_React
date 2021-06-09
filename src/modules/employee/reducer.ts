import {
  ActionType,
  createAsyncAction,
  createReducer,
} from 'typesafe-actions';

import { IEmployee } from '../../apis/employee';

export const EMPLOYEE = {
  REQUEST: 'EMPLOYEES_REQUEST',
  SUCCESS: 'EMPLOYEES_SUCCESS',
  FAILURE: 'EMPLOYEES_FAILURE',
};

interface IRequest {

}

interface IResponse {
    employees: IEmployee[]
}

interface IError {
    message: string
}

export const handleEmployee = createAsyncAction(EMPLOYEE.REQUEST, EMPLOYEE.SUCCESS, EMPLOYEE.FAILURE)<IRequest, IResponse, IError>();

export const actions = {
  handleEmployee,
};

type Actions = ActionType<typeof actions>
type State = { employees: IEmployee[], message: string }

const initalState: State = {
  employees: [],
  message: '',
};

const reducer = createReducer<State, Actions>(initalState)
  .handleAction(handleEmployee.success, (state, action: Actions) => ({ ...state, employees: action.payload.employees }))
  .handleAction(handleEmployee.failure, (state, action: Actions) => ({ ...state, message: action.payload.message }))
  // @ts-ignore
  .handleAction(handleEmployee.request, (state) => state);

export default reducer;
