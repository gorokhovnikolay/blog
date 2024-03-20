import { session } from '../../bff/session';

export const setUser = (user) => {
	session.addHash(user);
	return { type: 'SET_USER', payload: user };
};
