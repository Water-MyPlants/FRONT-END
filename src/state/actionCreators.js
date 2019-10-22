import axios from 'axios';
import * as types from './actionTypes';
// import * as withAuth from '../helpers/axiosWithAuth';

const registerApi = "https://build-week-4.herokuapp.com/api/user/register";
const loginApi = `https://build-week-4.herokuapp.com/api/user/login`





export const userSignUpRequest = userData => dispatch => {
    console.log(userData)
      axios.post(registerApi, userData)
      .then(res => {
        console.log(res);
    })
    .catch(err => console.log(err));
  };




  

//   export const onSignUpInputChange = field => {
//       return {
//           type: types.ON_SIGNUP_INPUT_CHANGE,
//           payload: { [field.name]: field.value}
//       };
//   }

export const setLoading = (isLoading) => {
	return { type: types.SET_LOADING, payload: isLoading };
}

export const onLoginInputChange = field => {
	return {
		type: types.ON_LOGIN_INPUT_CHANGE,
		payload: { [field.name]: field.value }
	};
}

export const logout = () => {
	localStorage.removeItem('login_token');
	return { type: types.LOGOUT };
}
export const attemptLogin = (login) => dispatch => {
	axios.post(loginApi, login)
		.then(({ data }) => {
			console.log('logged in', data);
			dispatch({ type: types.LOGIN });
			localStorage.setItem('login_token', data.payload);
		})
		.catch(err => console.log(err));

}