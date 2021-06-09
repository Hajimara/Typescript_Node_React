import React, { useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';

import employeeHook from './hooks/employee.hook';
import Employee from './components/Employee';

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
  const { employeeState, handleEmployee } = employeeHook();

  useEffect(() => {
    handleEmployee();
  }, []);

  return (<>
            <GlobalStyle />
            {employeeState.employees.map((employee, index) => <Employee {...employee} key={index} />)}
          </>);
}

export default App;
