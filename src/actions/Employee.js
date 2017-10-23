import {db,auth} from './Firebase'
import {Actions} from 'react-native-router-flux'
import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEE_FETCH_SUCESS,
  EMPLOYEE_FETCH_FAIL,
  EMPLOYEE_FETCH_LOADING,
  EMPLOYEE_SAVED_SUCCESS
} from './type';


const ref = db.ref();
const userRef = ref.child('users');


export const employeeUpdate = ({prop,value}) => {
  return{
    type:EMPLOYEE_UPDATE,
    payload:{prop,value}
  }
};


export const employeeFetch = () => {
    const { currentUser } = auth;
    return dispatch => {
      dispatch({
        type:EMPLOYEE_FETCH_LOADING
      })
      userRef.child(`${currentUser.uid}/employees`)
      .on('value', snap => {
        let snapshot = snap.val();
        try{
          let newPayload = Object.values(snapshot)
          dispatch({
            type:EMPLOYEE_FETCH_SUCESS,
            payload:newPayload
          })
        }
        catch(err){
          dispatch({
            type:EMPLOYEE_FETCH_FAIL,
            payload:'new employee has to be added'
          })
        }
      })
    }
}

export const employeeCreate = ({name,phone,shift}) => {
  const { currentUser } = auth;
  return dispatch => {
    const id = userRef.child(`${currentUser.uid}/employees`).push().key;
    userRef.child(`${currentUser.uid}/employees`)
    .push({name, phone, shift, id })
    .then(() => {
      dispatch({
        type:EMPLOYEE_CREATE
      })
    })
    .then(() => Actions.pop())

  }
}


export const employeeUpdateFirebase = ({name,phone,shift,id}) => {
    const { currentUser } = auth;
      return dispatch => {
      userRef.child(`${currentUser.uid}/employees`)
      .orderByChild('id')
      .equalTo(id)
      .once('child_added')
      .then(snap => snap.ref.update({name,phone,shift}))
      .then(() => {
        dispatch({
          type:EMPLOYEE_SAVED_SUCCESS
        })
      })
      .then(() => Actions.pop())
  }
}


export const employeeDeleteFirebase = (id) => {
    const { currentUser } = auth;
    return dispatch => {
      userRef.child(`${currentUser.uid}/employees`)
      .orderByChild('id')
      .equalTo(id)
      .once('child_added', snap => {
        snap.ref.remove();
      })
      .then(() => {
        Actions.pop();
      })
    }
}
