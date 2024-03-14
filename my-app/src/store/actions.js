import { session } from '../bff/session';

export const setUser = (user) => {
	session.addHash(user);
	return { type: 'SET_USER', payload: user };
};

export const logOutUser = (user) => {
	session.removeHash(user);
	return { type: 'LOG_OUT_USER' };
};
