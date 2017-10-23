import {EMAIL_CHANGED,PASSWORD_CHANGED,LOG_IN,EMAIL_ERROR_OCCURED,
PASSWORD_ERROR_OCCURED,ERROR_OCCURED,IS_LOADING
} from '../actions/type';

const INITIAL_STATE = {
email:'',
password:'',
user:null,
email_error:'',
password_error:'',
error:'',
isLoading:false
};

export default function(state= INITIAL_STATE,action){
  switch(action.type){
    case EMAIL_CHANGED:
    return {...state, email:action.payload};
    case PASSWORD_CHANGED:
    return {...state, password:action.payload};
    case IS_LOADING:
    return {...state, isLoading:true, error:''}
    case LOG_IN:
    return {...state,...INITIAL_STATE, user:action.payload
      };
    case EMAIL_ERROR_OCCURED:
    return {...state, email_error:action.payload, email:'',isLoading:false};
    case PASSWORD_ERROR_OCCURED:
    return {...state, password_error:action.payload, password:'',isLoading:false };
    case ERROR_OCCURED:
    return {...state, error:'Authentication Failed', password:'',email:'',isLoading:false}
    default:
    return state;
  }
}
