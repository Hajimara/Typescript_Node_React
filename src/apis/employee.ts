import axios from "axios";

export interface IEmployee {
    id: string
    employee_name: string
    employee_salary: string
    employee_age: string
    profile_image: string
}

export const callEmployees = (): Promise<IEmployee> => {
    return axios.get('http://dummy.restapiexample.com/api/v1/employees').then(response => {
        console.log(response);
       if (response.status !== 200) {
           throw new Error(response.statusText);
       }
       return response.data as Promise<IEmployee>
    });
}
