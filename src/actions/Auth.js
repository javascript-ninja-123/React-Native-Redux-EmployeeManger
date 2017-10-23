import {auth} from './Firebase';
import { Actions } from 'react-native-router-flux';
import {EMAIL_CHANGED, PASSWORD_CHANGED, LOG_IN,EMAIL_ERROR_OCCURED,
  PASSWORD_ERROR_OCCURED,
  ERROR_OCCURED,
  IS_LOADING
} from './type';



export const emailChanged = email => {
  return{
    type:EMAIL_CHANGED,
    payload:email
  }
};


export const passwordChanged = password => {
  return{
    type:PASSWORD_CHANGED,
    payload:password
  }
};

export const loginUser = (loginInfo) => {
  const {email, password} = loginInfo;
  return dispatch => {
    dispatch({type:IS_LOADING});

    auth.signInWithEmailAndPassword(email,password)
    .then(user => {
      dispatchSuccess(dispatch,LOG_IN,user)
    })
    .then(() => Actions.main().employeeList())
    .catch(() => {
      auth.createUserWithEmailAndPassword(email,password)
        .then(user => {
          dispatchSuccess(dispatch,LOG_IN,user)
        })
        .then(() => Actions.main().employeeList())
        .catch(err => {
          if(err.message.includes('email')){
            dispatchFaield(dispatch,EMAIL_ERROR_OCCURED,err.message)
          }
          else if(err.message.includes('password')){
            dispatchFaield(dispatch,PASSWORD_ERROR_OCCURED, err.message)
            }
          else dispatchFaield(dispatch,ERROR_OCCURED,err.message)
    })
  })
}
}


const dispatchFaield = (dispatch,type,payload) => {
  dispatch({
    type,
    payload
  })
}

const dispatchSuccess = (dispatch,type,payload) => {
  dispatch({
    type,
    payload
  });
}
