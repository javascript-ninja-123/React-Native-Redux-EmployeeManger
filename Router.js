import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import LoginForm from './src/components/LoginForm';
import EmployeeList from './src/components/EmployeeList';
import EmployeeCreate from './src/components/EmployeeCreate';
import EmployeeEdit from './src/components/EmployeeEdit';

const RouterComponent = () => {
  return(
    <Router sceneStyle={{backgroundColor:'white'}}>
      <Scene key="root" hideNavBar>
        <Scene key='auth'>
          <Scene key='login' component={LoginForm} title='Login' initial={true}/>
        </Scene>
        <Scene key='main'>
          <Scene key='employeeList'
          component={EmployeeList}
          title='Employee List'
          onRight={() => Actions.employeeCreate()}
          rightTitle='add'
          />
          <Scene key='employeeCreate'
          component={EmployeeCreate}
          title='Employee Create'
          />
          <Scene key='employeeEdit'
          component={EmployeeEdit}
          title='Employee Edit'
          />
        </Scene>
      </Scene>
    </Router>
  )
}

export default RouterComponent;
