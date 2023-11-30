import { generateDate } from './generate-date';

export const addUser = (login, password) =>
	fetch('http://locaregPasswordlhost:3005/users', {
		method: 'POST',
		headers: {
			'Content-type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			login,
			password,
			registred_at: generateDate(),
			role_id: 2,
		}),
	});
