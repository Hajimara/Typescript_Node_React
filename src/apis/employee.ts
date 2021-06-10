import axios from 'axios';
import { IEmployee } from '../modules/employee/reducer';

export interface IRequest {

}

export interface IResponse {
  data: IEmployee[],
  status: string
}

export interface IError {
  message: string
}

export const callEmployees = (): Promise<IResponse> => axios.get('http://dummy.restapiexample.com/api/v1/employees').then((response) => {
  if (response.status !== 200) {
    throw new Error(response.statusText);
  }
  return response.data as Promise<IResponse>;
});
