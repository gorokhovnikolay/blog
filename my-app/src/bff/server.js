import { addUser } from './addUser';
import { createSession } from './createSession';
import { getUser } from './getUser';

export const server = {
	autorization: async (authLogin, authPassword) => {
		const user = await getUser(authLogin);

		if (!user) {
			return {
				error: 'Такого логина не существует',
				res: null,
			};
		}
		if (user.password !== authPassword) {
			return {
				error: 'Пароль введен некорректно',
				res: null,
			};
		}

		return {
			error: null,
			res: createSession(user.role_id),
		};
	},

	registration: async (regLogin, regPassword) => {
		const user = await getUser(regLogin);

		if (user) {
			return {
				error: 'Такй логин занят',
				res: null,
			};
		}

		addUser(regLogin, regPassword);

		return {
			error: null,
			res: createSession(2),
		};
	},
};
