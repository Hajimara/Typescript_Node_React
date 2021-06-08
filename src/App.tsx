import React, {useEffect} from 'react';
import { createGlobalStyle } from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { actions } from './store/reducers';
import { RootState } from './storeHelper';


const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'NanumBarunGothic';
    font-style: normal;
    font-weight: 400;
    src: url(${require('./assets/font/NanumBarunGothic.ttf')});
  }

  body {
    font-family: 'NanumBarunGothic', sans-serif;
  }
`;

function App() {
    const dispatch = useDispatch();
    const employeeState = useSelector((store:RootState) => store.employees);

    useEffect(() => {
        dispatch(actions.handleEmployee.request(''));
    }, [])

    return (<>
        <GlobalStyle />
        {employeeState.map((employee, index) => <div key={index}>{employee.employee_name}</div>)}
    </>);
}

export default App;
