import {EMPLOYEE_FETCH_SUCESS,EMPLOYEE_FETCH_FAIL} from '../actions/type';

const INITIAL_STATE = [];


export default function(state =INITIAL_STATE, action){
  switch(action.type){
    case EMPLOYEE_FETCH_SUCESS:
      return action.payload
      case EMPLOYEE_FETCH_FAIL:
      return action.payload;
    default:
    return state;
  }
}
