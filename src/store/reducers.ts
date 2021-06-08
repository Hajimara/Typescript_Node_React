import { IEmployee } from "../apis/employee";
import {
    ActionType,
    createAsyncAction,
    createReducer
} from "typesafe-actions";

const EMPLOYEE = {
    REQUEST: 'EMPLOYEES_REQUEST',
    SUCCESS: 'EMPLOYEES_SUCCESS',
    FAILURE: 'EMPLOYEES_FAILURE'
}

interface IRequest {

}

interface IResponse {
    employees: IEmployee[]
}

interface IError {
    message: string
}

const handleEmployee = createAsyncAction(EMPLOYEE.REQUEST, EMPLOYEE.SUCCESS, EMPLOYEE.FAILURE)<IRequest, IResponse, IError>();

export const actions = {
    handleEmployee,
}

type Actions = ActionType<typeof actions>
type State = { employees: IEmployee[], message: string }

const initalState: State = {
    employees: [],
    message: '',
}

const reducer = createReducer<State>(initalState)
.handleAction(handleEmployee.success, (state, action: Actions) => {
    return { ...state, employees: action.payload.employees }
}).handleAction(handleEmployee.failure, (state, action: Actions) => {
    return { ...state, message: action.payload.message }
}).handleAction(handleEmployee.request, state => state);

export default reducer;
