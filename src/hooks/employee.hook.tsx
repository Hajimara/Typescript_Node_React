import { useDispatch, useSelector } from 'react-redux';

import Employee from '../modules/employee';
import { RootState } from '../storeHelper';

function employeeHook() {
  const dispatch = useDispatch();
  const employeeState = useSelector((store:RootState) => store.employee);
  const handleEmployee = () => {
    dispatch(Employee.actions.handleEmployee.request(''));
  };

  return {
    employeeState,
    handleEmployee,
  };
}

export default employeeHook;
