import axios from 'axios';
import * as types from './actionTypes';
// import * as withAuth from '../helpers/axiosWithAuth';

const registerApi = "https://build-week-4.herokuapp.com/api/user/register";

export const userSignUpRequest = userData => dispatch => {
      axios.post(registerApi, userData)
      .then(({ data }) => {
        debugger
        dispatch({ type: types.SIGN_UP });
        localStorage.setItem('login_token', data.payload);
    })
    .catch(err => console.log(err));
  };

  export const onSignUpInputChange = field => {
      return {
          type: types.ON_SIGNUP_INPUT_CHANGE,
          payload: { [field.name]: field.value}
      };
  }