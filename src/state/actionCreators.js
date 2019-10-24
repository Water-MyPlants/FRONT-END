import axios from "axios";
import * as types from "./actionTypes";
// import * as withAuth from '../helpers/axiosWithAuth';

const registerApi = "https://build-week-4.herokuapp.com/api/user/register";
const loginApi = "https://build-week-4.herokuapp.com/api/user/login";

export const userSignUpRequest = userData => dispatch => {
	console.log('in action creator',userData)
      axios.post(registerApi, userData)
      .then(({ data }) => {
        dispatch({ type: types.SIGN_UP });
        localStorage.setItem('token', data.token);
    })
    .catch(err => console.log(err));
};

export const attemptLogin = login => dispatch => {
	console.log(login)
  axios
    .post(loginApi, login)
    .then(({ data }) => {
      console.log("logged in", data);
      localStorage.setItem("token", data.token);
      dispatch({ type: types.LOGIN });
    })
    .catch(err => console.log(err));
};

export const setLoading = isLoading => {
  return { type: types.SET_LOADING, payload: isLoading };
};


// export const logout = () => {
// 	localStorage.removeItem('login_token');
// 	return { type: types.LOGOUT };
// }

// export const addPlantToList = plant => dispatch => {
// 	dispatch(setLoading(true));
// 	withAuth.axiosWithAuth().post("https://build-week-4.herokuapp.com/api/plants", plant)
// 		.then(({ data }) => {
// 			console.log('added a plant', data);
// 			dispatch(setPlantsList(data));
// 			dispatch(setLoading(false));
// 		})
// 		.catch(err => console.log(err))
// }
// export const startEditPlant = plant => {
// 	return { type: types.EDIT_PLANT, payload: plant };
// }

// export const editPlant = plant => dispatch => {
// 	dispatch(setLoading(true));
// 	dispatch(setLoading(true));
// 	withAuth.axiosWithAuth().put(`https://build-week-4.herokuapp.com/api/plants/${plant.id}`, plant)
// 		.then(({ data }) => {
// 			dispatch(setPlantsList(data));
// 			dispatch(setLoading(false));
// 		})
// 		.catch(err => console.log(err))
// }
// export const deleteFriend = id => dispatch => {
// 	dispatch(setLoading(true));
// 	withAuth.axiosWithAuth().delete(`https://build-week-4.herokuapp.com/api/plants/${id}`)
// 		.then(({ data }) => {
// 			dispatch(setPlantsList(data));
// 			dispatch(setLoading(false));
// 		})
// 		.catch(err => console.log(err))
// }