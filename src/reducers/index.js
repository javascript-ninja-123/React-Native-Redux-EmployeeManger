import  { combineReducers } from 'redux';
import AuthenticationReducer from './reducer_Auth';
import EmployeeFormReducer from './reducer_EmployeeForm';
import EmployeeFirebaseReducer from './reducer_EmployeeFirebase';
export default combineReducers({
  auth:AuthenticationReducer,
  employee:EmployeeFormReducer,
  employeeFirebase:EmployeeFirebaseReducer
});
