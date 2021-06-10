import React, { useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';

import employeeHook from './hooks/employee.hook';
import Employee from './components/Employee';
import Activity from './components/Activity';
import activityHook from './hooks/activity.hook';

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
  const { activities, fetchActivities } = activityHook();
  useEffect(() => {
    handleEmployee();
    fetchActivities();
  }, []);

  return (<>
            <GlobalStyle />
    <div>
      Home!
      {employeeState.employees.map((employee, index) => <Employee {...employee} key={index} />)}
      <hr />
      {activities.map((activity, index) => <Activity {...activity} key={index} />)}
    </div>
          </>);
}

export default App;
