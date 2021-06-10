import {
  ActionType,
  createAsyncAction,
  createReducer,
} from 'typesafe-actions';

import {
  IRequest,
  IResponse,
  IError,
} from '../../apis/employee';

export const EMPLOYEE = {
  REQUEST: 'EMPLOYEES_REQUEST',
  SUCCESS: 'EMPLOYEES_SUCCESS',
  FAILURE: 'EMPLOYEES_FAILURE',
};

export interface IEmployee {
  id: string
  employee_name: string
  employee_salary: string
  employee_age: string
  profile_image: string
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
