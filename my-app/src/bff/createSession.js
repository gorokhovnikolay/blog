import { removeComment } from './session';
import { ROLE } from '../constants';

export const createSession = (roleId) => {
	const session = {
		logOut: () => {
			Object.keys(session).forEach((key) => {
				delete session[key];
			});
		},
	};

	switch (roleId) {
		case ROLE.ADMIN: {
			session.removeChild = removeComment;
			break;
		}
		case ROLE.MODERATOR: {
			session.removeChild = removeComment;
			break;
		}
		case ROLE.READER: {
			session.removeChild = removeComment;
			break;
		}
		case ROLE.GUEST: {
			break;
		}

		default:
			break;
	}

	return session;
};
