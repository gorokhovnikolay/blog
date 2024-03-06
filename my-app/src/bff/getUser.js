export const getUser = async (login) => {
	const users = fetch('http://localhost:3003/users').then((data) => data.json());
	return users.find(({ userLogin }) => userLogin === login);
};
