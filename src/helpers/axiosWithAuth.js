import axios from 'axios';

//create axios with Auth
export const axiosWithAuth = () => {
	const token = localStorage.getItem('token');
	return axios.create({
		headers: {
			'Content-Type': 'application/json',
			Authorization : token,
		},
	});
};