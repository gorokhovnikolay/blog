import { server } from '../../bff';

export const logOutUser = (user) => {
	server.logOut(user);
	return { type: 'LOG_OUT_USER' };
};
