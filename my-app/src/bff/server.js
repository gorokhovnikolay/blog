import { addUser } from './addUser';
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
			res: {
				id: user.id,
				login: user.login,
				roleId: user.role_id,
				session: Date.now() + Math.random().toFixed(50),
			},
		};
	},

	registration: async (regLogin, regPassword) => {
		const candidatUser = await getUser(regLogin);

		if (candidatUser) {
			return {
				error: 'Такй логин занят',
				res: null,
			};
		}

		const user = await addUser(regLogin, regPassword);
		return {
			error: null,
			res: {
				id: user.id,
				login: user.login,
				roleId: user.role_id,
				session: Date.now() + Math.random().toFixed(50),
			},
		};
	},
};
